import { Outlet } from "react-router-dom";
import DashboardNav from "../pages/dashboard/DashboardNav/DashboardNav";
import useAuth from "../Hooks/useAuth";

const Dashboard = () => {
  const { logoutModal } = useAuth();
  return (
    <div className=" flex">
      <div className=" w-[20%]">
        <DashboardNav></DashboardNav>
      </div>
      {logoutModal || (
        <div className=" z-10 w-[80%]">
          <Outlet></Outlet>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
