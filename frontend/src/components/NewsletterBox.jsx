import React from 'react'

const NewsletterBox=() =>{  
  const onSubmitHandler=(event)=>{
    event.preventDefault();
  }
  return (
    <div className='text-center mt-10'>
      <p className='text-2xl font-medium text-gray-700'>Subscribe Now and Get 20% Off</p>
      <p className='text-gray-500 '>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam sequi a maxime qui mollitia error animi molestias perferendis reprehenderit corporis.</p>
      <form onClick={onSubmitHandler} className='w-2/3 sm:w-1/2 flex items-center gap-auto rounded text-black overflow-hidden outline-none mx-auto my-5  border pl-2 bg-white'>
        <input className='font-bold text-xl  w-full outline-none sm:flex-1 bold' required type="email" placeholder='enter your email.....' />
        <button type='sumbit' className='bg-black text-white text-xl px-5 py-2 font-bold font-xl' >Subcribe</button>
      </form>
      
    </div>
  )
}

export default NewsletterBox;