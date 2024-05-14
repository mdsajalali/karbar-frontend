import DeliveryProduct from "../components/DeliveryProduct";
import four from "../images/delivery/four.png";
import one from "../images/delivery/one.png";
import three from "../images/delivery/three.png";
import two from "../images/delivery/two.png";

const deliveryData = [
  {
    id: 1,
    img: one,
    step: "Step 1",
    title: "Filter & Discover",
    desc: "Smart filtering and suggestions make it easy to find",
    bg: "#fee2e2",
  },
  {
    id: 2,
    img: two,
    step: "Step 2",
    title: "Add to bag",
    desc: "Easily select the correct items and add them to the cart",
    bg: "#eff6ff",
  },
  {
    id: 3,
    img: three,
    step: "Step 3",
    title: "Fast shipping",
    desc: "The carrier will confirm and ship quickly to you",
    bg: "#fef9c3",
  },
  {
    id: 4,
    img: four,
    step: "Step 4",
    title: "Enjoy the product",
    desc: "Have fun and enjoy your 5-star quality products",
    bg: "#f3e8ff",
  },
];

const Delivery = () => {
  return (
    <div className="max-w-[1500px] mx-auto py-5 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl md:text-4xl font-bold mb-4">
        Product Delivery Process
      </h1>
      <p className="my-2 text-lg md:text-xl">
        Swift, secure, and transparent – our product delivery promises a
        seamless journey from order
      </p>
      <p className="mb-2 text-lg md:text-xl">
        to your doorstep. Your satisfaction is our priority at every step!
      </p>
      <hr className="my-8 border-gray-300" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {deliveryData.map((data) => (
          <DeliveryProduct key={data.id} data={data} />
        ))}
      </div>
    </div>
  );
};

export default Delivery;
