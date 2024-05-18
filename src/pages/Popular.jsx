import PopularProduct from "../components/PopularProduct";
import eight from "../images/popular/eight.png";
import eleven from "../images/popular/eleven.png";
import five from "../images/popular/five.png";
import four from "../images/popular/four.png";
import nine from "../images/popular/nine.png";
import one from "../images/popular/one.png";
import seven from "../images/popular/seven.png";
import six from "../images/popular/six.png";
import ten from "../images/popular/ten.png";
import three from "../images/popular/three.png";
import twelve from "../images/popular/twelve.png";
import two from "../images/popular/two.png";

const popularData = [
  {
    id: 1,
    img: one,
    images: [two, three, four],
    title: "Suede Bomber Jacket",
    available: 2,
    rating: 41,
    review: 62,
    price: 45,
  },
  {
    id: 2,
    img: five,
    images: [six, seven, eight],
    title: "Downtown Pet Tote",
    available: 2,
    rating: 41,
    review: 262,
    price: 95,
  },
  {
    id: 3,
    img: nine,
    images: [ten, eleven, twelve],
    title: "Cadre Leather Sneakers",
    available: 2,
    rating: 41,
    review: 222,
    price: 44,
  },
];

const Popular = () => {
  return (
    <div className="max-w-[1500px] mx-auto py-5 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl md:text-4xl font-bold mb-4">
        Chosen by our experts
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {popularData.map((data) => (
          <PopularProduct key={data.id} data={data} />
        ))}
      </div>
    </div>
  );
};

export default Popular;
