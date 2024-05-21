import { FaStar } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import { Link } from "react-router-dom";

const QuickViewPopup = ({ data, togglePopup }) => {
  console.log(data);
  return (
    <div className="fixed left-0 top-0 z-10 flex h-full w-full items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="w-full max-w-xl rounded-md bg-white p-6">
        <button
          onClick={togglePopup}
          className=" flex   text-gray-600   hover:text-black"
        >
          <MdClose size={25} />
        </button>

        <div className="mx-auto my-10 w-[200px] border">
          <Link to="/men">
            <img src={data.image} alt="" />
          </Link>
        </div>

        <div>
          <h2 className="mb-2 text-lg font-semibold">{data.name}</h2>
          <div className="mb-4 flex items-center justify-between">
            <div>
              <span className="text-lg font-bold">${data.price}.00</span>
              <span className="flex items-center gap-1 text-sm text-gray-600">
                <FaStar color="fbbf24" /> {data.rating} ({data.reviews} reviews)
              </span>
            </div>
            <div>
              <h3 className="text-md font-semibold">Sizes:</h3>
              <div className="my-2">
                <span className="rounded-md border border-gray-300 px-3 py-1 text-sm">
                  {data.sizes}
                </span>
              </div>
              <button className="mt-2  rounded-full bg-black px-4 py-2 text-white ">
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
