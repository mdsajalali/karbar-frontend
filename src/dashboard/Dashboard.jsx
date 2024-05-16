import { Route, Routes } from "react-router-dom";
import AddProduct from "./AddProduct";
import Header from "./Header";
import ListProduct from "./ListProduct";
import Sidebar from "./Sidebar";

const Dashboard = () => {
  return (
    <div className="">
      <Header />
      <Sidebar />
      <Routes>
        <Route path="/addproduct" element={<AddProduct />} />
        <Route path="/listproduct" element={<ListProduct />} />
      </Routes>
    </div>
  );
};

export default Dashboard;
