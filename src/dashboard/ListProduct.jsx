import { FaStar } from "react-icons/fa";
import productData from "./../data/ProductsData";

const ListProduct = () => {
  return (
    <div className="list-product p-4 lg:p-8 w-full mx-auto mt-4 bg-white rounded-lg shadow-md overflow-x-auto">
      <h1 className="text-2xl font-bold mb-4">All Product List</h1>
      <table className="w-full">
        <thead>
          <tr className="font-semibold  ">
            <th className="text-center">Id</th>
            <th className="text-center">Image</th>
            <th className="text-center">Name</th>
            <th className=" text-center">Title</th>
            <th className="text-center">Price</th>
            <th className="text-center">Rating/Reviews</th>
            <th className="text-center">Category</th>
          </tr>
        </thead>
        <tbody>
          {productData.map((data, idx) => (
            <tr key={idx} className="border border-gray-300">
              <td className="  p-4 text-center">{idx + 1}</td>
              <img className="w-20 h-20" src={data.img} alt="" />
              <td className="p-4 text-center">{data.name}</td>
              <td className=" p-4 text-center">{data.title}</td>
              <td className="p-4 text-center">${data.price}.00</td>
              <td className="p-4 flex items-center gap-1 justify-center text-center">
                <FaStar color="fbbf24" /> {data.rating} ({data.reviews} reviews)
              </td>
              <td className="p-4 text-center">
                {data.category}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListProduct;
