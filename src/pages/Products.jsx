import ProductDetail from "../components/ProductDetail";
import productData from "./../data/ProductsData";

const Products = () => {
  return (
    <div className="max-w-[1500px] mx-auto py-5 px-4 sm:px-6 lg:px-8 my-10">
      <h1 className="text-3xl md:text-4xl font-bold mb-4">
        What's trending now
      </h1>
      <p className="my-2 text-lg md:text-xl">
        Discover the most trending products in Karbar.
      </p>

      <hr className="my-8 border-gray-300" />

      {/* <div className="flex flex-wrap justify-center gap-4">
        <div className="flex flex-col">
          <label htmlFor="price" className="text-sm font-semibold">
            Price
          </label>
          <input
            type="number"
            id="price"
            className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#3abff8]"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="category" className="text-sm font-semibold">
            Category
          </label>
          <select
            id="category"
            className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#3abff8]"
          >
            <option value="">All</option>
            <option value="women">Women</option>
            <option value="man">Man</option>
            <option value="kids">Kids</option>
            <option value="sports">Sports</option>
            <option value="beauty">Beauty</option>
          </select>
        </div>
        <div className="flex flex-col">
          <label htmlFor="size" className="text-sm font-semibold">
            Size
          </label>
          <select
            id="size"
            className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#3abff8]"
          >
            <option value="">All</option>
            <option value="s">S</option>
            <option value="m">M</option>
            <option value="l">L</option>
            <option value="xl">XL</option>
          </select>
        </div>
        <div className="flex flex-col">
          <label htmlFor="color" className="text-sm font-semibold">
            Color
          </label>
          <select
            id="color"
            className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#3abff8]"
          >
            <option value="">All</option>
            <option value="red">Red</option>
            <option value="blue">Blue</option>
            <option value="green">Green</option>
            <option value="pink">Pink</option>
            <option value="brown">Brown</option>
          </select>
        </div>
      </div> */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {productData.map((data) => (
          <ProductDetail key={data.id} data={data} />
        ))}
      </div>
    </div>
  );
};

export default Products;
