import { IoSearch } from "react-icons/io5";
import banner from "../images/banner.png";

const Banner = () => {
  return (
    <div className="bg-[#FEE2E2]">
      <div className="mx-auto flex max-w-[1500px] flex-col items-center px-4 py-5 sm:px-6 md:flex-row lg:px-8">
        <div className="banner-left mb-10 flex flex-col items-center justify-center text-center md:mb-0 md:block md:w-1/2 md:text-left">
          <h2 className="mb-2 text-2xl md:text-4xl">
            In this season, find the best 🔥
          </h2>
          <h1 className="mb-6 mt-6 text-4xl font-bold md:text-5xl">
            Exclusive collection for everyone
          </h1>
          <button className="mr-2 flex items-center gap-2 rounded-full  bg-black px-8 py-4 text-white md:mr-4">
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
