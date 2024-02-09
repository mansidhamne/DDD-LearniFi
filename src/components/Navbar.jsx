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
                {/* <a href="" className="active">Home</a>
                <a href="">About</a>
                <a href="">Instructors</a>
                <h1 className="logo">LearniFi</h1>
                <a href="">Courses</a>
                <a href="">Login</a>
                <a className="enroll" href="">Enroll</a> */}
                <Link to="/" onClick={handleLinkClick} className="active">Home</Link>
                <Link to="/about" onClick={handleLinkClick}>About</Link>
                <Link to="/instructors" onClick={handleLinkClick}>Instructors</Link>
                <h1 className="logo">LearniFi</h1>
                <Link to="/courses" onClick={handleLinkClick}>Courses</Link>
                <a href="/login">Login</a>
                <a className="enroll" href="">Enroll</a> 
            </div>    
        </div>
    )
}

