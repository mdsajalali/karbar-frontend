const ShopProduct = ({ data }) => {
  return (
    <div className="mx-auto my-10 flex flex-col items-center justify-center rounded-md bg-white ">
      <img
        src={data.img}
        alt={data.title}
        className="mb-4 w-full  rounded-md bg-slate-200 object-cover"
      />
      <h1 className="mb-2 text-xl font-bold">{data.title}</h1>
      <p className="text-gray-600">{data.quantity}+ products</p>
    </div>
  );
};

export default ShopProduct;
