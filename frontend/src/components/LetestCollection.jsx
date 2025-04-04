import React, { useContext,useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext';
import Title from './Title';
import ProductItem from './ProductItem';
const LetestCollection=()=>{
  const {products}=useContext(ShopContext);
  const [latestProduct,setLatestProduct]=useState([]);
  useEffect(()=>{
    setLatestProduct(products.slice(0,12));
  },[products]);
  return (
    <div className='my-10'>
      <div className='text-center py-8 text-3xl m-5'>
        <Title text1={'LATEST '} text2={' COLLECTIONS'}/>
        <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti sed id corporis voluptatum quasi dolor doloribus blanditiis, odio porro laboriosam.</p>
      </div>
      {/*Rendering products */}
      <div className='w-[95%] mx-auto bg-transparent shadow-lg shadow-gray-400 backdrop-blur-3xl p-3 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4  lg:grid-col-4 gap-y-3 gap-x-1 rounded-md'>
        {
          latestProduct.map((item,index)=>(
            <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price}/>
          ))
        }
      </div>
    </div>
  )
}

export default LetestCollection;