const DiscoverProduct = ({ data }) => {
  console.log(data);
  return (
    <div
      style={{ background: data.bg }}
      className="rounded-md shadow-md p-6 mb-10 md:flex md:items-center md:justify-between"
    >
      <div className="md:w-2/3 md:mr-6">
        <p className="text-gray-500">{data.heading}</p>
        <h1 className="text-3xl font-bold">{data.title}</h1>
        <button className="mt-4 md:mt-6 bg-gray-200 hover:bg-gray-100 transition-all text-black font-medium py-3 px-5 rounded-full">
          Show me all
        </button>
      </div>
      <img
        src={data.img}
        alt={data.title}
        className="w-32 h-32 object-cover mt-4 md:mt-0 md:w-1/3"
      />
    </div>
  );
};

export default DiscoverProduct;
