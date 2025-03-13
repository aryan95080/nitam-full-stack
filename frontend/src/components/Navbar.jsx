import React, { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { assets } from '../assets/assets'
import { useState } from 'react'
import { ShopContext } from '../context/ShopContext';
import { IoSearchSharp } from "react-icons/io5";

function Navbar() {
  const [visible,setVisible]=useState(false);
  const {setShowSearch}=useContext(ShopContext);
  return (
    <div className='z-10 flex items-center justify-between py-1 px-5 text-black rounded w-[95%]  mx-auto hover:bg-green-400 bg-green-300  font-medium sticky top-0'>
    <Link to="/"><img className='w-10 cursor-pointer' src={assets.logo} alt="" /> </Link>
    <ul className=' sm:flex hidden rounded items-center gap-5 '>
      <NavLink className='hover:text-green-500 hover:bg-white hover:border px-2 py-1 rounded items-center gap-1 flex flex-col' to='/'><p>HOME</p><hr className='hidden w-2/4 border-none h-[1.5px] bg-white' /></NavLink>
      <NavLink className='hover:text-green-500 hover:bg-white hover:border px-2 py-1 rounded items-center gap-1 flex flex-col' to='/collection'><p>COLLECTION</p><hr className='hidden w-2/4 border-none h-[1.5px] bg-white' /></NavLink>
      <NavLink className='hover:text-green-500 hover:bg-white hover:border px-2 py-1 rounded items-center gap-1 flex flex-col' to='/about'><p>ABOUT</p><hr className='hidden w-2/4 border-none h-[1.5px] bg-white' /></NavLink>
      <NavLink className='hover:text-green-500 hover:bg-white hover:border px-2 py-1 rounded items-center gap-1 flex flex-col' to='/contact'><p>CONTACT</p><hr className='w-2/4 border-none h-[1.5px] hidden bg-white' /></NavLink>
      
    </ul>
    <div className='flex items-center gap-6'>
      <IoSearchSharp values='search' onClick={()=>setShowSearch(true)} />
        <div className='group relative'>
        <img className=' hover:text-green-500 hover:bg-white hover:border w-5 rounded-full cursor-pointer min-w-5' src={assets.profile} alt="" />
        <div className='group-hover:block hidden absolute  bg-green-500 text-white r-0 p-2 mr-5 mt-4 rounded'>
          <div>
            <p className='cursor-pointer hover-text-green'>My Profile</p>
            <p className='cursor-pointer hover-text-green'>Order</p>
            <p className='cursor-pointer hover-text-green'>Logout</p>
          </div>
        </div>
      </div>
      <Link to='/cart' className='relative'>
      <img className='w-5 min-w-5 cursor-pointer' src={assets.cart} alt="" />
      <p className='absolute  bg-red-400 right-[-5px] bottom-[-5px] w-4 text-center rounded-full leading-4 text-[8px] '>18</p>
      </Link>
      <img onClick={()=>setVisible(true)} src={assets.menu} className='w-5 sm:hidden cursor-pointer' alt="" />
    </div>

    {/*Sidebar menu for small screen */}
    
    <div className={`absolute top-0 right-0  bg-green-500 overflow-hidden transition-all ${visible?'w-full':'w-0'}`}>
      <div className='flex flex-col   bg-green-300 w-full ' >
        <div onClick={()=>setVisible(false)} className='flex items-center  bg-white text-green-400  gap-4 p-3 cursor-pointer'>
          <img  className='h-4 ' src={assets.back} alt="" />
          <p>Back</p>
        </div>
        <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border hover:bg-green-400' to='/'>HOME</NavLink>
        <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border hover:bg-green-400' to='/collection'>COLLECTION</NavLink>
        <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border hover:bg-green-400' to='/about'>ABOUT</NavLink>
        <NavLink onClick={()=>setVisible(false)}  className='py-2 pl-6 border hover:bg-green-400' to='/contact'>CONTACT</NavLink>

      </div>

    </div>
    
    </div>
  )
}

export default Navbar