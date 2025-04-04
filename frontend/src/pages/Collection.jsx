import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { RiArrowDropDownLine } from "react-icons/ri";
import Title from '../components/Title';
import ProductItem from '../components/ProductItem';
import { assets } from '../assets/assets';


const Collection=()=> {
  const {products,search,showSearch}=useContext(ShopContext);
  const [showFilter,setShowFilter] = useState(false);
  const [filterProducts,setFilterProducts] = useState([]);
  const [category,setCategory] = useState([]);
  const [subCategory,setSubCategory] = useState([]);
  const [sortType,setSortType]=useState('relavent');

  const toggleCategory =(e)=>{
    if(category.includes(e.target.value)){
      setCategory(prev=>prev.filter(item=>item!=e.target.value))
    }
    else{
      setCategory(prev=>[...prev,e.target.value])
    }
  }

  const toggleSubCategory =(e)=>{
    if(subCategory.includes(e.target.value)){
      setSubCategory(prev=>prev.filter(item=>item!=e.target.value))
    }
    else{
      setSubCategory(prev=>[...prev,e.target.value])
    }
  }

  const applyFilter=()=>{
    let productsCopy=products.slice();

    if(showSearch&&search){
      productsCopy=productsCopy.filter(item=>item.name.toLowerCase().includes(search.toLowerCase()))
    }
    if(category.length>0){
      productsCopy=productsCopy.filter(item=>category.includes(item.category));
    }
    if(subCategory.length>0){
      productsCopy=productsCopy.filter(item=>subCategory.includes(item.subCategory))
    }
    setFilterProducts(productsCopy);
  }

  const sortProduct=()=>{
    let fpCopy=filterProducts.slice();
    switch(sortType){
      case 'low-high':
        setFilterProducts(fpCopy.sort((a,b)=>(a.price-b.price)));
        break;
      case 'high-low':
        setFilterProducts(fpCopy.sort((a,b)=>(b.price-a.price)));
        break;
      default:
        applyFilter();
        break;
    }
  }

  {/*
    useEffect(()=>{
    setFilterProducts(products)
  },[])
   */}

  useEffect(()=>{
    applyFilter();
  },[category,subCategory,search,showSearch,products])

  useEffect(()=>{
    sortProduct();
  },[sortType])

  {/*useEffect(()=>{
    console.log(category);
  },[category])
  
  useEffect(()=>{
    console.log(subCategory);
  },[subCategory]) */}

  return (
    <div className='w-[95%] mx-auto flex flex-col sm:flex-row gap-1  sm:gap-10 pt-10 border-t-4'>
     
      {/*Filter Option  */}
      <div className='min-w-60 bg-gray-300 p-2 rounded-2xl  relative'>
        <p onClick={()=>setShowFilter(!showFilter)} className='m-3 text-xl flex items-center cursor-pointer gap-2'>Filters 
          <img src={assets.dropdown_icon}   className={`text-blue-500 text-[50px] absolute right-[10px] transform transition-transform duration-300 ${showFilter ? 'rotate-0' : 'rotate-[90deg]'}`}
 alt="" />
        </p>

        {/*Category filter  */}
        <div className={`rounded bg-green-400 border border-gray-600 pl-5 py- mt-6 ${showFilter?'':'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-800'>
          <p className='flex gap-2'>
              <input type="checkbox" className='w-3'  value={'Men'} onChange={toggleCategory}/>Men
            </p>
            <p className='flex gap-2'>
              <input type="checkbox" className='w-3' value={'Women'} onChange={toggleCategory}/>Women
            </p>
            <p className='flex gap-2'>
              <input type="checkbox" className='w-3' value={'Kids'} onChange={toggleCategory}/>Kids
            </p>
          </div>
          
        </div>

        {/*Sub-filter */}
        <div className={`rounded bg-green-400 border border-gray-600 pl-5 py- mt-6 ${showFilter?'':'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>Types</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-800'>
            <p className='flex gap-2'>
              <input type="checkbox" className='w-3' value={'Topwear'} onChange={toggleSubCategory}/>Topwear
            </p>
            <p className='flex gap-2'>
              <input type="checkbox" className='w-3'value={'Winterwear'} onChange={toggleSubCategory} />Winterwear
            </p>
            <p className='flex gap-2'>
              <input type="checkbox" className='w-3' value={'Bottomwear'} onChange={toggleSubCategory} />Bottomwear
            </p>
          </div>
        </div>
        
      </div>

      {/* Side Bar*/}

      <div className='flex-1'>

      <div className='flex justify-between text-base sm:text-2xl'>
        <Title text1={'ALL'} text2={' COLLECTIONS'}/>
        {/*Product Sort */}
        <select onChange={(e)=>setSortType(e.target.value)} className='border-2 bg-green-300 text-black font-bold border-black rounded-2xl outline-none text-sm px-2'> 
          <option value="relavent">Sort by:Relavent</option>
          <option value="low-high">Sort by:Low to High</option>
          <option value="high-low">Sort by:High to Low</option>
        </select>
      </div>

       {/*Map products */}

      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-6'>
        {
          filterProducts.map((item,indext)=>(
            <ProductItem key={indext} name={item.name} id={item._id} price={item.price} image={item.image}/>
          ))
        }
 
      </div>

      </div>
    </div>
  )
}

export default Collection