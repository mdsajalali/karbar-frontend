import { FaStar } from "react-icons/fa";

const NewArrivalsProduct = ({ data }) => {
  return (
    <div className="mx-auto my-5 max-w-xs overflow-hidden rounded">
      <img
        className="mb-4 w-full  rounded-md bg-slate-200 object-cover"
        src={data.img}
        alt={data.title}
      />
      <div className="mb-4 flex  pl-5">
        {data?.colors?.map((color, index) => (
          <div
            key={index}
            className="mr-2 h-6 w-6 rounded-full border border-gray-200"
            style={{ backgroundColor: color }}
          ></div>
        ))}
      </div>
      <div className="px-6 py-4">
        <div className="mb-2 text-xl font-bold">{data.title}</div>
        <p className="text-base text-gray-700">{data.desc}</p>
      </div>
      <div className="px-6 py-4">
        <span className="mr-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700">
          ${data.price}.00
        </span>
        <span className="inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700">
          <span className="flex items-center">
            <FaStar color="fbbf24" /> {data.rating} ( {data.review} reviews )
          </span>
        </span>
      </div>
    </div>
  );
};

export default NewArrivalsProduct;
