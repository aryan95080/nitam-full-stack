import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { IoSearchSharp } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { useLocation } from 'react-router-dom';



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
        <IoSearchSharp />
      </div>
      <RxCross2 onClick={()=>setShowSearch(false)} style={{display:'inline'}} />


    </div>
  ):null
}

export default SearchBar