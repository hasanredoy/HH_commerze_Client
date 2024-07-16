import { FaHistory, FaHome, FaSignOutAlt, FaUserPlus } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const DashboardNav = () => {
  return (
    <main className=" bg-fuchsia-100 shadow-md shadow-neutral-600 w-[300px] h-svh ">
       <h1 className=" text-xl font-black bg-gradient-to-r bg-clip-text text-transparent from-neutral-900 via-slate-400 to-fuchsia-900 drop-shadow-lg shadow-amber-50 text-center py-5 ">HH CoMmerZe</h1>
       <div className="divider"></div>
       {/* container  */}
    <section className=" h-[80svh] p-5 max-h-screen-  flex justify-between flex-col">
            {/* nav NavLinks  */}
            <section className=" ">
        <ul className=" space-y-3">
          <NavLink className=" text-lg font-semibold  gap-2 flex items-center" to={'/dashboard/userHome'}><FaHome></FaHome>Home</NavLink>
          <NavLink className=" text-lg font-semibold  gap-2 flex items-center" to={'/ '}><FaHistory></FaHistory> Payment History</NavLink>
    
        </ul>
       </section>
      {/* static NavLinks  */}
      <section>
      <ul className=" space-y-3">
          <NavLink className=" text-lg font-semibold  gap-2 flex items-center" to={'/ '}><FaUserPlus></FaUserPlus> Become Agent</NavLink>
          <NavLink className=" text-lg font-semibold  gap-2 flex items-center" to={'/ '}><FaSignOutAlt></FaSignOutAlt> Logout</NavLink>
       
        </ul>
      </section>
    </section>
    </main>
  );
};

export default DashboardNav;