import { Link } from "react-router-dom";
import './Home.scss';
import InstructionImage from "../assets/instr.png"
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

export const Instructors = () => {
    return (
        <div className="instructors-container">
            <div className="instr-text-section">
                    <h1 className="instr-heading">
                    Unlock Your Potential with AI as Your Guide
                    </h1>
                    <p className="instr-text">
                    Ever dreamt of a personal mentor who knows you 
                    better than yourself, a tireless guide who tailors
                    every step to your unique potential? Open a portal to 
                    a limitless learning landscape where artificial 
                    intelligence ignites your inner genius.
                    </p>
                    <button className="secondary-button">
                        Enroll Now <ChevronRightIcon/>{" "}
                    </button>
                </div>
                <div className="instr-image-section">
                    <img src={InstructionImage} alt="" />
                </div>
        </div>
    )
}