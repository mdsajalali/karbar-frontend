import Banner from "./pages/Banner";
import Delivery from "./pages/Delivery";
import DepartmentShop from "./pages/DepartmentShop";
import Discover from "./pages/Discover";
import Footer from "./pages/Footer";
import Navbar from "./pages/Navbar"
import Offer from "./pages/Offer";
import Testimonial from "./pages/Testimonial";

const App = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <Discover />
      <Delivery />
      <Offer />
      <DepartmentShop />
      <Testimonial />
      <Footer />
    </>
  );
};

export default App;


