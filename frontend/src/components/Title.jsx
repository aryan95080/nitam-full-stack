import React from 'react'

function Title({text1, text2}) {
  return (
    <div className='inline-flex gap-2 items-center mb-3'>
      <p className='text-gray-500 '>{text1}<span className='text-green-500 font-medium'>{text2}</span></p>
      <p className='w-8 sm:w-12 h-[1px] sm:h-[2px] bg-green-500'></p>
    </div>
  )
}

export default Title