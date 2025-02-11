import NewArrivalsProduct from "../components/NewArrivalsProduct";
import four from "../images/new-arrivals/four.png";
import one from "../images/new-arrivals/one.png";
import three from "../images/new-arrivals/three.png";
import two from "../images/new-arrivals/two.png";

const newArrivalsData = [
  {
    id: 1,
    img: one,
    title: "Leather Gloves",
    desc: "Perfect mint green",
    colors: ["#fbbf24", "#0ea5e9", "#ef4444", "#66d78f", "#000000"],
    price: 45,
    rating: 4.5,
    review: 62,
  },
  {
    id: 2,
    img: two,
    title: "Leather Gloves",
    desc: "Perfect mint green",
    colors: ["#fbbf24", "#0ea5e9", "#ef4444", "#66d78f", "#000000"],
    price: 45,
    rating: 4.5,
    review: 62,
  },
  {
    id: 3,
    img: three,
    title: "Leather Gloves",
    desc: "Perfect mint green",
    colors: ["#fbbf24", "#0ea5e9", "#ef4444", "#66d78f", "#000000"],
    price: 45,
    rating: 4.5,
    review: 62,
  },
  {
    id: 4,
    img: four,
    title: "Leather Gloves",
    desc: "Perfect mint green",
    colors: ["#fbbf24", "#0ea5e9", "#ef4444", "#66d78f", "#000000"],
    price: 45,
    rating: 4.5,
    review: 62,
  },
];

const NewArrivals = () => {
  return (
    <div className="mx-auto max-w-[1500px] px-4 py-5 sm:px-6 lg:px-8">
      <h1 className="mb-4 text-3xl font-bold md:text-4xl">
        New Arrivals. REY backpacks & bags
      </h1>

      <div className="grid grid-cols-1   md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {newArrivalsData?.map((data) => (
          <NewArrivalsProduct key={data.id} data={data} />
        ))}
      </div>
    </div>
  );
};

export default NewArrivals;
