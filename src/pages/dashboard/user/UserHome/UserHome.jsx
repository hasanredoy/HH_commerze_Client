import banner from "../../../../assets/banking-background-design.png";
import addMoney from "../../../../assets/icons/add-money.png";
import balance from "../../../../assets/icons/cash.png";
import cashOut from "../../../../assets/icons/withdrawal.png";
import sendMoney from "../../../../assets/icons/transfer.png";
import { Link } from "react-router-dom";

const UserHome = () => {
  return (
    <main>
      <section className=" h-[250px] px-10 flex w-screen max-w-[100%] bg-slate-100  ">
        <div className=" flex-1 flex pt-20  text-start justify-start   flex-col gap-3">
          <h1 className=" text-4xl font-black">
            {" "}
            Welcome To{" "}
            <span className=" font-black bg-gradient-to-r bg-clip-text text-transparent from-fuchsia-800 via-slate-400 to-fuchsia-900 drop-shadow-lg shadow-amber-50">
              HH CoMmerZe
            </span>
          </h1>
          <p className=" text-lg font-semibold">
            A digital mobile banging system. Where user can pay and add balance
            anytime anywhere..
          </p>
        </div>
        <div className=" flex-1">
        <img
          src={banner}
          alt="user home banner"
          className=" h-full w-full"
        />
        </div>
      </section>
      {/* section for payments methods */}
      <h2 className=" text-center text-3xl font-bold py-10">What You Wanna Do?</h2>
      <section className=" flex justify-center gap-10">
        {/* add money  */}
        <Link to={'/dashboard/addMoney'} className="stats shadow-md bg-gray-100  border border-gray-600  ">
          <div className="stat flex items-center flex-col gap-3 w-40">
            <div className="stat-title text-lg font-bold text-black">Add Money</div>
             <img src={addMoney} className=" w-16 h-16" alt="add money icon" />
          </div>
        </Link>
        {/*cashout  div   */}
        <Link to={'/dashboard/cashOut'} className="stats shadow-md bg-gray-100  border border-gray-600  w-40  ">
          <div className="stat flex items-center flex-col  gap-3">
            <div className="stat-title text-lg font-bold text-black">Cash Out</div>
             <img src={cashOut} className=" w-16 h-16" alt="add money icon" />
          </div>
        </Link>
        {/* send money  */}
        <Link to={'/dashboard/sendMoney'} className="stats shadow-md bg-gray-100  border border-gray-600   w-40">
          <div className="stat flex items-center flex-col gap-3">
            <div className="stat-title text-lg font-bold text-black">Send Money</div>
             <img src={sendMoney} className=" w-16 h-16" alt="add money icon" />
          </div>
        </Link>
        {/* balance   */}
        <div className="stats shadow-md bg-gray-100  border border-gray-600  w-40 overflow-hidden ">
          <div className="stat flex items-center flex-col gap-3">
            <div className="stat-title text-lg font-bold text-black">Check Blance</div>
             <img src={balance} className=" w-16 h-16" alt="add money icon" />
          </div>
        </div>
      </section>
    </main>
  );
};

export default UserHome;
