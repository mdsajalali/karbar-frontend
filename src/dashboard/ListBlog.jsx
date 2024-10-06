import axios from "axios";
import { useEffect, useState } from "react";
import cross_icon from "../images/cross_icon.png";

const ListBlog = () => {
  const [blogData, setBlogData] = useState([]);

  useEffect(() => {
    const fetchBlogData = async () => {
      try {
        const response = await axios.get(
          "https://karbar-api.vercel.app/getBlog",
          {
            withCredentials: true,  
          },
        );
        setBlogData(response.data);
      } catch (error) {
        console.error("Error fetching blog data:", error);
      }
    };

    fetchBlogData();
  }, []);

  const blogDelete = async (blogId) => {
    try {
      await axios.delete(`https://karbar-api.vercel.app/deleteBlog/${blogId}`);
      setBlogData(blogData.filter((blog) => blog._id !== blogId));
    } catch (error) {
      console.error("Error deleting blog:", error);
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
            <th className=" text-center">Title</th>
            <th className="text-center">Action</th>
          </tr>
        </thead>
        <tbody>
          {blogData.map((data, idx) => (
            <tr key={idx} className="border border-gray-300">
              <td className="  p-4 text-center">{idx + 1}</td>
              <td className="p-4 text-center">
                <img
                  className="mx-auto h-10 w-10 object-cover"
                  src={data.image}
                  alt=""
                />
              </td>
              <td className=" p-4 text-center">{data.title}</td>

              <td className="flex items-center justify-center p-4">
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
