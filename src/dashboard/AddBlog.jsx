import { useState } from "react";
import { toast } from "sonner";
import axios from "axios";
import axiosInstance from "../utils/axiosInstance";

const AddBlog = () => {
  const initialFormData = {
    image: "",
    title: "",
    desc: "",
  };

  const [formData, setFormData] = useState(initialFormData);
  const image_api_key = import.meta.env.VITE_IMAGE_API_KEY;

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const imageFormData = new FormData();
    imageFormData.append("image", file);

    try {
      const response = await axios.post(
        `https://api.imgbb.com/1/upload?expiration=600&key=${image_api_key}`,
        imageFormData,
      );

      const imageUrl = response.data.data.url;
      setFormData((prevData) => ({
        ...prevData,
        image: imageUrl,
      }));
    } catch (error) {
      console.error("Error uploading image:", error);
      toast.error("Failed to upload image");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.image) {
      toast.error("Please upload an image before submitting.");
      return;
    }

    try {
      await axiosInstance.post("/addBlog", formData);
      toast.success("Blog added successfully!");
      setFormData(initialFormData);
    } catch (error) {
      console.error("Error adding blog:", error);
      toast.error("Failed to add blog");
    }
  };

  return (
    <div className="mx-auto mt-4 max-w-4xl rounded-lg bg-white p-4 md:p-8">
      <h1 className="mb-6 text-center text-2xl font-bold md:text-4xl xl:text-3xl">
        Add Blog
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="image" className="mb-2">
            Image Upload:
          </label>
          <div>
            <input type="file" onChange={handleImageUpload} />
          </div>
          {formData.image && (
            <img
              src={formData.image}
              alt="Uploaded Preview"
              className="mt-2 h-32 rounded-md"
            />
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="title" className="mb-2">
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
          <label htmlFor="desc" className="mb-2">
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
