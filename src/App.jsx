import "./app.scss";
import { Navbar } from "./components/Navbar";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import { Home } from "./pages/Home";
import { AboutUs } from "./pages/AboutUs";
import { Instructors } from "./pages/Instructors";
import { Courses } from "./pages/Courses";
import { ContactUs } from "./pages/ContactUs";
import LoginForm from "./pages/LoginForm";
import Dashboard from "./pages/dashboard/Dashboard"
import { useEffect } from 'react';
import { auth } from "./config/firebase";;

const App = () => {
  function ProtectedRoute({ children }) {
    useEffect(() => {
      const unsubscribe = auth.onAuthStateChanged((user) => {
        if (!user) {
          // Not authenticated, redirect to login
          navigate('/login'); // Use your routing mechanism
        }
      });
  
      return unsubscribe;
    }, []);
  
    return children;
  }

  return (
    <div>
      
      <Router>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<AboutUs />} /> 
          <Route path="/instructors" element={<Instructors />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/dashboard/" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
        <Route path="/dashboard/users" element={<Dashboard/>} />
        <Route path="/dashboard/users/1" element={<Dashboard />} /> 
        </Routes>
      </Router>
      
    </div>
  );
};

export default App;
