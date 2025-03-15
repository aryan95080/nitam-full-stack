import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';
import ProductItem from './ProductItem';

const RelatedProducts=({category,subCategory})=> {
  const {products}=useContext(ShopContext);
  const [related,SetRelated]=useState([]);

  useEffect(()=>{
    if(products.length>0){
      let prodcutsCopy=products.slice();
      prodcutsCopy=prodcutsCopy.filter((item)=>category===item.category);
      prodcutsCopy=prodcutsCopy.filter((item)=>subCategory===item.subCategory);
      //console.log(prodcutsCopy.slice(0,5));
      SetRelated(prodcutsCopy.slice(0,20));
    }
  },[products])
  return (
    <div className='my-24'>
      <div className='text-center text-3xl py-2'>
        <Title text1={'RELATED'} text2={'PRODUCTS'}/>
      </div>
      <div className='grid grid-cols-2 sm:grid-cols-3  md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
        {
          related.map((item,index)=>(
            <ProductItem key={index} id={item.id} name={item.name} image={item.image} price={item.price}/>
          ))
        }

      </div>

    </div>
  )
}

export default RelatedProducts