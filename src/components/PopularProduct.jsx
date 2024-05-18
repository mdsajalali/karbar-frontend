import React from "react";
import { FaStar } from "react-icons/fa";

const PopularProduct = ({ data }) => {
  return (
    <div className=" my-5 rounded overflow-hidden shadow-lg">
      <div>
        <img
          className="w-full bg-slate-200  object-cover mb-4 rounded-md"
          src={data.img}
          alt={data.title}
        />
      </div>
      <div className="flex flex-wrap gap-3 justify-center mt-2">
        {data?.images?.map((img, index) => (
          <img
            key={index}
            className="w-[140px] h-24 object-cover  rounded-md"
            src={img}
            alt={`Product Image ${index + 1}`}
          />
        ))}
      </div>
      <div className="px-6 py-4">
        <h1 className="text-xl font-bold mb-2">{data.title}</h1>
        <p className="text-gray-700">{data.available} Sizes Available</p>
        <p className="flex items-center mt-2">
          <FaStar color="#fbbf24" className="mr-1" />
          {data.rating} ({data.review} reviews)
          <span className="ml-auto font-semibold">${data.price}.00</span>
        </p>
      </div>
    </div>
  );
};

export default PopularProduct;
