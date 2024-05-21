const DiscoverProduct = ({ data }) => {
  console.log(data);
  return (
    <div
      style={{ background: data.bg }}
      className="mb-10 rounded-md p-6 shadow-md md:flex md:items-center md:justify-between"
    >
      <div className="md:mr-6 md:w-2/3">
        <p className="text-gray-500">{data.heading}</p>
        <h1 className="text-3xl font-bold">{data.title}</h1>
        <button className="mt-4 rounded-full bg-gray-200 px-5 py-3 font-medium text-black transition-all hover:bg-gray-100 md:mt-6">
          Show me all
        </button>
      </div>
      <img
        src={data.img}
        alt={data.title}
        className="mt-4 h-32 w-32 object-cover md:mt-0 md:w-1/3"
      />
    </div>
  );
};

export default DiscoverProduct;
