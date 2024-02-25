import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

import  "./navbar.scss";

export const Navbar=()=>{
    const handleLinkClick = (event) => {
        event.preventDefault();
        const navigate = useNavigate();
        navigate(event.currentTarget.getAttribute('href'));
      };
      
    return(
        <div className="navbar"> 
            <div className="navbar-container">
                <h1 className="logo">LearniFi</h1>
                <div className="links">
                    <Link to="/" onClick={handleLinkClick} className="active">Home</Link>
                    <Link to="/about" onClick={handleLinkClick}>About</Link>
                    <Link to="/games" onClick={handleLinkClick}>Games</Link>
                    <Link to="/blogs" onClick={handleLinkClick}>Blogs</Link>
                    {/* <Link to="/chatbot" onClick={handleLinkClick}>Chat With Us</Link> */}
                    <a href="/chatbot">Chat With Us</a>
                    <a className="login" href="/login">Login</a>
                    {/* <a className="enroll" href="">Enroll</a>  */}
                </div>
            </div>    
        </div>
    )
}

