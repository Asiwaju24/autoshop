import { Link } from "react-router-dom";
import {products} from "../assets/constants/index";
import React from "react";

const ProductCard = () => {
  return (
        <div className="flex flex-wrap mx-16 justify-center my-24 gap-16">
        {products.map((option, index) => (
        <div key={index}>
            <img src={option.image} alt={option.name} />
            <div className="bg-gray-10 p-4 mx-15">
                <h2 className="text-lg font-semibold">{option.name}</h2>
                <p className="text-sm text-zinc-500 my-4 pb-2">
                    {option.details.substring(0, 20) + "..."}
                </p>
            <div className="flex justify-between mt-5 items-center">
                <p className="text-xl font-semibold">₦{option.price}</p>
                <p className="text-sm font-semibold text-zinc-400">View Details</p>
            </div>
                </div>
        </div>
        ))}
        </div>
    );
};

export default ProductCard;
