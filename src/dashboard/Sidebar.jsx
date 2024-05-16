import { Link } from "react-router-dom";
import add_product_icon from "../images/Product_Cart.svg";
import list_product_icon from "../images/Product_list_icon.svg";

const Sidebar = () => {
  return (
    <div className=" flex flex-col    w-full lg:max-w-xs lg:h-screen lg:mb-0 mb-5 bg-white lg:border">
      <Link to="addproduct" className="no-underline">
        <div className=" flex mt-5   mx-10 py-2 px-5 rounded bg-gray-200">
          <img src={add_product_icon} alt="" className="w-6 h-6 mr-5" />
          <p>Add Product</p>
        </div>
      </Link>
      <Link to="listproduct" className="no-underline">
        <div className=" flex mt-5   mx-10 py-2 px-5 rounded bg-gray-200">
          <img src={list_product_icon} alt="" className="w-6 h-6 mr-5" />
          <p>Product List</p>
        </div>
      </Link>
    </div>
  );
};

export default Sidebar;
