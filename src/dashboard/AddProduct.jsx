import { useState } from "react";
import { toast } from "sonner";
import useAxios from "../hooks/useAxios";

const AddProduct = () => {
  const axiosInstance = useAxios();
  const [productDetails, setProductDetails] = useState({
    name: "",
    title: "",
    image: "",
    price: "",
    rating: "",
    reviews: "",
    category: "",
    sizes: "",
    color: "",
    desc: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductDetails({ ...productDetails, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axiosInstance.post("/addProduct", productDetails);
      toast.success("Product added successfully!");
      setProductDetails({
        name: "",
        title: "",
        image: "",
        price: "",
        rating: "",
        reviews: "",
        category: "",
        sizes: "",
        color: "",
        desc: "",
      });
      e.target.reset();
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  return (
    <div className="mx-auto mt-4 max-w-4xl rounded-lg bg-white p-4 md:p-8  ">
      <h1 className="mb-6 text-center text-2xl font-bold md:text-4xl xl:text-3xl">
        Add Product
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="mb-4">
            <p>Name</p>
            <input
              value={productDetails.name}
              onChange={handleChange}
              type="text"
              name="name"
              required
              placeholder="Product Name"
              className="mt-2 h-12 w-full rounded border border-gray-300 px-4"
            />
          </div>
          <div className="mb-4">
            <p>Title</p>
            <input
              value={productDetails.title}
              onChange={handleChange}
              type="text"
              name="title"
              required
              placeholder="Product Title"
              className="mt-2 h-12 w-full rounded border border-gray-300 px-4"
            />
          </div>
          <div className="mb-4">
            <p>Image</p>
            <input
              value={productDetails.image}
              onChange={handleChange}
              type="text"
              name="image"
              required
              placeholder="Image URL"
              className="mt-2 h-12 w-full rounded border border-gray-300 px-4"
            />
          </div>
          <div className="mb-4">
            <p>Price</p>
            <input
              value={productDetails.price}
              onChange={handleChange}
              type="number"
              name="price"
              required
              placeholder="Product Price"
              className="mt-2 h-12 w-full rounded border border-gray-300 px-4"
            />
          </div>
          <div className="mb-4">
            <p>Rating</p>
            <input
              value={productDetails.rating}
              onChange={handleChange}
              type="number"
              name="rating"
              required
              placeholder="Product Rating"
              className="mt-2 h-12 w-full rounded border border-gray-300 px-4"
            />
          </div>
          <div className="mb-4">
            <p>Reviews</p>
            <input
              value={productDetails.reviews}
              onChange={handleChange}
              type="number"
              name="reviews"
              required
              placeholder="Product Reviews"
              className="mt-2 h-12 w-full rounded border border-gray-300 px-4"
            />
          </div>
          <div className="mb-4">
            <p>Category</p>
            <select
              value={productDetails.category}
              onChange={handleChange}
              name="category"
              className="mt-2 h-12 w-full rounded border border-gray-300 px-4"
            >
              <option value="">Select Category</option>
              <option value="women">Women</option>
              <option value="men">Men</option>
              <option value="kids">Kids</option>
              <option value="sports">Sports</option>
              <option value="beauty">Beauty</option>
            </select>
          </div>
          <div className="mb-4">
            <p>Sizes</p>
            <select
              value={productDetails.sizes}
              onChange={handleChange}
              name="sizes"
              required
              className="mt-2 h-12 w-full rounded border border-gray-300 px-4"
            >
              <option value="">Select Size</option>
              <option value="S">S</option>
              <option value="M">M</option>
              <option value="L">L</option>
              <option value="XL">XL</option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="color" className="mb-2 block">
              Color
            </label>
            <select
              value={productDetails.color}
              onChange={handleChange}
              name="color"
              id="color"
              required
              className="mt-2 h-12 w-full rounded border border-gray-300 px-4"
            >
              <option value="">Select Color</option>
              <option value="Red">Red</option>
              <option value="Blue">Blue</option>
              <option value="Green">Green</option>
              <option value="Pink">Pink</option>
              <option value="Brown">Brown</option>
            </select>
          </div>
          <div className="mb-4 w-full">
            <p>Description</p>
            <textarea
              value={productDetails.desc}
              onChange={handleChange}
              name="desc"
              required
              placeholder="Product Description"
              className="mt-2 h-32 w-full rounded border border-gray-300 px-4 py-2"
            />
          </div>
        </div>

        <button
          type="submit"
          className="h-12 w-full rounded-lg bg-[#3abff8] font-semibold text-white hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
