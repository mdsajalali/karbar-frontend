import offer_img from "../images/offer-img.png";

const Offer = () => {
  return (
    <div className="max-w-6xl mx-auto py-8 px-4 sm:px-6 lg:px-8 bg-yellow-100 flex flex-col-reverse md:flex-row items-center justify-between my-20 rounded-md">
      <div className="offer-left md:w-1/2 md:pr-8">
        <img
          src={offer_img}
          alt="Special Offer"
          className="w-full rounded-lg"
        />
      </div>
      <div className="offer-right text-center md:text-left md:w-1/2">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">KarBar</h1>
        <h2 className="text-xl md:text-2xl font-semibold mb-4">
          Special offer on kids products
        </h2>
        <p className="text-base md:text-lg mb-4">
          Fashion is a form of self-expression and autonomy at a particular
          period and place.
        </p>
        <button className="bg-black text-white py-3 px-6 rounded-full hover:bg-gray-900 transition-colors duration-300">
          Discover More
        </button>
      </div>
    </div>
  );
};

export default Offer;
