import React, { useContext, useState } from 'react'
import Title from '../components/Title'
import CartTotal from '../components/CartTotal'
import { FaStripe } from "react-icons/fa";
import { assets } from '../assets/assets';
import { ShopContext } from '../context/ShopContext';
import axios from 'axios';


const PlaceOrder=()=>{
  const [method,setMethod]=useState('cod');
  const {navigate,backendUrl,token,cartItems,setCartItems,getCartAmount,delivery_fee,products}=useContext(ShopContext);
  const [formData,setFormData]=useState({
    firstName:'',
    lastName:'',
    email:'',
    street:'',
    city:'',
    state:'',
    zipcode:'',
    country:'',
    phone:''
  })

  const onChangeHandler=(event)=>{
    const name=event.target.name
    const value=event.target.value
    setFormData(data=>({...data,[name]:value}))
  }

  const onSubmitHandler= async (event)=>{
    event.preventDefault()
    try {
      let orderItems=[]
      for(const items in cartItems){
        for(const item in cartItems[items]){
          if(cartItems[items][item]>0){
            const itemInfo=structuredClone(products.find(product=>product._id===items))
            if(itemInfo){
              itemInfo.size=item
              itemInfo.quntity=cartItems[items][item]
              orderItems.push(itemInfo)
            }
          }
        }
      }
      // console.log(orderItems);
    let orderData={
      address:formData,
      items:orderItems,
      amount:getCartAmount()+delivery_fee
    };
    // console.log(orderData)
    switch(method){
      //api calls for cod
      case 'cod':
        const response=await axios.post(backendUrl+'/api/order/place',orderData,{headers:{token}})
        // console.log(response.data.success)
        if(response.data.success){
          setCartItems({})
          navigate('/orders')
        }
        else{
          toast.error(response.data.message)
        }
        break;
      default:
        break;
    }
      
    } catch (error) {
      
    }

  }

  return (
    <form onSubmit={onSubmitHandler} className='flex flex-col sm:flex-row w-[95%] mx-auto justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t'>
      {/*---------------------left side -------------------- */}
      <div className='flex flex-col gap-4 w-full sm:w-[480px]'>
        <div className='text-xl sm:text-2xl my-3'>
          <Title text1={'DELIVERY '} text2={' INFORMATION'}/>
        </div>
        <div className='flex gap-3'>
          <input required onChange={onChangeHandler} name='firstName' value={formData.firstName} className='border border-gray-400 rounded py-1.5 px-3.5 w-full' type="text" placeholder='First name' />
          <input required onChange={onChangeHandler} name='lastName' value={formData.lastName} className='border border-gray-400 rounded py-1.5 px-3.5 w-full' type="text" placeholder='Last name' />
        </div>
        <input required onChange={onChangeHandler} name='email' value={formData.email} className='border border-gray-400 rounded py-1.5 px-3.5 w-full' type="email" placeholder='email@Example.com' />
        <input required onChange={onChangeHandler} name='street' value={formData.street} className='border border-gray-400 rounded py-1.5 px-3.5 w-full' type="text" placeholder='Street' />
        <div className='flex gap-3'>
          <input required onChange={onChangeHandler} name='city' value={formData.city} className='border border-gray-400 rounded py-1.5 px-3.5 w-full' type="text" placeholder='City' />
          <input required onChange={onChangeHandler} name='state' value={formData.state} className='border border-gray-400 rounded py-1.5 px-3.5 w-full' type="text" placeholder='State' />
        </div>
        <div className='flex gap-3'>
          <input required onChange={onChangeHandler} name='zipcode' value={formData.zipcode} className='border border-gray-400 rounded py-1.5 px-3.5 w-full' type="number" placeholder='Zipcode' />
          <input required onChange={onChangeHandler} name='country' value={formData.country} className='border border-gray-400 rounded py-1.5 px-3.5 w-full' type="text" placeholder='Country' />
        </div>
        <input required onChange={onChangeHandler} name='phone' value={formData.phone} className='border border-gray-400 rounded py-1.5 px-3.5 w-full' type="number" placeholder='Phone no.' />

      </div>

      {/*---------------------right side -------------------- */}
      <div className='mt-8'>
        <div className='mt-8 min-w-80'>
          <CartTotal/>
        </div>
        <div className='mt-12'>
          <Title text1={'PAYMENT '} text2={' METHOD'}/>
          {/* ---------------Payment method selection ---------------- */}
          <div className='flex gap-3  flex-col lg:flex-row'>
            <div onClick={()=>setMethod('stripe')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
              <p className={`min-w-3.5 h-3.5  rounded-full border ${method==='stripe'?'bg-green-400':''}`}>
              </p>
              <FaStripe style={{fontSize:'30'}} />
            </div>
            <div onClick={()=>setMethod('razorpay')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
              <p className={`min-w-3.5 h-3.5  rounded-full border ${method==='razorpay'?'bg-green-400':''} `}>
              </p>
              <img className='w-20'  src={assets.razorPay} alt="" />
            </div>
            
            <div onClick={()=>setMethod('upi')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
              <p className={`min-w-3.5 h-3.5  rounded-full border ${method==='upi'?'bg-green-400':''}`}>
              </p>
              <img className='w-20' src={assets.upiLogo} alt="" />
            </div>
            <div onClick={()=>setMethod('cod')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
            <p className={`min-w-3.5 h-3.5  rounded-full border ${method==='cod'?'bg-green-400':''}`}>
            </p>
              <p className={` px-3 text-center`}>
                CASH ON DELIVERY
              </p>
            </div>

          </div>
          <div className='w-full text-center mt-8'>
            <button type='submit' className='bg-black text-white py-3 px-3 rounded text-sm'>PLACE ORDER</button>
          </div>

        </div>
      </div>

    </form>
  )
}

export default PlaceOrder