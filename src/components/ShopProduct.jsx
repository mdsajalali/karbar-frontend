const ShopProduct = ({ data }) => {
  return (
    <div className="flex items-center justify-center flex-col mx-auto bg-white rounded-md my-10 ">
      <img
        src={data.img}
        alt={data.title}
        className="w-full bg-slate-200  object-cover mb-4 rounded-md"
      />
      <h1 className="text-xl font-bold mb-2">{data.title}</h1>
      <p className="text-gray-600">{data.quantity}+ products</p>
    </div>
  );
};

export default ShopProduct;
