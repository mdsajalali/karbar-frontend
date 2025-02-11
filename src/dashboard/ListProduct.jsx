import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import cross_icon from "../images/cross_icon.png";
import axiosInstance from "../utils/axiosInstance";

const ListProduct = () => {
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const response = await axiosInstance.get("/getProduct");
        setProductData(response.data);
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    };

    fetchProductData();
  }, []);

  const productDelete = async (productId) => {
    try {
      await axiosInstance.delete(`/deleteProduct/${productId}`);

      setProductData(
        productData.filter((product) => product._id !== productId),
      );
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  return (
    <div className="mx-auto mt-4 w-full overflow-x-auto rounded-lg bg-white p-4 shadow-md lg:p-8">
      <h1 className="mb-4 text-2xl font-bold">All Product List</h1>
      <table className="w-full">
        <thead>
          <tr className="font-semibold">
            <th className="text-center">Id</th>
            <th className="text-center">Image</th>
            <th className="text-center">Name</th>
            <th className=" text-center">Title</th>
            <th className="text-center">Price</th>
            <th className="text-center">Rating/Reviews</th>
            <th className="text-center">Category</th>
            <th className="text-center">Action</th>
          </tr>
        </thead>
        <tbody>
          {productData?.map((data, idx) => (
            <tr key={idx} className="border border-gray-300">
              <td className="  p-4 text-center">{idx + 1}</td>
              <td className="p-4 text-center">
                <img
                  className="h-20 w-20 object-cover"
                  src={data.image}
                  alt=""
                />
              </td>
              <td className="p-4 text-center">{data.name}</td>
              <td className=" p-4 text-center">{data.title}</td>
              <td className="p-4 text-center">${data.price}.00</td>
              <td className="p-4  text-center">
                <FaStar color="fbbf24" /> {data.rating} ({data.reviews} reviews)
              </td>
              <td className="p-4 text-center">{data.category}</td>
              <td className="p-4 text-center">
                <img
                  className="cursor-pointer"
                  onClick={() => productDelete(data._id)}
                  src={cross_icon}
                  alt=""
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListProduct;
