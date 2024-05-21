import offer_img from "../images/offer-img.png";

const Offer = () => {
  return (
    <div className="mx-auto my-20 flex max-w-6xl flex-col-reverse items-center justify-between rounded-md bg-yellow-100 px-4 py-8 sm:px-6 md:flex-row lg:px-8">
      <div className="offer-left md:w-1/2 md:pr-8">
        <img
          src={offer_img}
          alt="Special Offer"
          className="w-full rounded-lg"
        />
      </div>
      <div className="offer-right text-center md:w-1/2 md:text-left">
        <h1 className="mb-4 text-3xl font-bold md:text-4xl">KarBar</h1>
        <h2 className="mb-4 text-xl font-semibold md:text-2xl">
          Special offer on kids products
        </h2>
        <p className="mb-4 text-base md:text-lg">
          Fashion is a form of self-expression and autonomy at a particular
          period and place.
        </p>
        <button className="rounded-full bg-black px-6 py-3 text-white transition-colors duration-300 hover:bg-gray-900">
          Discover More
        </button>
      </div>
    </div>
  );
};

export default Offer;
