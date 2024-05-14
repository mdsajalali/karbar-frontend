import DiscoverProduct from "../components/DiscoverProduct";
import one from "../images/discover/one.png";
import three from "../images/discover/three.png";
import two from "../images/discover/two.png";

const discoverData = [
  {
    id: 1,
    heading: "Explore new arrivals",
    title: "Shop the latest from top brands",
    img: one,
    bg: "#FEE2E2",
  },
  {
    id: 2,
    heading: "Explore new arrivals",
    title: "Shop the latest from top brands",
    img: two,
    bg: "#EFF6FF",
  },
  {
    id: 3,
    heading: "Explore new arrivals",
    title: "Shop the latest from top brands",
    img: three,
    bg: "#E3FFE6",
  },
];

const Discovers = () => {
  return (
    <div className="max-w-[1500px] mx-auto py-5 px-4 sm:px-6 lg:px-8 my-10">
      <h1 className="md:text-4xl text-2xl font-medium mt-10 mb-10">
        Discover more. Good things are waiting for you
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {discoverData.map((data) => (
          <DiscoverProduct key={data.id} data={data} />
        ))}
      </div>
    </div>
  );
};

export default Discovers;
