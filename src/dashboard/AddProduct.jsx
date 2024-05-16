import { useState } from "react";
import uploadArea from "../images/upload_area.svg";

const AddProduct = () => {
  const [image, setImage] = useState(false);
  const [productDetails, setProductDetails] = useState({
    name: "",
    title: "",
    price: "",
    rating: "",
    reviews: "",
    category: "women",
    sizes: [],
    color: "",
    description: "",
  });

  const handleImage = (e) => {
    setImage(e.target.files[0]);
  };

  const changeHandler = (e) => {
    if (e.target.name === "sizes") {
      const selectedSizes = Array.from(
        e.target.selectedOptions,
        (option) => option.value
      );
      setProductDetails({ ...productDetails, sizes: selectedSizes });
    } else {
      setProductDetails({ ...productDetails, [e.target.name]: e.target.value });
    }
  };

  const Add_Product = async () => {
    console.log(productDetails);

    let responseData;
    let product = productDetails;

    let formData = new FormData();
    formData.append("product", image);

    await fetch("http://localhost:4000/upload", {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
      body: formData,
    })
      .then((resp) => resp.json())
      .then((data) => {
        responseData = data;
      });

    if (responseData.success) {
      product.image = responseData.image_url;
      console.log(product);
      await fetch("http://localhost:4000/addproduct", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
      })
        .then((resp) => resp.json())
        .then((data) => {
          data.success ? alert("Product Added") : alert("Failed");
        });
    }
  };

  return (
    <div className="p-4 md:p-8 max-w-4xl mx-auto mt-4 bg-white rounded-lg shadow-md">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="mb-4">
          <p>Name</p>
          <input
            value={productDetails.name}
            onChange={changeHandler}
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
            onChange={changeHandler}
            type="text"
            name="title"
            placeholder="Product Title"
            className="w-full h-12 border border-gray-300 rounded px-4 mt-2"
          />
        </div>
        <div className="mb-4">
          <p>Price</p>
          <input
            value={productDetails.price}
            onChange={changeHandler}
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
            onChange={changeHandler}
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
            onChange={changeHandler}
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
            onChange={changeHandler}
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
            onChange={changeHandler}
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
            onChange={changeHandler}
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
            onChange={changeHandler}
            name="description"
            placeholder="Product Description"
            className="w-full h-32 border border-gray-300 rounded px-4 py-2 mt-2"
          />
        </div>
      </div>
      <div className="mb-4">
        <label htmlFor="file-input">
          <img
            src={image ? URL.createObjectURL(image) : uploadArea}
            className="w-32 h-32 rounded-lg object-contain m-4"
            alt=""
          />
        </label>
        <input
          onChange={handleImage}
          type="file"
          name="image"
          id="file-input"
          className="hidden"
        />
      </div>
      <button
        onClick={() => Add_Product()}
        className="w-full h-12 bg-[#3abff8] text-white font-semibold rounded-lg hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
      >
        ADD
      </button>
    </div>
  );
};

export default AddProduct;
