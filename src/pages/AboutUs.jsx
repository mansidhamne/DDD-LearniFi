import { Link } from "react-router-dom";
import './Home.scss';
import UnderLine from "../assets/underline.png"
import Game from "../assets/game.png"
import Chatbot from "../assets/chatbot.png"
import Progress from "../assets/progress.png"
import Mansi from "../assets/Mansi.jpeg"
import Akshay from "../assets/Akshay.jpeg"
import Vivek from "../assets/Vivek.jpeg"
import Doodle1 from "../assets/doodle1.png"
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

export const AboutUs = () => {
    return (
        <div className="aboutus-container">
            <div className="header-container">
                <div className="primary-heading">
                    <p>Bloom At Your Own Pace</p>
                    <img src={UnderLine} alt="" />
                    <button className="sec-button">Get Started<ChevronRightIcon/></button>
                </div>
                <div className="header-text">
                    <p>Welcome to Learnifi, a dedicated platform designed to make 
                        learning more accessible and enjoyable for autistic children. 
                        At Learnifi, we understand the unique challenges that autistic 
                        children may face in traditional educational settings, and 
                        we are committed to providing resources and support to help 
                        them thrive. Our interactive and adaptive learning tools are 
                        specifically tailored to cater to the diverse needs of 
                        autistic learners, fostering a supportive environment where 
                        they can learn at their own pace and in ways that suit their 
                        individual preferences. Join us on a journey towards empowering 
                        autistic children to reach their full potential through the joy 
                        of learning.
                    </p>
                </div>
            </div>
            <div className="cards-section">
                <div className="card">
                    <div className="card-title">
                        <img className="card-one" src={Game} alt="" />
                        <h2>Game-Based Learning</h2>
                    </div>
                    <div className="card-text">
                        <p>Engage your child in educational games designed 
                            to enhance memory retention, cognitive speed, and 
                            mental flexibility, making learning an interactive 
                            and enjoyable experience.</p>
                    </div>
                </div>
                <div className="card">
                    <div className="card-title">
                        <img className="card-one" src={Chatbot} alt="" />
                        <h2>Get a Customised Chatbot</h2>
                    </div>
                    <div className="card-text">
                        <p>Introduce your child to 'LearniFi,' our friendly 
                            chatbot companion, fostering conversational 
                            interactions tailored to your child's age and learning 
                            needs in a safe and welcoming environment.</p>
                    </div>
                </div>
                <div className="card">
                    <div className="card-title">
                        <img className="card-one" src={Progress} alt="" />
                        <h2>Track Your Child's Growth</h2>
                    </div>
                    <div className="card-text">
                        <p>Receive detailed monthly reports providing 
                            insights into your child's educational progress, 
                            highlighting achievements and areas for development, 
                            empowering informed decisions in their learning journey.</p>
                    </div>
                </div>
            </div>
            {/* MEET THE TEAM */}
            <div className="meet-the-team">
                <div className="team-text">
                    <div className="team-head">
                        <h1>Meet The Team</h1>
                        <img className="doodle" src={Doodle1} alt="" />
                    </div>
                    <p>Hello! We are a dynamic team of second-year college students 
                        from Mumbai, India, united by our passion for creating positive societal change. 
                        Inspired by a shared mission to empower the underprivileged and 
                        promote equality, we are determined to develop projects that 
                        make a meaningful impact. Join us on our journey as we strive to 
                        build a better, more inclusive society where everyone has the 
                        chance to succeed, regardless of their circumstances.
                    </p>
                </div>
                <div className="team-images">
                    <div className="mem">
                        <img className="team-image" src={Mansi} alt="" />
                        <h3>Mansi Dhamne</h3>
                        <p>Full Stack Developer</p>
                    </div>
                    <div className="mem">
                        <img className="team-image" src={Vivek} alt="" />
                        <h3>Vivek Gangwani</h3>
                        <p>Full Stack Developer</p>
                    </div>
                    <div className="mem">
                        <img className="team-image" src={Akshay} alt="" />
                        <h3>Akshay Gokhale</h3>
                        <p>Full Stack Developer</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

