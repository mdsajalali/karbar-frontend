import axios from "axios";
import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import cross_icon from "../images/cross_icon.png";

const ListProduct = () => {
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/getproduct");
        setProductData(response.data);
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    };

    fetchProductData();
  }, []);

  const productDelete = async (productId) => {
    try {
      await axios.delete(`http://localhost:5000/deleteproduct/${productId}`);

      setProductData(
        productData.filter((product) => product._id !== productId)
      );
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  return (
    <div className="list-product p-4 lg:p-8 w-full mx-auto mt-4 bg-white rounded-lg shadow-md overflow-x-auto">
      <h1 className="text-2xl font-bold mb-4">All Product List</h1>
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
          {productData.map((data, idx) => (
            <tr key={idx} className="border border-gray-300">
              <td className="  p-4 text-center">{idx + 1}</td>
              <td className="p-4 text-center">
                <img className="w-20 h-20" src={data.image} alt="" />
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
