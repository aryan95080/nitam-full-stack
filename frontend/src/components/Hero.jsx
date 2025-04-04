import React from 'react'
import { assets } from '../assets/assets'

function Hero() {
  return (
    <div className='flex flex-col sm:flex-row rounded w-[95%] drop-shadow-lg m-auto mt-5'>
      {/* Hero left side */}
      <div className='w-full rounded-l-md sm:w-1/2 flex items-center justify-center bg-green-400 text-white center py-10 sm:py-0'>
      <div className=' rounded'>
        <div className='flex items-center justify-center gap-2'>
          <p className='w-8 md:w-11 h-[2px] bg-[#414141]'></p>
          <p className='font-medium text-sm md:text-base'>OUR BESTSELLERS</p>
        </div>
        <h1 className='prata-regular text-3xl sm:py-3 lg:text-5xl'>Discover our bestsellers</h1>
        <div className='flex items-center justify-center gap-2'>
          <p className='font-semibold text-sm md:text-base'>SHOP NOW</p>
          <p className='w-8 md:w-11 h-[2px] bg-[#414141]'></p>
        </div>
      </div>
      </div>
      {/* Hero right side */}
      <img className='w-full rounded-r-md h-80 object-cover sm:w-1/2' src={assets.hero_img} alt="" />
    </div>
    

  )
}

export default Hero