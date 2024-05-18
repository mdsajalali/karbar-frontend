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
      await axios.post("http://localhost:5000/addblog", formData);
      toast.success("Blog added successfully!");
      setFormData(initialFormData);
    } catch (error) {
      console.error("Error adding blog:", error);
    }
  };

  return (
    <div className="p-4 md:p-8 max-w-4xl mx-auto mt-4 bg-white rounded-lg ">
      <h1 className="xl:text-3xl text-2xl md:text-4xl font-bold text-center mb-6">
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
            onChange={handleChange}
            className="border rounded-md px-4 py-2 w-full"
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
            className="border rounded-md px-4 py-2 w-full"
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
            className="border rounded-md px-4 py-2 w-full h-32 resize-none"
          ></textarea>
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="w-full h-12 bg-[#3abff8] text-white font-semibold rounded-lg hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
          >
            Add Blog
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddBlog;
