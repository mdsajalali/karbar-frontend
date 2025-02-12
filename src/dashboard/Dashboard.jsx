import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";

const Dashboard = () => {
  return (
    <div>
      <Header />
      <div className="col-span-12 flex flex-col lg:flex-row">
        <Sidebar />
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
