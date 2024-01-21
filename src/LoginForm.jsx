import React from 'react'
import './LoginForm.css'
import { FaUser, FaLock } from "react-icons/fa"

const LoginForm = () => {
    return (
        <div className = 'wrapper'>
            <div className='login-image'>
                <img src="/Users/ParthChitre07/Desktop/Login Page/Login-Page/src/assets/60.jpg" alt="image" />
            </div>
            <div className="form">
            <form action="">
                <h1>Login</h1>
                <div className = "input-box">
                    <input type="text" placeholder='Username' required/>
                    <FaUser className='icon'/>
                </div>

                <div className = "input-box">
                    <input type="password" placeholder='Password' required/>
                    <FaLock className='icon'/>
                </div>

                <div className="remember-forget">
                    <a href="#">Forgot password</a>
                </div>

                <button type='submit'>Login</button>

                <div className='register-link'>
                    <p>Don't have an account? <a href="#">Register</a></p>
                </div>
            </form>
            </div>
        </div>
    )
}

export default LoginForm;