const DeliveryProduct = ({ data }) => {
  return (
    <div className="mx-auto my-5 max-w-xs rounded-md bg-white p-6 text-center shadow-md">
      <img src={data.img} alt={data.title} className="mx-auto mb-4 h-24 w-24" />
      <h2
        style={{ background: data.bg }}
        className="mx-auto mb-2 w-20 rounded-full text-[14px] text-lg"
      >
        {data.step}
      </h2>
      <h1 className="mb-2 text-xl font-bold">{data.title}</h1>
      <p className="text-gray-600">{data.desc}</p>
    </div>
  );
};

export default DeliveryProduct;
