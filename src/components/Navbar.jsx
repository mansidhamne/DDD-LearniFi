import { Link } from "react-router-dom";

import  "./navbar.scss";

export const Navbar=()=>{
    return(
        <div className="navbar">
             
            <div className="a">
                <a href="" className="active">Home</a>
                <a href="">Learn</a>
                <h1 className="logo">Learnyy</h1>
                <a href="">Courses</a>
                <a href="">Login</a>
            </div>
                
        </div>
    )
}

