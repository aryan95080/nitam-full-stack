import React from 'react'
import { assets } from '../assets/assets'

function Hero() {
  return (
    <div className='flex flex-col sm:flex-row border-gray-400 w-[95%] m-auto mt-5 bg-blue-400'>
      {/* Hero left side */}
      <div className='w-full sm:w-1/2 flex items-center justify-center bg-gray-100 center py-10 sm:py-0'>
      <div className='text-[#414141]'>
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
      <img className='w-full h-100 object-cover sm:w-1/2' src={assets.hero3} alt="" />

    </div>

  )
}

export default Hero