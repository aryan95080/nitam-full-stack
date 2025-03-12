import React, { useContext, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { RiArrowDropDownLine } from "react-icons/ri";


const Collection=()=> {
  const {products}=useContext(ShopContext);
  const [showFilter,setShowFilter] = useState(false);
  return (
    <div className='flex flex-col sm:flex-row gap-1 ml-2 sm:gap-10 pt-10 border-t-4'>
      {/*Filter Option  */}
      <div className='min-w-60 bg-amber-400  relative'>
        <p onClick={()=>setShowFilter(!showFilter)} className='m-3 text-xl flex items-center cursor-pointer gap-2'>Filters <RiArrowDropDownLine style={{color: 'blue', fontSize: '50px',position:'absolute', right:'10px',transform:showFilter?'rotate(0deg)':'rotate(-90deg)'}} />
        </p>
        {/*Category filter  */}
        <div className={`rounded bg-green-400 border border-gray-600 pl-5 py- mt-6 ${showFilter?'':'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-800'>
          <p className='flex gap-2'>
              <input type="checkbox" className='w-3' />Men
            </p>
            <p className='flex gap-2'>
              <input type="checkbox" className='w-3' />Women
            </p>
            <p className='flex gap-2'>
              <input type="checkbox" className='w-3' />Children
            </p>
          </div>
          
        </div>
        {/*Sub-filter */}
        <div className={`rounded bg-green-400 border border-gray-600 pl-5 py- mt-6 ${showFilter?'':'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>Types</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-800'>
            <p className='flex gap-2'>
              <input type="checkbox" className='w-3' value={'Topwear'} />Topwear
            </p>
            <p className='flex gap-2'>
              <input type="checkbox" className='w-3'value={'Winterwear'} />Winterwear
            </p>
            <p className='flex gap-2'>
              <input type="checkbox" className='w-3' value={'Bottomwear'} />Bottomwear
            </p>
          </div>
        </div>
      </div>
      {/* */}
    </div>
  )
}

export default Collection