import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { Link } from "react-router-dom";
const ProductItem = ({ id, image, name, price }) => {
  const { currency } = useContext(ShopContext);

  return (
    <Link
      className="bg-transparent shadow-md shadow-gray-400 hover:bg-green-400 backdrop-blur-lg shadow-gray -500 text-black font-bold cursor-pointer rounded overflow-hidden mx-3 my-1 px-0.5 py-0.5 hover:shadow-gray-200 hover:scale-105 transition-transform duration-300 ease-in-out"
      to={`/product/${id}`}
    >
      <div className="overflow-hidden h-45">
        <img
          src={image[0]}
          className="hover:scale-105 rounded transition-transform duration-300 linear"
        />
      </div>
      <p className="pt-3 px-2 text-sm">{name}</p>
      <p className="text-sm px-2 font-medium ">
        {currency} {price}
      </p>
    </Link>
  );
};

export default ProductItem;
