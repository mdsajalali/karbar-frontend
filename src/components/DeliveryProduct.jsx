const DeliveryProduct = ({ data }) => {
  return (
    <div className="max-w-xs mx-auto bg-white rounded-md shadow-md p-6 text-center my-20">
      <img src={data.img} alt={data.title} className="w-24 h-24 mx-auto mb-4" />
      <h2 style={{ background: data.bg }} className="text-lg text-[14px] mb-2 w-20 rounded-full mx-auto">{data.step}</h2>
      <h1 className="text-xl font-bold mb-2">{data.title}</h1>
      <p className="text-gray-600">{data.desc}</p>
    </div>
  );
};

export default DeliveryProduct;
