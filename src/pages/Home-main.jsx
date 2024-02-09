import { Link } from "react-router-dom";
import Logo from "../assets/logo.png"
import Banner from "../assets/home-banner.png"
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import './Home.scss';
import { Navbar } from "../components/Navbar";

export const HomeMain = () => {
    return(
        <main>
            <div className="home-container">
                <div className="home-text-section">
                    <h1 className="primary-heading">
                        Education At Your Fingertips
                    </h1>
                    <p className="primary-text">
                    A launchpad for Dreams. By nurturing what makes each child unique, 
                    we empower them to weave their own extraordinary tapestries of success.
                    It's a movement for educational equity, for unlocking every child's potential, 
                    and for building a brighter future where knowledge is a door that 
                    opens limitless possibilities, no matter where you live.
                    </p>
                    <button className="secondary-button">
                        Enroll Now<ChevronRightIcon/>{" "}
                    </button>
                </div>
                <div className="home-image-section">
                    <img src={Banner} alt="" />
                </div>
            </div>
        </main>
    )
}
