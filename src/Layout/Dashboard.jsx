import { Outlet } from "react-router-dom";
import DashboardNav from "../pages/dashboard/DashboardNav/DashboardNav";

const Dashboard = () => {
  return (
    <div className=" flex">
        <div  className=" w-[20%]">
        <DashboardNav></DashboardNav>
        </div>
      <div className=" w-[80%]">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;