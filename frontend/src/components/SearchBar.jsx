import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { useLocation } from 'react-router-dom';
import { assets } from '../assets/assets';



const  SearchBar=()=> {
const {search,setSearch,showSearch,setShowSearch}=useContext(ShopContext);
const location=useLocation();
const [visible,setVisible]=useState(false);

useEffect(()=>{
  // console.log(location.pathname);
  if(location.pathname.includes('collection')){
    setVisible(true);
  }
  else{
    setVisible(false);
  }

},[location])

  return showSearch&&visible?(
    <div className='w-[95%] mx-auto border-t border-b text-center '>
      <div className='inline-flex  items-center justify-center  bg-gray-200 border border-gray-300 px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2'>
        <input value={search} onChange={(e)=>setSearch(e.target.value)} className='flex-1 outline-none text-sm bg-inherit'  type="text" placeholder='Search' />
        <img className='w-5' src={assets.search_icon} alt="" />
      </div>
      <img onClick={()=>setShowSearch(false)} className='w-3 inline' src={assets.cross_icon} alt="" />
    </div>
  ):null
}

export default SearchBar