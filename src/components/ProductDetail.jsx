import { useState } from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import QuickViewPopup from "./QuickViewPopup";
import { toast } from "sonner";

const ProductDetail = ({ data }) => {
  const [showPopup, setShowPopup] = useState(false);
  const [isAdding, setIsAdding] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  const handleAddToCart = async (productId) => {
    setIsAdding(true);
    try {
      const userId = "12345";
      const response = await fetch("http://localhost:5000/cart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userId, productId }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log("Cart updated:", data);
        toast.success("Product added to cart!");
      } else {
        console.error(data.error);
        toast.error("Failed to add product to cart.");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("An error occurred while adding product to cart.");
    } finally {
      setIsAdding(false);
    }
  };

  return (
    <div className="mx-auto mt-10 max-w-md rounded-md border border-gray-300 p-6 text-center shadow-md">
      <div className="group relative">
        {data?.tag && (
          <h1 className="absolute left-1 top-1 mb-4 rounded-full bg-white px-5 py-1 text-[15px] font-medium text-gray-500">
            {data?.tag}
          </h1>
        )}
        <Link to="/products">
          <img
            src={data?.image || "default_image_url"} // Fallback for missing image
            alt={data?.name || "Product Image"} // Fallback for missing alt text
            className="mx-auto mb-4 w-full rounded-md bg-slate-200 object-cover transition-all duration-300 group-hover:scale-105"
          />
        </Link>
        <div className="absolute bottom-20 left-0 right-0 flex translate-y-1/2 transform flex-wrap items-center justify-center gap-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100 xl:bottom-5">
          <button
            onClick={() => handleAddToCart(data._id)}
            className="flex items-center gap-2 rounded-full bg-black px-4 py-2 text-white"
            disabled={isAdding}
          >
            Add To Cart
          </button>
          <button
            onClick={togglePopup}
            className="flex items-center gap-2 rounded-full bg-white px-4 py-2"
          >
            Quick View
          </button>
        </div>
      </div>
      <h2 className="mb-2 text-lg font-semibold">{data?.name}</h2>
      <h3 className="text-md mb-2">{data?.title}</h3>
      <div className="mb-4 flex items-center justify-evenly">
        <span className="mr-2 text-lg font-bold">${data?.price}.00</span>
        <span className="flex items-center justify-center gap-1 text-sm text-gray-600">
          <FaStar color="#fbbf24" /> {data?.rating} ({data?.reviews} reviews)
        </span>
      </div>
      {showPopup && <QuickViewPopup data={data} togglePopup={togglePopup} />}
    </div>
  );
};

export default ProductDetail;
