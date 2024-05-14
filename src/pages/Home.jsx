import Banner from "./Banner";
import Delivery from "./Delivery";
import DepartmentShop from "./DepartmentShop";
import Discover from "./Discover";
import NewArrivals from "./NewArrivals";
import Offer from "./Offer";
import Testimonial from "./Testimonial";

const Home = () => {
  return (
    <>
      <Banner />
      <Discover />
      <Delivery />
      <NewArrivals />
      <Offer />
      <DepartmentShop />
      <Testimonial />
    </>
  );
}

export default Home