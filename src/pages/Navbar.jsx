import { useEffect, useState } from "react";
import { FiShoppingCart } from "react-icons/fi";
import { RiMenu3Fill } from "react-icons/ri";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const logout = () => {
    window.open("http://localhost:5000/auth/logout", "_self");
  };

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const [user, setUser] = useState(null);

  console.log("user", user);

  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await fetch(
          "http://localhost:5000/auth/login/success",
          {
            method: "GET",
            credentials: "include",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
          },
        );

        if (response.status === 200) {
          const resData = await response.json();
          setUser(resData.user);
        } else {
          throw new Error("Authentication has failed!");
        }
      } catch (err) {
        console.log(err);
      }
    };

    getUser();
  }, []);

  return (
    <header className="border-b">
      <div className="mx-auto flex max-w-[1500px] items-center justify-between px-4 py-5 sm:px-6 lg:px-8">
        <h1 className="text-2xl   font-semibold lg:text-3xl">
          <Link to="/">KarBar</Link>
        </h1>
        <nav className="hidden items-center gap-5  lg:flex  lg:gap-10">
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
          <div className="hidden h-10 w-10 items-center justify-center rounded-full border border-black p-1 md:flex">
            <FiShoppingCart size={30} />
            <span className="-ml-4 -mt-10 flex h-5 w-5 items-center justify-center rounded-full bg-[#3abff8] text-xs text-white">
              0
            </span>
          </div>
          {user ? (
            <Link
              onClick={logout}
              to="/login"
              className="rounded bg-[#3abff8] px-4 py-2 font-medium text-white hover:bg-[#58add2]"
            >
              Logout
            </Link>
          ) : (
            <Link
              to="/login"
              className="rounded bg-[#3abff8] px-4 py-2 font-medium text-white hover:bg-[#58add2]"
            >
              Login
            </Link>
          )}
        </div>

        <div className="lg:hidden">
          <button onClick={toggleNavbar} type="button">
            <RiMenu3Fill size={20} />
          </button>
        </div>
      </div>
      {/* Responsive Navbar */}
      <div className={`lg:hidden ${isOpen ? "block" : "hidden"}`}>
        <nav className="space-y-1 px-2 pb-3 pt-2">
          <Link
            onClick={toggleNavbar}
            className="block rounded-md px-3 py-2 text-lg font-medium  hover:bg-gray-100"
            to="/men"
          >
            Men
          </Link>
          <Link
            onClick={toggleNavbar}
            className="block rounded-md px-3 py-2 text-lg font-medium  hover:bg-gray-100"
            to="/women"
          >
            Women
          </Link>

          <Link
            onClick={toggleNavbar}
            className="block rounded-md px-3 py-2 text-lg font-medium  hover:bg-gray-100"
            to="/kids"
          >
            Kids
          </Link>
          <Link
            onClick={toggleNavbar}
            className="block rounded-md px-3 py-2 text-lg font-medium  hover:bg-gray-100"
            to="/beauty"
          >
            Beauty
          </Link>
          <Link
            onClick={toggleNavbar}
            className="block rounded-md px-3 py-2 text-lg font-medium  hover:bg-gray-100"
            to="/sports"
          >
            Sports
          </Link>
          <Link
            onClick={toggleNavbar}
            className="block rounded-md px-3 py-2 text-lg font-medium  hover:bg-gray-100"
            to="/blogs"
          >
            Blogs
          </Link>
          <Link
            onClick={toggleNavbar}
            className="block rounded-md px-3 py-2 text-lg font-medium  hover:bg-gray-100"
            to="/contact"
          >
            Contact
          </Link>
        </nav>
        <div className="ml-2 block rounded-md px-3 py-2 text-lg font-medium  hover:bg-gray-100 ">
          <FiShoppingCart size={20} />
          <span className=" -mt-6 ml-4  flex h-4 w-4 items-center justify-center rounded-full bg-[#3abff8] text-xs text-white">
            0
          </span>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
