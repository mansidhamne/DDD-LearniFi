import React from 'react'
import './LoginForm.css'
import GoogleButton from 'react-google-button'
import {auth,provider} from "../config/firebase"
import { signInWithPopup } from '@firebase/auth'
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
   
    const navigate=useNavigate();
    const signInWithGoogle=async()=>{
      const result= await signInWithPopup(auth,provider);
      console.log(result);
      navigate("/dashboard");
    }

    return (
        <div className = 'wrapper'>
            
            <div className="form">
            <form action="">
                <h1>Login</h1>
                <div className = "input-box">
                    <input type="text" placeholder='Username' required/>
                    
                </div>

                <div className = "input-box">
                    <input type="password" placeholder='Password' required/>
                    
                </div>

                <button type='submit' style={{padding:"10px"}}>Login</button>
                <p>OR</p>

                <div className='register-link' style={{paddingLeft:"90px", paddingBottom:"10px"}}>
                <GoogleButton className='hey' style={{borderRadius:"10%"}} onClick={signInWithGoogle}/>
                </div>
            </form>
            </div>
        </div>
    )
}

export default LoginForm;