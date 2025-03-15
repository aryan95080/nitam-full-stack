import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';
import { IoStar } from "react-icons/io5";
import { FaRupeeSign } from "react-icons/fa";
import RelatedProducts from '../components/RelatedProducts';



const Product=()=> {
const {productId}=useParams();
const {products}=useContext(ShopContext);
const [productData,setProductData]=useState(false);
const [image,setImage]=useState('');
// console.log(productId);
const [size,setSize]=useState('');

const fetchProductData=async()=>{
  products.map((item)=>{
    if(item._id==productId){
      setProductData(item); 
      // console.log(item);
      setImage(item.image[0]);
      console.log(item);
      return null;
    }
  })
}
useEffect(()=>{
  fetchProductData();
},[productId])

  return productData?(
    <div className='border-t-2 pt-10 transition-opacity easy-in duaration-500 opacity-100 w-[95%] mx-auto' >
      {/* ---------------product data  ---------------*/}
      <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>
        {/*---------------product image--------------- */}
        <div className=' flex-1 flex flex-col-reverse gap-3 sm:flex-row '>

          <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full'>
            {
              productData.image.map((item,index)=>(
                <img onClick={()=>setImage(item)} src={item} key={index} className=' w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer ' />
              ))
            }

          </div>
          <div>
            <img src={image} className='w-full h-auto ' alt="" />
          </div>
        
        </div>
        {/*---------------product details--------------- */}
        <div className='flex-1'>
          <h1 className='font-medium text-2xl mt-2 '>{productData.name}</h1>
          <div className='flex items-center gap-1 mt-2'>
          <IoStar style={{color:'orange',stroke: 'black', strokeWidth: '20px'}} />
          <IoStar style={{color:'orange',stroke: 'black', strokeWidth: '20px'}} />
          <IoStar style={{color:'orange',stroke: 'black', strokeWidth: '20px'}} />
          <IoStar style={{color:'orange',stroke: 'black', strokeWidth: '20px'}} />
          <IoStar style={{color:'white',stroke: 'black', strokeWidth: '20px'}} />
          <p className='pl-2'>(200)</p>     
          </div>
          <p className='mt-5 text-3xl font-medium'><FaRupeeSign style={{display:'inline', fontSize:'25px'}}/>
          {productData.price}</p>
          <p className='mt-5 text-gray-500 md:w-4/5'>{productData.description}</p>
          <div className='flex flex-col gap-8 my-8'>
            <p>Select Size</p>
            <div className='flex gap-2'>
              {
                productData.sizes.map((item,index)=>(
                  <button onClick={()=>setSize(item)} className={`bg-amber-400 rounded  px-3 py-2 text-center ${item===size?'border-orange-500':''}`} key={index}>{item}</button>
                ))
              }
            </div>
          </div>
          <button className='bg-green-400 text-white rounded px-8 py-3 text-sm  active:bg-black'>Add Cart</button>
          <hr className='mt-8 sm:w-4/5' />
          <div className='text-sm text-gray-400 mt-5 flex flex-col gap-1'>
            <p>100% Original products.</p>
            <p>Cash on delivery available on this product </p>
            <p> Easy return and exchange policy whithin 7 days.</p>
          </div>
        </div>
      </div>
      {/* -------------Description & Review Section-------------*/}
      <div className='mt-20'>
        <div className='flex'>
          <b className='border px-5 py-3 text-sm'>Description</b>
          <p className='border px-5 py-3 text-sm'>Review (575)</p>
        </div>
        <div className='flex flex-col gap-4 border p-6 text-sm text-gray-400'>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi magni adipisci repudiandae vel! Cum, a molestias. Perspiciatis molestiae tenetur, magni, distinctio quia laudantium qui facere cum minima sapiente doloribus suscipit debitis sed aspernatur nulla hic. Esse vel dolorum aperiam nam facilis iste, assumenda repellat sapiente rerum facere eligendi hic omnis?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque inventore culpa ab iste beatae officiis assumenda, officia vero fugit nemo!</p>

        </div>
      </div>
      {/* -------------Related Products Section-------------*/}
      <RelatedProducts category={productData.category} subCategory={productData.subCategory}/>


    </div>

  ):<div> </div>
}

export default Product