import React from "react";
import { FaStar } from "react-icons/fa";

const PopularProduct = ({ data }) => {
  return (
    <div className=" my-5 overflow-hidden rounded shadow-lg">
      <div>
        <img
          className="mb-4 w-full  rounded-md bg-slate-200 object-cover"
          src={data.img}
          alt={data.title}
        />
      </div>
      <div className="mt-2 flex flex-wrap justify-center gap-3">
        {data?.images?.map((img, index) => (
          <img
            key={index}
            className="h-24 w-[140px] rounded-md  object-cover"
            src={img}
            alt={`Product Image ${index + 1}`}
          />
        ))}
      </div>
      <div className="px-6 py-4">
        <h1 className="mb-2 text-xl font-bold">{data.title}</h1>
        <p className="text-gray-700">{data.available} Sizes Available</p>
        <p className="mt-2 flex items-center">
          <FaStar color="#fbbf24" className="mr-1" />
          {data.rating} ({data.review} reviews)
          <span className="ml-auto font-semibold">${data.price}.00</span>
        </p>
      </div>
    </div>
  );
};

export default PopularProduct;
