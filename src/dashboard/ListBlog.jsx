import axios from "axios";
import { useEffect, useState } from "react";
import cross_icon from "../images/cross_icon.png";

const ListBlog = () => {
  const [blogData, setBlogData] = useState([]);

  useEffect(() => {
    const fetchBlogData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/getblog");
        setBlogData(response.data);
      } catch (error) {
        console.error("Error fetching blog data:", error);
      }
    };

    fetchBlogData();
  }, []);

  const blogDelete = async (blogId) => {
    try {
      await axios.delete(`http://localhost:5000/deleteblog/${blogId}`);
      setBlogData(blogData.filter((blog) => blog._id !== blogId));
    } catch (error) {
      console.error("Error deleting blog:", error);
    }
  };

  return (
    <div className="p-4 lg:p-8 w-full mx-auto mt-4 bg-white rounded-lg shadow-md overflow-x-auto">
      <h1 className="text-2xl font-bold mb-4">All Product List</h1>
      <table className="w-full">
        <thead>
          <tr className="font-semibold">
            <th className="text-center">Id</th>
            <th className="text-center">Image</th>
            <th className=" text-center">Title</th>
            <th className="text-center">Action</th>
          </tr>
        </thead>
        <tbody>
          {blogData.map((data, idx) => (
            <tr key={idx} className="border border-gray-300">
              <td className="  p-4 text-center">{idx + 1}</td>
              <td className="p-4 text-center">
                <img className="w-10 h-10 object-cover mx-auto" src={data.image} alt="" />
              </td>
              <td className=" p-4 text-center">{data.title}</td>

              <td className="p-4 flex items-center justify-center">
                <img
                  className="cursor-pointer"
                  onClick={() => blogDelete(data._id)}
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

export default ListBlog;
