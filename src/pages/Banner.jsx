import { IoSearch } from "react-icons/io5";
import banner from "../images/banner.png";

const Banner = () => {
  return (
    <div className="bg-[#FEE2E2]">
      <div className="max-w-[1500px] mx-auto py-5 px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center">
        <div className="banner-left text-center md:text-left md:w-1/2 md:block flex flex-col items-center justify-center mb-10 md:mb-0">
          <h2 className="text-2xl md:text-4xl mb-2">
            In this season, find the best 🔥
          </h2>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 mt-6">
            Exclusive collection for everyone
          </h1>
          <button className="bg-black flex items-center gap-2 text-white  py-4 px-8 rounded-full mr-2 md:mr-4">
            Explore Now
            <IoSearch className="text-2xl" />
          </button>
        </div>
        <div className="banner-right md:w-1/2">
          <img src={banner} alt="Banner" className="w-full" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
