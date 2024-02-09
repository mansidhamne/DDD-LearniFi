import React from 'react'
import GoogleButton from 'react-google-button'
import { UserAuth } from '../context/Auth'

const Signin = () => {
  const {googleSignIn}=UserAuth();

    const handleGoogleSignIn=async ()=>{
      try{
        await googleSignIn()
      }catch(ex){
        console.log(ex)
      }
    };
  return (
    <div>
      <h1 className='text-center text-3xl font-bold py-8'>Sign-in</h1>
      <div className='max-w-[240px] m-auto py-4'>
        <GoogleButton onClick={handleGoogleSignIn}/>
      </div>
    </div>
  )
}

export default Signin
