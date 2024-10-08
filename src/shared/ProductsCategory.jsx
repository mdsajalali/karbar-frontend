import { useState } from "react";
import ProductDetail from "../components/ProductDetail";
import useProductData from "./GetProduct";

const ProductsCategory = ({ name }) => {
  const [priceSearch, setPriceSearch] = useState([]);
  const numericPriceSearch = Number(priceSearch);
  const [size, setSize] = useState([]);
  const [color, setColor] = useState([]);

  const [selectedCategories, setSelectedCategories] = useState([]);

  const categoryOptions = [
    { id: "women", label: "Women" },
    { id: "man", label: "Man" },
    { id: "kids", label: "Kids" },
    { id: "sports", label: "Sports" },
    { id: "beauty", label: "Beauty" },
  ];

  const handleCategoryChange = (value) => {
    setSelectedCategories((prev) =>
      prev.includes(value)
        ? prev.filter((category) => category !== value)
        : [...prev, value],
    );
  };

  const sizeOptions = [
    { id: "s", label: "S" },
    { id: "m", label: "M" },
    { id: "l", label: "L" },
    { id: "xl", label: "XL" },
  ];

  const handleSizeChange = (value) => {
    setSize((prev) =>
      prev.includes(value) ? prev.filter((s) => s !== value) : [...prev, value],
    );
  };

  const colorOptions = [
    { id: "red", label: "Red" },
    { id: "blue", label: "Blue" },
    { id: "green", label: "Green" },
    { id: "pink", label: "Pink" },
    { id: "brown", label: "Brown" },
  ];

  const handleColorChange = (value) => {
    setColor((prev) =>
      prev.includes(value) ? prev.filter((c) => c !== value) : [...prev, value],
    );
  };

  const [productData, loading] = useProductData({
    priceSearch: numericPriceSearch,
    category: selectedCategories,
    size,
    color,
  });

  const clearFilters = () => {
    setSize([]);
    setSelectedCategories([]);
    setColor([]);
    setPriceSearch("");
  };

  const showClearButton =
    size.length > 0 ||
    selectedCategories.length > 0 ||
    color.length > 0 ||
    priceSearch.length > 0;

  return (
    <div className="mx-auto max-w-[1500px] px-4 py-5 sm:px-6 lg:px-8">
      <h1 className="mb-4 mt-10 text-3xl font-bold md:text-4xl">
        {name} collection
      </h1>
      <p className="my-2 text-lg md:text-xl">
        We not only help you design exceptional products, but also make it easy
        for you
      </p>
      <p className="mb-2 text-lg md:text-xl">
        to share your designs with more like-minded people.
      </p>
      <hr className="my-8 border-gray-300" />

      <div className="grid grid-cols-1 gap-5 md:grid-cols-12 md:flex-row">
        <div className="col-span-1 md:col-span-3">
          <div className="mt-4 flex w-full flex-col gap-4">
            <div>
              <div className="flex w-[227px] flex-col">
                <button
                  disabled={!showClearButton}
                  onClick={clearFilters}
                  className="mb-2 mt-4 rounded-md bg-red-500 px-4 py-2 text-white hover:bg-red-600 disabled:pointer-events-none disabled:bg-red-300"
                >
                  Clear Filters
                </button>

                <label
                  htmlFor="price"
                  className="mr-2 text-[17px] font-semibold"
                >
                  Price
                </label>
              </div>

              <input
                type="number"
                id="price"
                value={priceSearch}
                onChange={(e) => setPriceSearch(e.target.value)}
                className="rounded-md border border-gray-300 px-3 py-2 focus:border-[#3abff8] focus:outline-none"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="category" className="text-[17px] font-semibold">
                Category
              </label>
              <div>
                {categoryOptions.map((cat) => (
                  <div key={cat.id} className="flex items-center">
                    <input
                      type="checkbox"
                      id={cat.id}
                      name="category"
                      value={cat.id}
                      className="mr-2"
                      checked={selectedCategories.includes(cat.id)}
                      onChange={() => handleCategoryChange(cat.id)}
                    />
                    <label htmlFor={cat.id} className="mr-4">
                      {cat.label}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col">
              <label htmlFor="size" className="text-[17px] font-semibold">
                Size
              </label>
              <div>
                {sizeOptions.map((option) => (
                  <div key={option.id} className="flex items-center">
                    <input
                      type="checkbox"
                      id={option.id}
                      name="size"
                      value={option.id}
                      className="mr-2"
                      checked={size.includes(option.id)}
                      onChange={() => handleSizeChange(option.id)}
                    />
                    <label htmlFor={option.id} className="mr-4">
                      {option.label}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col">
              <label htmlFor="color" className="text-[17px] font-semibold">
                Color
              </label>
              <div>
                {colorOptions.map((option) => (
                  <div key={option.id} className="flex items-center">
                    <input
                      type="checkbox"
                      id={option.id}
                      name="color"
                      value={option.id}
                      className="mr-2"
                      checked={color.includes(option.id)}
                      onChange={() => handleColorChange(option.id)}
                    />
                    <label htmlFor={option.id} className="mr-4">
                      {option.label}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-1 md:col-span-9">
          <div className="mb-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {loading ? (
              <div className="col-span-1 flex h-60 items-center justify-center md:col-span-2 lg:col-span-3">
                <div className="h-10 w-10 animate-spin rounded-full border-b-2 border-t-2 border-[#3abff8]" />
              </div>
            ) : productData.length === 0 ? (
              <div className="col-span-1 text-center md:col-span-2 lg:col-span-3 lg:mt-10">
                <p className="text-lg font-medium">No products found.</p>
              </div>
            ) : (
              productData.map((data) => (
                <ProductDetail key={data.id} data={data} />
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsCategory;
