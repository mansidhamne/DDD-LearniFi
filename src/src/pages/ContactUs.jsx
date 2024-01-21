import { Link } from "react-router-dom";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import './Home.scss';

export const ContactUs = () => {
    return (
        <div className="contact-container">
            <div className="inner-container">
                <h1 className="question-heading">Have Any Questions In Mind?</h1>
                <h2 className="comment-heading">Let Us Help You!</h2>
                <div className="contact-form">
                    <input type="email" placeholder="yourmail@gmail.com" />
                    <button type="submit">Submit <NavigateNextIcon/></button>
                </div>
            </div> 
        </div>
    )
}