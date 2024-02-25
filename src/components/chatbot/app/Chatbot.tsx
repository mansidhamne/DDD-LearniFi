"use client"

import { useState, useEffect } from 'react';
import sendResponse  from '@/api/chat';
import React from 'react';

interface ChatMessage {
    role: string;
    parts: { text: string }[];
}

const Chatbot = () => {
  const [userInput, setUserInput] = useState('');
  const [chatHistory, setChatHistory] = useState<ChatMessage[]>([]);

  useEffect(() => {
    // Example initial history setup (adjust based on your requirements)
    setChatHistory([
      { role: 'model', parts: [{ text: 'Hi there! I\'m LearniFI, your friendly chatbot. ' }] },
    ]);
  }, []);

  const handleSendMessage = async () => {
    if (!userInput.trim()) return;

    const response = await sendResponse(userInput);
    setChatHistory([
      ...chatHistory,
      { role: 'user', parts: [{ text: userInput }] },
      { role: 'model', parts: [{ text: response }] },
    ]);
    setUserInput('');
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-orange-100/75	">
      <div className="text-center p-4">
        <h2 className='text-3xl font-semibold text-blue-600'>LearniFi</h2>
        <p className='text-base text-green-600 italic'>Your friend across the screen</p>
      </div>
      <div className="bg-white rounded-lg shadow-md p-4 h-[500px] w-[500px]">
        <div className="flex flex-col h-full">
        <div className="flex-grow overflow-y-auto">
          {chatHistory.map((message, index) => (
            <div key={index} className={`max-w-2xl text-left rounded-lg p-4 mb-4 ${
              message.role === 'user' ? 'bg-green-400/75 text-slate-950' : 'bg-gray-100 text-gray-700'
            }`}>
              {message.role === 'user' ? 'You: ' : 'LearniFi: '}
              {message.parts[0].text}
            </div>
          ))}
        </div>
        
        <div className="flex items-center mt-4">
          <input
            className="bg-gray-100 p-2 rounded-md border border-gray-300 focus:border-blue-500 w-full"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            onKeyDown={(e) => (e.key === 'Enter' ? handleSendMessage() : null)}
            placeholder="Type your message"
          />
          <button
            className="bg-blue-500 text-white p-2 rounded-md ml-3 hover:bg-blue-700"
            onClick={handleSendMessage}
          >
            Send
          </button>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Chatbot;
