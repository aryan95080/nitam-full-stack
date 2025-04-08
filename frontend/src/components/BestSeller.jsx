import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';
import ProductItem from './ProductItem';

const BestSeller=()=>{
  const {products}=useContext(ShopContext);
  const [bestSeller,setBestSeller] = useState([]);
  useEffect(()=>{
    const bestProduct=products.filter((item)=>(item.bestseller));
    setBestSeller(bestProduct.slice(0,8))
  },[products])
  return (
    <div className='my-10'>
      <div className='text-center text-3xl py-8'> 
        <Title text1={'BEST '} text2={' SELLERS'}/>
        <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
        Step into the world of our Best-Sellers at Nitamitra Shopping, where our most popular and highly-rated products await you! These handpicked favorites have captured the hearts of our customers, offering a perfect blend of style, quality, and versatility. From wardrobe essentials to exclusive accessories, our best-sellers are designed to make a statement and stand the test of time.
        </p> 
      </div>
      <div className='w-[95%] mx-auto bg-gray-100 shadow-lg shadow-gray-400 backdrop-blur-3xl p-3 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4  lg:grid-col-4 gap-y-3 gap-x-1 rounded-md'>
        {
          bestSeller.map((item,index)=>(
            <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price}/>
          ))
        }

      </div>
      
    </div>
  )
}

export default BestSeller;