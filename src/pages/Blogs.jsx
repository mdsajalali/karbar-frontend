import axios from "axios";
import { useEffect, useState } from "react";

const Blogs = () => {
  const [blogData, setBlogData] = useState([]);
  const [expandedDesc, setExpandedDesc] = useState({});
  console.log(blogData);

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

  const toggleExpand = (id) => {
    setExpandedDesc((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  return (
    <div className="max-w-[1000px] mx-auto py-5 px-4 sm:px-6 lg:px-8">
      <h1 className="xl:text-3xl text-2xl md:text-4xl font-bold mb-6">
        Writing
      </h1>
      <hr className="my-8 border-gray-300" />
      <div className="grid grid-cols-1 gap-6">
        {blogData.map((blog) => (
          <div className="rounded-md bg-gray-100" key={blog.id}>
            <img
              className="w-full lg:h-[400px] object-cover rounded-t-md"
              src={blog.image}
              alt={blog.title}
            />
            <div className="p-6">
              <h2 className="mb-2 text-xl">{blog.title}</h2>
              {blog.desc && (
                <p className="text-sm text-gray-700">
                  {expandedDesc[blog.id]
                    ? blog.desc
                    : blog.desc.length > 200
                    ? blog.desc.slice(0, 200) + "..."
                    : blog.desc}
                  {blog.desc.length > 200 && (
                    <span
                      className="text-[#3abff8] cursor-pointer ml-1"
                      onClick={() => toggleExpand(blog.id)}
                    >
                      {expandedDesc[blog.id] ? "Read Less" : "Read More"}
                    </span>
                  )}
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
