import { useState } from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import QuickViewPopup from "./QuickViewPopup";

const ProductDetail = ({ data }) => {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <div className="max-w-md mx-auto border border-gray-300 rounded-md shadow-md p-6 text-center mt-10">
      <div className="relative group">
        {data.tag ? (
          <h1 className="text-[15px] absolute left-1 font-medium mb-4 top-1 bg-white text-gray-500 px-5 rounded-full py-1">
            {data?.tag}
          </h1>
        ) : (
          ""
        )}
        <Link to="/men">
          <img
            onClick={window.scrollTo(0, 0)}
            src={data.image}
            alt=""
            className="mx-auto mb-4 w-full bg-slate-200  object-cover  rounded-md transition-all duration-300 group-hover:scale-105"
          />
        </Link>
        <div className="flex flex-wrap absolute bottom-20 xl:bottom-5 left-0 right-0 items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-1/2">
          <button className="bg-black flex items-center gap-2 text-white  py-2 px-4 rounded-full  ">
            Add To Cart
          </button>
          <button
            onClick={togglePopup}
            className="bg-white flex items-center gap-2    py-2 px-4 rounded-full  "
          >
            Quick View
          </button>
        </div>
      </div>
      <h2 className="text-lg font-semibold mb-2">{data.name}</h2>
      <h3 className="text-md mb-2">{data.title}</h3>
      <div className="flex items-center justify-evenly mb-4">
        <span className="text-lg font-bold mr-2">${data.price}.00</span>
        <span className="text-sm flex items-center gap-1 justify-center text-gray-600">
          <FaStar color="fbbf24" /> {data.rating} ({data.reviews} reviews)
        </span>
      </div>
      {showPopup && <QuickViewPopup data={data} togglePopup={togglePopup} />}
    </div>
  );
};

export default ProductDetail;
