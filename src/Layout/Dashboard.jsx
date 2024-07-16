import { Outlet } from "react-router-dom";
import DashboardNav from "../pages/dashboard/DashboardNav/DashboardNav";

const Dashboard = () => {
  return (
    <div>
      <DashboardNav></DashboardNav>
      <div>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;