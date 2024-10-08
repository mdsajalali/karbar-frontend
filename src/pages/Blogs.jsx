import { useEffect, useState } from "react";
import useAxios from "../hooks/useAxios";

const Blogs = () => {
  const [blogData, setBlogData] = useState([]);
  const axiosInstance = useAxios();

  useEffect(() => {
    const fetchBlogData = async () => {
      try {
        const response = await axiosInstance.get("/getBlog");
        setBlogData(response.data);
      } catch (error) {
        console.error("Error fetching blog data:", error);
      }
    };

    fetchBlogData();
  }, [axiosInstance]);

  return (
    <div className="mx-auto max-w-[1000px] px-4 py-5 sm:px-6 lg:px-8">
      <h1 className="mb-6 text-2xl font-bold md:text-4xl xl:text-3xl">
        Writing
      </h1>
      <hr className="my-8 border-gray-300" />
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {blogData.map((blog) => (
          <div
            className="flex flex-col justify-between rounded-md bg-gray-100"
            key={blog.id}
          >
            <img
              className="w-full rounded-t-md object-cover"
              src={blog.image}
              alt={blog.title}
            />
            <div className="flex h-full flex-col justify-between p-6">
              <h2 className="mb-2 text-xl">{blog.title}</h2>
              {blog.desc && (
                <p className="mt-auto line-clamp-3 text-sm text-gray-700">
                  {blog.desc}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
