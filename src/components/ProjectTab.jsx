import { FaArrowRightLong } from "react-icons/fa6";

const ProjectTab = ({ projects }) => {
  return (
    <>
      <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((item) => (
          <div
            key={item.id}
            className="relative shadow-md rounded-md hover:shadow-xl transition-all cursor-pointer p-10"
          >
            <div className="flex items-center  justify-between">
              <img
                className="w-20 h-20 rounded-full bg-gray-200"
                src={item.img}
                alt=""
              />
              <p>{item.products} Products</p>
            </div>
            <div className="my-10">
              <h2>{item.title}</h2>
              <h1 className="text-2xl md:text-4xl font-medium">{item.name}</h1>
            </div>
            <button className="flex items-center gap-2 text-gray-500 transition-all hover:text-[#3abff8]">
              See Collection <FaArrowRightLong />
            </button>
            <img
              src={item.img_bg}
              alt=""
              className="absolute w-52 bottom-0 right-0"
              style={{ zIndex: -1 }}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default ProjectTab;
