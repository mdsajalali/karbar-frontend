import { useState } from "react";
import { FiShoppingCart } from "react-icons/fi";
import { RiMenu3Fill } from "react-icons/ri";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="border-b">
      <div className="max-w-[1500px] mx-auto py-5 px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <h1 className="text-2xl   lg:text-3xl font-semibold">KarBar</h1>
        <nav className="hidden md:flex items-center  lg:gap-5">
          <Link
            className="text-lg font-medium   hover:bg-gray-100 xl:px-10 px-3 py-2 rounded-full transition-all"
            href="#"
          >
            Man
          </Link>
          <Link
            className="text-lg font-medium  hover:bg-gray-100 xl:px-10 px-3 py-2 rounded-full transition-all"
            href="#"
          >
            Women
          </Link>
          <Link
            className="text-lg font-medium  hover:bg-gray-100 xl:px-10 px-3 py-2 rounded-full transition-all"
            href="#"
          >
            Beauty
          </Link>
          <Link
            className="text-lg font-medium  hover:bg-gray-100 xl:px-10 px-3 py-2 rounded-full transition-all"
            href="#"
          >
            Kids
          </Link>
          <Link
            className="text-lg font-medium  hover:bg-gray-100 lg:px-10 px-3 py-2 rounded-full transition-all"
            href="#"
          >
            Sport
          </Link>
          <Link
            className="text-lg font-medium  hover:bg-gray-100 lg:px-10 px-3 py-2 rounded-full transition-all"
            href="#"
          >
            Contact
          </Link>
        </nav>
        <div className="flex justify-center gap-4">
          <div className="hidden md:flex items-center w-10 h-10 p-1 border border-black rounded-full justify-center">
            <FiShoppingCart size={30} />
            <span className="-mt-10 -ml-4 bg-[#3abff8] rounded-full w-5 h-5 flex items-center justify-center text-white text-xs">
              0
            </span>
          </div>
          <button className="bg-[#3abff8] hover:bg-[#58add2] text-white font-medium py-2 px-4 rounded">
            SIGN IN
          </button>
        </div>

        <div className="md:hidden">
          <button onClick={toggleNavbar} type="button">
            <RiMenu3Fill size={20} />
          </button>
        </div>
      </div>
      {/* Responsive Navbar */}
      <div className={`md:hidden ${isOpen ? "block" : "hidden"}`}>
        <nav className="px-2 pt-2 pb-3 space-y-1">
          <Link
            className="block px-3 py-2 rounded-md text-lg font-medium  hover:bg-gray-100"
            href="#"
          >
            Man
          </Link>
          <Link
            className="block px-3 py-2 rounded-md text-lg font-medium  hover:bg-gray-100"
            href="#"
          >
            Women
          </Link>
          <Link
            className="block px-3 py-2 rounded-md text-lg font-medium  hover:bg-gray-100"
            href="#"
          >
            Beauty
          </Link>
          <Link
            className="block px-3 py-2 rounded-md text-lg font-medium  hover:bg-gray-100"
            href="#"
          >
            Kids
          </Link>
          <Link
            className="block px-3 py-2 rounded-md text-lg font-medium  hover:bg-gray-100"
            href="#"
          >
            Sport
          </Link>
          <Link
            className="block px-3 py-2 rounded-md text-lg font-medium  hover:bg-gray-100"
            href="#"
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
