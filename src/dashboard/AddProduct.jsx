import   { useState } from "react";
import axios from "axios";

const AddProduct = () => {
  const [productDetails, setProductDetails] = useState({
    name: "",
    title: "",
    image: "",
    price: "",
    rating: "",
    reviews: "",
    category: "women",
    sizes: "",
    color: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductDetails({ ...productDetails, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/addproduct",
        productDetails
      );
      console.log("Product added successfully:", response.data);
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  return (
    <div className="p-4 md:p-8 max-w-4xl mx-auto mt-4 bg-white rounded-lg shadow-md">
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="mb-4">
            <p>Name</p>
            <input
              value={productDetails.name}
              onChange={handleChange}
              type="text"
              name="name"
              placeholder="Product Name"
              className="w-full h-12 border border-gray-300 rounded px-4 mt-2"
            />
          </div>
          <div className="mb-4">
            <p>Title</p>
            <input
              value={productDetails.title}
              onChange={handleChange}
              type="text"
              name="title"
              placeholder="Product Title"
              className="w-full h-12 border border-gray-300 rounded px-4 mt-2"
            />
          </div>
          <div className="mb-4">
            <p>Image</p>
            <input
              value={productDetails.image}
              onChange={handleChange}
              type="text"
              name="image"
              placeholder="Image URL"
              className="w-full h-12 border border-gray-300 rounded px-4 mt-2"
            />
          </div>
          <div className="mb-4">
            <p>Price</p>
            <input
              value={productDetails.price}
              onChange={handleChange}
              type="number"
              name="price"
              placeholder="Product Price"
              className="w-full h-12 border border-gray-300 rounded px-4 mt-2"
            />
          </div>
          <div className="mb-4">
            <p>Rating</p>
            <input
              value={productDetails.rating}
              onChange={handleChange}
              type="number"
              name="rating"
              placeholder="Product Rating"
              className="w-full h-12 border border-gray-300 rounded px-4 mt-2"
            />
          </div>
          <div className="mb-4">
            <p>Reviews</p>
            <input
              value={productDetails.reviews}
              onChange={handleChange}
              type="number"
              name="reviews"
              placeholder="Product Reviews"
              className="w-full h-12 border border-gray-300 rounded px-4 mt-2"
            />
          </div>
          <div className="mb-4">
            <p>Category</p>
            <select
              value={productDetails.category}
              onChange={handleChange}
              name="category"
              className="w-full h-12 border border-gray-300 rounded px-4 mt-2"
            >
              <option value="women">Women</option>
              <option value="men">Men</option>
              <option value="kid">Kid</option>
            </select>
          </div>
          <div className="mb-4">
            <p>Sizes</p>
            <select
              value={productDetails.sizes}
              onChange={handleChange}
              name="sizes"
              className="w-full h-12 border border-gray-300 rounded px-4 mt-2"
            >
              <option value="S">S</option>
              <option value="M">M</option>
              <option value="L">L</option>
              <option value="XL">XL</option>
            </select>
          </div>
          <div className="mb-4">
            <p>Color</p>
            <input
              value={productDetails.color}
              onChange={handleChange}
              type="text"
              name="color"
              placeholder="Product Color"
              className="w-full h-12 border border-gray-300 rounded px-4 mt-2"
            />
          </div>
          <div className="mb-4 w-full border">
            <p>Description</p>
            <textarea
              value={productDetails.description}
              onChange={handleChange}
              name="description"
              placeholder="Product Description"
              className="w-full h-32 border border-gray-300 rounded px-4 py-2 mt-2"
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full h-12 bg-[#3abff8] text-white font-semibold rounded-lg hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
        >
          ADD
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
