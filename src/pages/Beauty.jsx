import ProductDetail from "../components/ProductDetail";
import productData from "./../data/ProductsData";

const Beauty = () => {
  return (
    <div className="max-w-[1500px] mx-auto py-5 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl md:text-4xl font-bold mb-4 mt-10">
        Beauty collection
      </h1>
      <p className="my-2 text-lg md:text-xl">
        We not only help you design exceptional products, but also make it easy
        for you
      </p>
      <p className="mb-2 text-lg md:text-xl">
        to share your designs with more like-minded people.
      </p>
      <hr className="my-8 border-gray-300" />

      <div className="flex flex-col md:flex-row justify-center gap-5">
        <div className="flex flex-col w-full md:w-[250px] mt-4 gap-4">
          <div>
            <label htmlFor="price" className="text-[17px] font-semibold mr-2">
              Price
            </label>
            <input
              type="number"
              id="price"
              className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#3abff8]"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="category" className="text-[17px] font-semibold">
              Category
            </label>
            <div>
              <input
                type="checkbox"
                id="women"
                value="women"
                className="mr-2"
              />
              <label htmlFor="women" className="mr-4">
                Women
              </label>
              <br />
              <input type="checkbox" id="man" value="man" className="mr-2" />
              <label htmlFor="man" className="mr-4">
                Man
              </label>
              <br />
              <input type="checkbox" id="kids" value="kids" className="mr-2" />
              <label htmlFor="kids" className="mr-4">
                Kids
              </label>
              <br />
              <input
                type="checkbox"
                id="sports"
                value="sports"
                className="mr-2"
              />
              <label htmlFor="sports" className="mr-4">
                Sports
              </label>
              <br />
              <input
                type="checkbox"
                id="beauty"
                value="beauty"
                className="mr-2"
              />
              <label htmlFor="beauty">Beauty</label>
            </div>
          </div>
          <div className="flex flex-col">
            <label htmlFor="size" className="text-[17px] font-semibold">
              Size
            </label>
            <div>
              <input type="checkbox" id="s" value="s" className="mr-2" />
              <label htmlFor="s" className="mr-4">
                S
              </label>
              <br />
              <input type="checkbox" id="m" value="m" className="mr-2" />
              <label htmlFor="m" className="mr-4">
                M
              </label>
              <br />
              <input type="checkbox" id="l" value="l" className="mr-2" />
              <label htmlFor="l" className="mr-4">
                L
              </label>
              <br />
              <input type="checkbox" id="xl" value="xl" className="mr-2" />
              <label htmlFor="xl">XL</label>
            </div>
          </div>
          <div className="flex flex-col">
            <label htmlFor="color" className="text-[17px] font-semibold">
              Color
            </label>
            <div>
              <input type="checkbox" id="red" value="red" className="mr-2" />
              <label htmlFor="red" className="mr-4">
                Red
              </label>
              <br />
              <input type="checkbox" id="blue" value="blue" className="mr-2" />
              <label htmlFor="blue" className="mr-4">
                Blue
              </label>
              <br />
              <input
                type="checkbox"
                id="green"
                value="green"
                className="mr-2"
              />
              <label htmlFor="green" className="mr-4">
                Green
              </label>
              <br />
              <input type="checkbox" id="pink" value="pink" className="mr-2" />
              <label htmlFor="pink" className="mr-4">
                Pink
              </label>
              <br />
              <input
                type="checkbox"
                id="brown"
                value="brown"
                className="mr-2"
              />
              <label htmlFor="brown">Brown</label>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
          {productData.map((data) => (
            <ProductDetail key={data.id} data={data} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Beauty;
