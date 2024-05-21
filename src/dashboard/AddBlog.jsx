import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";

const AddBlog = () => {
  const initialFormData = {
    image: "",
    title: "",
    desc: "",
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://karbar-api.vercel.app/addBlog", formData);
      toast.success("Blog added successfully!");
      setFormData(initialFormData);
    } catch (error) {
      console.error("Error adding blog:", error);
    }
  };

  return (
    <div className="mx-auto mt-4 max-w-4xl rounded-lg bg-white p-4 md:p-8 ">
      <h1 className="mb-6 text-center text-2xl font-bold md:text-4xl xl:text-3xl">
        Add Blog
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="image" className=" mb-2">
            Image URL:
          </label>
          <input
            type="text"
            required
            id="image"
            name="image"
            value={formData.image}
            placeholder="Image URL"
            onChange={handleChange}
            className="w-full rounded-md border px-4 py-2"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="title" className=" mb-2">
            Title:
          </label>
          <input
            type="text"
            id="title"
            name="title"
            required
            value={formData.title}
            onChange={handleChange}
            placeholder="Title"
            className="w-full rounded-md border px-4 py-2"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="desc" className=" mb-2">
            Description:
          </label>
          <textarea
            id="desc"
            name="desc"
            required
            value={formData.desc}
            onChange={handleChange}
            placeholder="Blog Description"
            className="h-32 w-full resize-none rounded-md border px-4 py-2"
          ></textarea>
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="h-12 w-full rounded-lg bg-[#3abff8] font-semibold text-white hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
          >
            Add Blog
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddBlog;
