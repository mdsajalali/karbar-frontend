import { Link } from "react-router-dom";
import add_product_icon from "../images/Product_Cart.svg";
import list_product_icon from "../images/Product_list_icon.svg";

const Sidebar = () => {
  return (
    <div className=" mb-5 flex    w-full flex-col bg-white lg:mb-0 lg:h-auto lg:max-w-xs lg:border-r">
      <Link to="addProduct" className="no-underline">
        <div className=" mx-10 mt-5   flex rounded bg-gray-200 px-5 py-2">
          <img src={add_product_icon} alt="" className="mr-5 h-6 w-6" />
          <p>Add Product</p>
        </div>
      </Link>
      <Link to="listProduct" className="no-underline">
        <div className=" mx-10 mt-5   flex rounded bg-gray-200 px-5 py-2">
          <img src={list_product_icon} alt="" className="mr-5 h-6 w-6" />
          <p>Product List</p>
        </div>
      </Link>
      <Link to="addBlog" className="no-underline">
        <div className=" mx-10 mt-5   flex rounded bg-gray-200 px-5 py-2">
          <img src={add_product_icon} alt="" className="mr-5 h-6 w-6" />
          <p>Add Blog</p>
        </div>
      </Link>
      <Link to="listBlog" className="no-underline">
        <div className=" mx-10 mt-5   flex rounded bg-gray-200 px-5 py-2">
          <img src={list_product_icon} alt="" className="mr-5 h-6 w-6" />
          <p>Blog List</p>
        </div>
      </Link>
    </div>
  );
};

export default Sidebar;
