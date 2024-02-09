import { Link } from "react-router-dom";
import './Home.scss';
import CourseImage from "../assets/courses.png"
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

export const Courses = () => {
    return (
        <div className="courses-container">
            <div className="courses-text-section">
                    <h1 className="courses-heading">
                    Unlock Your Potential with Custom Courses and Regular Challenges
                    </h1>
                    <p className="course-text">
                    Imagine a learning space where every path is crafted 
                    just for you, a vibrant garden where your unique 
                    talents blossom under the sun of personalized courses 
                    and the rain of stimulating challenges. 
                    </p>
                    <button className="secondary-button">
                        Enroll Now <ChevronRightIcon/>{" "}
                    </button>
                </div>
                <div className="course-image-section">
                    <img src={CourseImage} alt="" />
                </div>
        </div>
    )
}