import { FaStar } from "react-icons/fa";

const NewArrivalsProduct = ({ data }) => {
  return (
    <div className="max-w-xs mx-auto rounded overflow-hidden my-5">
      <img
        className="w-full bg-slate-200  object-cover mb-4 rounded-md"
        src={data.img}
        alt={data.title}
      />
      <div className="flex pl-5  mb-4">
        {data?.colors?.map((color, index) => (
          <div
            key={index}
            className="w-6 h-6 rounded-full border border-gray-200 mr-2"
            style={{ backgroundColor: color }}
          ></div>
        ))}
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{data.title}</div>
        <p className="text-gray-700 text-base">{data.desc}</p>
      </div>
      <div className="px-6 py-4">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          ${data.price}.00
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
          <span className="flex items-center">
            <FaStar color="fbbf24" /> {data.rating} ( {data.review} reviews )
          </span>
        </span>
      </div>
    </div>
  );
};

export default NewArrivalsProduct;
