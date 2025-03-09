{/* Create shopContext API */}
import { createContext } from "react";
import {products} from "../assets/assets"
 export const ShopContext = createContext();
 const ShopContextProvider=(props)=>{
  const currency='₹';
  const delivery_fee=10;
  const val={
    products , delivery_fee , currency
  }
  return(
    <ShopContext.Provider value={value}>
      {props.children}
    </ShopContext.Provider>
  )
 }
 export default ShopContextProvider;