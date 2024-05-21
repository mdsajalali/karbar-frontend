import ProductDetail from "../components/ProductDetail";
import productData from "./../data/ProductsData";

const Products = () => {
  return (
    <div className="mx-auto my-10 max-w-[1500px] px-4 py-5 sm:px-6 lg:px-8">
      <h1 className="mb-4 text-3xl font-bold md:text-4xl">
        What's trending now
      </h1>
      <p className="my-2 text-lg md:text-xl">
        Discover the most trending products in Karbar.
      </p>

      <hr className="my-8 border-gray-300" />

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {productData.map((data) => (
          <ProductDetail key={data.id} data={data} />
        ))}
      </div>
    </div>
  );
};

export default Products;
