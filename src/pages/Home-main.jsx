import { Link } from "react-router-dom";
import Logo from "../assets/logo.png"
import Banner from "../assets/home-banner.png"
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChatbotIcon from '../assets/chatbot.png';
import './Home.scss';
import { Navbar } from "../components/Navbar";
import { useState } from "react";

export const HomeMain = () => {
    // const [showChatbot, setShowChatbot] = useState(false); // State to manage chatbot visibility

    // const toggleChatbot = () => {
    //     setShowChatbot(!showChatbot);
    // };

    return(
        <main>
            <div className="home-container">
                <div className="home-text-section">
                    <h1 className="primary-heading">
                        Where Learning Meets Understanding
                    </h1>
                    <p className="primary-text">
                    Learnifi is a safe harbor for autistic children to explore their dreams. 
                    Celebrating their individuality, we empower them to craft their own 
                    remarkable paths to success. Join our journey towards inclusive 
                    education, where every child's brilliance shines, regardless 
                    of their differences.
                    </p>
                    <button className="secondary-button">
                        Get Started<ChevronRightIcon/>{" "}
                    </button>
                </div>
                <div className="home-image-section">
                    <img src={Banner} alt="" />
                </div>
                {/* <img 
                    className="chatbot-image" 
                    src={ChatbotIcon} 
                    alt="Chatbot" 
                    onClick={toggleChatbot} 
                    style={{ display: showChatbot ? 'none' : 'block' }} // Show the chatbot image when chatbot is hidden
                />
                <div className="chatbot-container" style={{ display: showChatbot ? 'block' : 'none' }}>
                    <Chatbot sendMessage={handleSendMessage} />
                </div> */}
            </div>
            
        </main>
    )
}
