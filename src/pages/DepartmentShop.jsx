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
    title: "Sports Kit",
    quantity: 36,
  },
  {
    id: 3,
    img: three,
    title: "Sports Kit",
    quantity: 36,
  },
  {
    id: 4,
    img: four,
    title: "Sports Kit",
    quantity: 36,
  },
];

const DepartmentShop = () => {
  return (
    <div className="max-w-[1500px] mx-auto py-5 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl md:text-4xl font-bold mb-4">
        Shop by department
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:gap-10 grid-5">
        {shopData.map((data) => (
          <ShopProduct key={data.id} data={data} />
        ))}
      </div>
    </div>
  );
};

export default DepartmentShop;
