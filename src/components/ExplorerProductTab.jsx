import { FaArrowRightLong } from "react-icons/fa6";

const ExplorerProductTab = ({ projects }) => {
  return (
    <>
      <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
        {projects?.map((item) => (
          <div
            key={item.id}
            className="relative cursor-pointer rounded-md p-10 shadow-md transition-all hover:shadow-xl"
          >
            <div className="flex items-center  justify-between">
              <img
                className="h-20 w-20 rounded-full bg-gray-200"
                src={item.img}
                alt=""
              />
              <p>{item.products} Products</p>
            </div>
            <div className="my-10">
              <h2>{item.title}</h2>
              <h1 className="text-2xl font-medium md:text-4xl">{item.name}</h1>
            </div>
            <button className="flex items-center gap-2 text-gray-500 transition-all hover:text-[#3abff8]">
              See Collection <FaArrowRightLong />
            </button>
            <img
              src={item.img_bg}
              alt=""
              className="absolute bottom-0 right-0 w-52"
              style={{ zIndex: -1 }}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default ExplorerProductTab;
