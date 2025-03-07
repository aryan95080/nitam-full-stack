import React from 'react'
import { NavLink } from 'react-router-dom'
import { assets } from '../assets/assets'
function Navbar() {
  return (
    <>
    
    <ul className='w-[95%] sticky  mx-auto my-2 px-4 rounded py-2 flex bg-gray-300 justify-between'>
      <img className='w-25 rounded-full p-1 cursor-pointer h-10 bg-pink-600' src={assets.logo} alt="" />
      <NavLink  exact to="/" activeClassName="active"><p>HOME</p><hr className='hidden' /></NavLink>
      <NavLink to="/collection" activeClassName="active"><p>COLLECTION</p><hr className='hidden' /></NavLink>
      <NavLink to="/about" activeClassName="active"><p>ABOUT</p><hr className='hidden' /></NavLink>
      <NavLink to="/contact" activeClassName="active"><p>CONTACT</p><hr className='hidden' /></NavLink>
    </ul>
    </>
  )
}

export default Navbar