import { Outlet } from "react-router-dom";
import Footer from "./pages/Footer";
import Navbar from "./pages/Navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default App;
