import { Link } from "react-router-dom";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import Logo from "../assets/logo.png";

import  "./footer.scss";

export const Footer = () => {
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      };

    return(
        <div className="footer">
          <div className="footer-container">
            <div className="footer-content">
              <div className="footer-left">
                  <img src={Logo} alt="EduSite logo" />
                  <span className="footer-header">LearniFi</span>
              </div>
            <div className="footer-links">
              <Link onClick={() => scrollToSection('Home')} to="/">
                Home
              </Link>
          <Link onClick={() => scrollToSection('AboutUs')} to="/">
            About Us
          </Link>
          <Link onClick={() => scrollToSection('Instructors')} to="/">
            Instructors
          </Link>
          <Link onClick={() => scrollToSection('Courses')} to="/">
            Courses
          </Link>
          <Link onClick={() => scrollToSection('ContactUs')} to="/">
            Contact Us
          </Link>
        </div>
        <div className="footer-social">
          <LinkedInIcon />
          <InstagramIcon />
          <TwitterIcon />
        </div>
      </div>
      <div className="footer-copyright">
        © 2024 LearniFi All Rights Reserved
      </div>
      </div>
    </div>
    )
}




