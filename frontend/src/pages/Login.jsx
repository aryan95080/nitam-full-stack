import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext';
import axios from 'axios';
import { toast } from 'react-toastify';

const Login=()=>{
  const [currentState,setCurrentState] = useState('Login');
  const {token,setToken,navigate,backendUrl}=useContext(ShopContext)

  const [name,setName]=useState('')
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')

  const onSubmitHandler=async(even)=>{
    even.preventDefault();
    try {
      if(currentState==='Sign Up'){
        const response=await axios.post(backendUrl+'/api/user/register',{name,email,password})
        // console.log(response.data);
        if(response.data.success){
          setToken(response.data.token)
          localStorage.setItem('token',response.data.token)
        }
        else{
          toast.error(response.data.message)
        }
      }
      else{
        const response=await axios.post(backendUrl+'/api/user/login', {email,password})
        // console.log(response.data)
        if(response.data.success){
          setToken(response.data.token)
          localStorage.setItem('token',response.data.token)
        }
        else{
          toast.error(response.data.message)
        }
        
      }
      
    } catch (error) {
      console.log(error);
      toast.error(error.message)
      
    }
  }
  useEffect(()=>{
    if(token){
      navigate('/')
    }
  },[token])

  return (
    <form onSubmit={onSubmitHandler} action="" className='bg-green-300 p-5   rounded flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800 '>
      <div className='inline-flex items-center gap-2 mb-2 mt-10'>
        <p className='prata-regular text-3xl'>{currentState}</p>
        <hr className='border-none h-[1.5px] w-8 bg-gray-800' />
      </div>
      {currentState==='Login'?'':<input onChange={(e)=>setName(e.target.value)} value={name} type="text" placeholder='Name' className='w-full px-3 py-2 border border-gray-800 ' required/>}
      <input onChange={(e)=>setEmail(e.target.value)} value={email} type="email" placeholder='email@example.com' className='w-full px-3 py-2 border border-gray-800 ' required/>
      <input onChange={(e)=>setPassword(e.target.value)} value={password} type="password" placeholder='password' className='w-full px-3 py-2 border border-gray-800 ' required/>
      <div className='w-full flex justify-between text-sm mt-[-8px]'>
        <p className='cursor-pointer'>Forget your password?</p>
        {
          currentState==='Login'?<p onClick={()=>setCurrentState('Sign Up')} className='cursor-pointer'>Create Account</p>:<p onClick={()=>setCurrentState('Login')} className='cursor-pointer'>Login here</p>
        }
      </div>
      <button className='bg-black text-white text-sm px-5 py-2 rounded-md'>
        {
          currentState==='Login'?'Sign In':'Sign Up'
        }
      </button>
    </form>
  )
}

export default Login;