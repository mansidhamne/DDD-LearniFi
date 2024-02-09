import { Link } from "react-router-dom";
import './Home.scss';
import UnderLine from "../assets/underline.png"
import Analytics from "../assets/analytics.png"
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

export const AboutUs = () => {
    return (
        <div className="aboutus-container">
            <div className="header-container">
                <div className="primary-heading">
                    <p>Bloom At Your Own Pace</p>
                    <img src={UnderLine} alt="" />
                </div>
                <div className="header-text">
                    <p>Get personalised educational vidoes and coures
                        based on your strengths as analysed by our AI.
                        Embark on an engaging adventure, interacting with games, 
                        puzzles, and stories that assess your natural talents and interests. 
                    </p>
                    <button className="sec-button">Learn More<ChevronRightIcon/></button>
                </div>
            </div>
            <div className="cards-section">
                <div className="card">
                    <div className="card-title">
                        <img className="card-one" src={Analytics} alt="" />
                        <h2>AI weaves the threads</h2>
                    </div>
                    <div className="card-text">
                        <p>Our clever AI analyzes the data, 
                        identifying strengths in areas like math, science, 
                        language, creativity, and more and gives insightful
                        reports from the same</p>
                    </div>
                </div>
                <div className="card">
                    <div className="card-title">
                        <img className="card-one" src={Analytics} alt="" />
                        <h2>Learning that dances</h2>
                    </div>
                    <div className="card-text">
                        <p>The course is never static, adapting and evolving 
                            as your child progresses. Imagine learning math 
                            through coding a video game, or writing a captivating 
                            story set in the cosmos!</p>
                    </div>
                </div>
                <div className="card">
                    <div className="card-title">
                        <img className="card-one" src={Analytics} alt="" />
                        <h2>Strengths, Not Gaps</h2>
                    </div>
                    <div className="card-text">
                        <p>Focus on nurturing what you excel at, build 
                            confidence and a love for learning. Learn faster and 
                            retain information better, maximizing your learning journey.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

