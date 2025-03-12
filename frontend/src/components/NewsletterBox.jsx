import React from 'react'

const NewsletterBox=() =>{  
  const onSubmitHandler=(event)=>{
    event.preventDefault();
  }
  return (
    <div className='text-center'>
      <p className='text-2xl font-medium text-gray-700'>Subscribe Now and Get 20% Off</p>
      <p className='text-gray-700 mt-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam sequi a maxime qui mollitia error animi molestias perferendis reprehenderit corporis.</p>
      <form onClick={onSubmitHandler} className='w-full sm:w-1/2 flex items-center gap-auto rounded overflow-hidden mx-auto my-6 border pl-2 bg-green-300'>
        <input className=' w-full outline-none sm:flex-1' required type="email" placeholder='Enter your Email(abc@gmai.com)' />
        <button type='sumbit' className='bg-white text-green-500 text-xl px-5 py-2' >Subcribe</button>
      </form>
      
    </div>
  )
}

export default NewsletterBox