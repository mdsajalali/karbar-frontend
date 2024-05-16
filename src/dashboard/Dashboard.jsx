import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";

const Dashboard = () => {
  return (
    <div className="">
      <Header />
      <div className="flex flex-col lg:flex-row col-span-12">
        <Sidebar />
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
