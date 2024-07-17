import balance from "../../../../assets/icons/cash.png"; 
import addMoney from "../../../../assets/icons/add-money.png";
import cashOut from "../../../../assets/icons/withdrawal.png";
import sendMoney from "../../../../assets/icons/transfer.png";
import { Link } from "react-router-dom";
import useAuth from "../../../../Hooks/useAuth";
import { HiCurrencyBangladeshi } from "react-icons/hi2";
import Banner from "../../../../components/banner/Banner";

const UserHome = () => {
  const {user}= useAuth()
  console.log(user);
  return (
    <main>
      <Banner></Banner>
      {/* section for payments methods */}
      <h2 className=" text-center text-2xl font-bold py-10">
      Hi, <span className=" font-black bg-gradient-to-r bg-clip-text text-transparent from-fuchsia-800 via-slate-400 to-fuchsia-900 drop-shadow-lg shadow-amber-50">{user?.name?user.name:"Welcome Back"}</span>
      </h2>
      <section className=" flex justify-center gap-10">
        {/* add money  */}
        <Link
          to={"/dashboard/addMoney"}
          className="stats shadow-md bg-gray-100  border border-gray-600  "
        >
          <div className="stat flex items-center flex-col gap-3 w-40">
            <div className="stat-title text-lg font-bold text-black">
              Add Money
            </div>
            <img src={addMoney} className=" w-16 h-16" alt="add money icon" />
          </div>
        </Link>
        {/*cashout  div   */}
        <Link
          to={"/dashboard/cashOut"}
          className="stats shadow-md bg-gray-100  border border-gray-600  w-40  "
        >
          <div className="stat flex items-center flex-col  gap-3">
            <div className="stat-title text-lg font-bold text-black">
              Cash Out
            </div>
            <img src={cashOut} className=" w-16 h-16" alt="add money icon" />
          </div>
        </Link>
        {/* send money  */}
        <Link
          to={"/dashboard/sendMoney"}
          className="stats shadow-md bg-gray-100  border border-gray-600   w-40"
        >
          <div className="stat flex items-center flex-col gap-3">
            <div className="stat-title text-lg font-bold text-black">
              Send Money
            </div>
            <img src={sendMoney} className=" w-16 h-16" alt="add money icon" />
          </div>
        </Link>
        {/* balance   */}
        <div
        role="btn"

         onClick={() => document.getElementById("balance_modal").showModal()}
        className="stats shadow-md bg-gray-100  border border-gray-600  w-40 overflow-hidden scale-100 cursor-pointer ">
          <div className="stat flex items-center flex-col gap-3">
            <div className="stat-title text-lg font-bold text-black">
              Check Blance
            </div>
            <img src={balance} className=" w-16 h-16" alt="add money icon" />
          </div>
        </div>
      </section>
      {/* balance modal  */}

      <dialog id="balance_modal" className="modal modal-bottom sm:modal-middle absolute bg-purple-200">
        <div className="modal-box flex justify-center items-center flex-col">
          <h3 className="font-bold text-2xl">Your Balance is </h3>
          <p className="py-4 font-semibold text-xl flex items-center gap-2 text-purple-700">
          {user?.balance} <HiCurrencyBangladeshi className="text-xl"></HiCurrencyBangladeshi>
          </p>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn btn-primary">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </main>
  );
};

export default UserHome;
