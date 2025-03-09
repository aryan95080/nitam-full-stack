import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'

const LetestCollection=()=>{
  const {products}=useContext(ShopContext);
  console.log(products);
  return (
    <div>
      LetestCollection
      </div>
  )
}

export default LetestCollection;