import { FaStar } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import { Link } from "react-router-dom";

const QuickViewPopup = ({ data, togglePopup }) => {
  console.log(data);
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex items-center justify-center z-10">
      <div className="bg-white rounded-md p-6 w-full max-w-xl">
        <button
          onClick={togglePopup}
          className=" flex   text-gray-600   hover:text-black"
        >
          <MdClose size={25} />
        </button>

        <div className="w-[200px] border mx-auto my-10">
          <Link to="/men">
            <img src={data.image} alt="" />
          </Link>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-2">{data.name}</h2>
          <div className="flex items-center justify-between mb-4">
            <div>
              <span className="text-lg font-bold">${data.price}.00</span>
              <span className="text-sm flex items-center gap-1 text-gray-600">
                <FaStar color="fbbf24" /> {data.rating} ({data.reviews} reviews)
              </span>
            </div>
            <div>
              <h3 className="text-md font-semibold">Sizes:</h3>
              <div className="my-2">
                <span className="border border-gray-300 rounded-md px-3 py-1 text-sm">
                  {data.sizes}
                </span>
              </div>
              <button className="bg-black  text-white py-2 px-4 rounded-full mt-2 ">
                Add To Cart
              </button>
            </div>
          </div>
          <div>
            <h1 className="text-lg font-semibold">Description</h1>
            <hr className="my-2" />
            <p className="text-sm">{data?.desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickViewPopup;
