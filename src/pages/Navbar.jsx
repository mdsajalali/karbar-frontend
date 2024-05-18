import { useState } from "react";
import { FiShoppingCart } from "react-icons/fi";
import { RiMenu3Fill } from "react-icons/ri";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="border-b">
      <div className="max-w-[1500px] mx-auto py-5 px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <h1 className="text-2xl   lg:text-3xl font-semibold">
          <Link to="/">KarBar</Link>
        </h1>
        <nav className="hidden lg:flex items-center  lg:gap-10  gap-5">
          <NavLink className="text-lg font-medium   " to="/men">
            Men
          </NavLink>
          <NavLink className="text-lg font-medium  " to="/women">
            Women
          </NavLink>
          <NavLink className="text-lg font-medium  " to="/kids">
            Kids
          </NavLink>
          <NavLink className="text-lg font-medium  " to="/beauty">
            Beauty
          </NavLink>
          <NavLink className="text-lg font-medium" to="/sports">
            Sports
          </NavLink>
          <NavLink className="text-lg font-medium" to="/blogs">
            Blogs
          </NavLink>
          <NavLink className="text-lg font-medium   " to="/contact">
            Contact
          </NavLink>
        </nav>
        <div className="flex justify-center gap-4">
          <div className="hidden md:flex items-center w-10 h-10 p-1 border border-black rounded-full justify-center">
            <FiShoppingCart size={30} />
            <span className="-mt-10 -ml-4 bg-[#3abff8] rounded-full w-5 h-5 flex items-center justify-center text-white text-xs">
              0
            </span>
          </div>
          <Link
            to="/login"
            className="bg-[#3abff8] hover:bg-[#58add2] text-white font-medium py-2 px-4 rounded"
          >
            SIGN IN
          </Link>
        </div>

        <div className="lg:hidden">
          <button onClick={toggleNavbar} type="button">
            <RiMenu3Fill size={20} />
          </button>
        </div>
      </div>
      {/* Responsive Navbar */}
      <div className={`lg:hidden ${isOpen ? "block" : "hidden"}`}>
        <nav className="px-2 pt-2 pb-3 space-y-1">
          <Link
            onClick={toggleNavbar}
            className="block px-3 py-2 rounded-md text-lg font-medium  hover:bg-gray-100"
            to="/men"
          >
            Men
          </Link>
          <Link
            onClick={toggleNavbar}
            className="block px-3 py-2 rounded-md text-lg font-medium  hover:bg-gray-100"
            to="/women"
          >
            Women
          </Link>

          <Link
            onClick={toggleNavbar}
            className="block px-3 py-2 rounded-md text-lg font-medium  hover:bg-gray-100"
            to="/kids"
          >
            Kids
          </Link>
          <Link
            onClick={toggleNavbar}
            className="block px-3 py-2 rounded-md text-lg font-medium  hover:bg-gray-100"
            to="/beauty"
          >
            Beauty
          </Link>
          <Link
            onClick={toggleNavbar}
            className="block px-3 py-2 rounded-md text-lg font-medium  hover:bg-gray-100"
            to="/sports"
          >
            Sports
          </Link>
          <Link
            onClick={toggleNavbar}
            className="block px-3 py-2 rounded-md text-lg font-medium  hover:bg-gray-100"
            to="/blogs"
          >
            Blogs
          </Link>
          <Link
            onClick={toggleNavbar}
            className="block px-3 py-2 rounded-md text-lg font-medium  hover:bg-gray-100"
            to="/contact"
          >
            Contact
          </Link>
        </nav>
        <div className="block px-3 py-2 ml-2 rounded-md text-lg font-medium  hover:bg-gray-100 ">
          <FiShoppingCart size={20} />
          <span className=" -mt-6 ml-4  bg-[#3abff8] rounded-full w-4 h-4 flex items-center justify-center text-white text-xs">
            0
          </span>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
