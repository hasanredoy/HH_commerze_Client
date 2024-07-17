import { FaHistory, FaHome, FaSignOutAlt, FaUserPlus } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import { toast, ToastContainer } from "react-toastify";

const DashboardNav = () => {
  const {logoutModal, setLogoutModal} = useAuth();
  // console.log(logoutModal);
const handleLogout=()=>{
  localStorage.setItem('user','{}')
  setLogoutModal(false)
  toast.success('logged out successfully')
}
  return (
    <main className="">
      {logoutModal ? (
        <div className="flex flex-col max-w-md gap-2 p-6 rounded-md shadow-md bg-purple-100  text-gray-900 justify-center text-center absolute top-[25%] left-[36%] w-[300px] ">
          <h2 className=" gap-2 text-xl font-semibold leading-tight tracking-wide">
            Are You Sure?
          </h2>
          <p className="flex-1 ">
            You want to logout?
          </p>
          <div className="flex flex-col justify-center  gap-3 mt-6 sm:flex-row">
            <button onClick={()=>setLogoutModal(false)} className="btn btn-outline">No</button>
            <button onClick={handleLogout} className="btn btn-primary">
              Yes
            </button>
          </div>
        </div>
      ) : (
        <section className=" bg-fuchsia-100 border-r-2 border-fuchsia-200 shadow-md shadow-neutral-600 h-svh  z-50 ">
          <h1 className=" text-xl font-black bg-gradient-to-r bg-clip-text text-transparent from-neutral-900 via-slate-400 to-fuchsia-900 drop-shadow-lg shadow-amber-50 text-center py-5 ">
            HH CoMmerZe
          </h1>
          <div className="divider"></div>
          {/* container  */}
          <section className=" h-[80svh] p-5 max-h-screen-  flex justify-between flex-col">
            {/* nav NavLinks  */}
            <section className=" ">
              <ul className=" space-y-3">
                <NavLink
                  className=" text-lg font-semibold  gap-2 flex items-center"
                  to={"/dashboard/userHome"}
                >
                  <FaHome></FaHome>Home
                </NavLink>
                <NavLink
                  className=" text-lg font-semibold  gap-2 flex items-center"
                  to={"/ "}
                >
                  <FaHistory></FaHistory> Payment History
                </NavLink>
              </ul>
            </section>
            {/* static NavLinks  */}
            <section>
              <ul className=" space-y-3">
                <NavLink
                  className=" text-lg font-semibold  gap-2 flex items-center"
                  to={"/dashboard/becomeAgent"}
                >
                  <FaUserPlus></FaUserPlus> Become Agent
                </NavLink>
                <button
                  onClick={() => setLogoutModal(!logoutModal)}
                  className=" text-lg font-semibold  gap-2 flex items-center"
                >
                  <FaSignOutAlt></FaSignOutAlt> Logout
                </button>
              </ul>
            </section>
          </section>
        </section>
      )}
      <ToastContainer></ToastContainer>
    </main>
  );
};

export default DashboardNav;
