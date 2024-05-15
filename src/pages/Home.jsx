import Banner from "./Banner";
import Delivery from "./Delivery";
import DepartmentShop from "./DepartmentShop";
import Discover from "./Discover";
import ExplorerProducts from "./ExplorerProducts";
import NewArrivals from "./NewArrivals";
import Offer from "./Offer";
import Popular from "./Popular";
import Products from "./Products";
import Testimonial from "./Testimonial";

const Home = () => {
  return (
    <>
      <Banner />
      <Discover />
      <Products />
      <Delivery />
      <NewArrivals />
      <ExplorerProducts />
      <Offer />
      <DepartmentShop />
      <Popular />
      <Testimonial />
    </>
  );
}

export default Home