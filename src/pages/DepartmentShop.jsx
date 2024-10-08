import ShopProduct from "../components/ShopProduct";
import four from "../images/shop/four.png";
import one from "../images/shop/one.png";
import three from "../images/shop/three.png";
import two from "../images/shop/two.png";

const shopData = [
  {
    id: 1,
    img: one,
    title: "Sports Kit",
    quantity: 36,
  },
  {
    id: 2,
    img: two,
    title: "Beauty Products",
    quantity: 52,
  },
  {
    id: 3,
    img: three,
    title: "Pet Food",
    quantity: 45,
  },
  {
    id: 4,
    img: four,
    title: "Travel Kit",
    quantity: 12,
  },
];

const DepartmentShop = () => {
  return (
    <div className="mx-auto max-w-[1500px] px-4 py-5 sm:px-6 lg:px-8">
      <h1 className="mb-4 text-3xl font-bold md:text-4xl">
        Shop by department
      </h1>

      <div className="grid-5 grid grid-cols-1 md:grid-cols-2 md:gap-10 lg:grid-cols-3 xl:grid-cols-4">
        {shopData?.map((data) => (
          <ShopProduct key={data.id} data={data} />
        ))}
      </div>
    </div>
  );
};

export default DepartmentShop;
