import React, { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { assets } from '../assets/assets'
import { useState } from 'react'
import { ShopContext } from '../context/ShopContext';
import { IoSearchSharp } from "react-icons/io5";

function Navbar() {
  const [visible,setVisible]=useState(false);
  const {setShowSearch,getCartCount,navigate,token,setToken,setCartItems}=useContext(ShopContext);
  
  const logout=()=>{
    navigate('/login')
    localStorage.removeItem('token')
    setToken('')
    setCartItems({})
    
  }
  return (
    <div className='z-100 bg-white shadow-lg backdrop-blur-sm flex items-center justify-between py-1 px-5 text-[#2b2b2b]  w-[95%]  mx-auto  font-medium sticky top-0  rounded-sm transition-all duration-300'>
    <Link to="/" ><img className='w-13 cursor-pointer py-2 px-2 rounded' src={assets.logo} alt=""  /> </Link>
    <ul className=' sm:flex hidden rounded items-center gap-5 '>
      <NavLink className='hover:text-green-500  px-2 py-1 rounded items-center gap-1 flex flex-col' to='/'><p>HOME</p><hr className='hidden w-2/4 border-none h-[1.5px] bg-white' /></NavLink>
      <NavLink className='hover:text-green-500 hover:bg-white  px-2 py-1 rounded items-center gap-1 flex flex-col' to='/collection'><p>COLLECTION</p><hr className='hidden w-2/4 border-none h-[1.5px] bg-white' /></NavLink>
      <NavLink className='hover:text-green-500 hover:bg-white px-2 py-1 rounded items-center gap-1 flex flex-col' to='/about'><p>ABOUT</p><hr className='hidden w-2/4 border-none h-[1.5px] bg-white' /></NavLink>
      <NavLink className='hover:text-green-500 hover:bg-white px-2 py-1 rounded items-center gap-1 flex flex-col' to='/contact'><p>CONTACT</p><hr className='w-2/4 border-none h-[1.5px] hidden bg-white' /></NavLink>
    </ul>
    <div className='flex items-center gap-6'>
    <img values='search' onClick={()=>setShowSearch(true)} className='w-5 min-w-5 cursor-pointer'  src={assets.search_icon} alt="" />
        <div className='group relative'>
      
        <img onClick={()=>token?null:navigate('/login')} className='w-5 rounded-full cursor-pointer min-w-5' src={assets.profile_icon} alt="" />
        {/*Dropdown menu */}
        {
          token&&<div className='group-hover:block hidden absolute dropdown-menu bg-green-500 text-white right-0 pt-4'>
          <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-200 text-black'>
            <p className='cursor-pointer hover-text-green'>My Profile</p>
            <p onClick={()=>navigate('/orders')} className='cursor-pointer hover-text-green'>Order</p>
            <p onClick={logout} className='cursor-pointer hover-text-green'>Logout</p>
          </div>
        </div>
        }
      </div>
      <Link to='/cart' className='relative'>
      <img className='w-5 min-w-5 cursor-pointer' src={assets.cart_icon} alt="" />
      <p className='absolute  bg-green-500 right-[-5px] bottom-[-5px] w-4 text-center rounded-full leading-4 text-[8px] text-white'>{getCartCount()}</p>
      </Link>
      <img onClick={()=>setVisible(true)} src={assets.menu_icon} className='w-5 sm:hidden cursor-pointer' alt="" />
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