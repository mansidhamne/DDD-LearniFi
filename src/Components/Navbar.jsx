import React from 'react'
import { Link } from 'react-router-dom'
import { UserAuth } from '../context/Auth'

const Navbar = () => {
  return (
    <div className='flex justify-between bg-gray-200 w-full p-4'>
      <h1 className='text-center text-2xl font-bold'> firebase google auth</h1>
      <Link to={'/signin'}>Signin</Link>
    </div>
  )
}

export default Navbar
