import { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import PhoneInput from "react-phone-number-input/input";
import { Link } from "react-router-dom";

const BecomeAgent = () => {
  const [phoneNumber, setPhoneNumber] = useState();
  return (
    <div className=" re flex justify-center relative items-center h-screen">
      <Link
        to={-1}
        className=" text-xl font-bold btn btn-ghost btn-circle text-neutral-950 absolute top-1 left-2"
      >
        <FaArrowLeft></FaArrowLeft>
      </Link>
      <div className="card bg-base-100 w-full max-w-lg min-w-[500px] shrink-0 shadow-2xl">
        <h1 className=" text-xl font-bold text-center py-3">
          Please fill the from blew to become agent.
        </h1>
        <form className="card-body">
          {/* name  */}
          <div className="form-control">
            <label className="label">
              <span className="text-base   font-semibold">Full Name</span>
            </label>

            <input
              type="text"
              placeholder="full name"
              className="input input-bordered"
              name="name"
            />
            
          </div>
          {/* user Number  */}
          <div className="form-control">
            <label className="label">
              <span className="text-base   font-semibold">Your Number</span>
            </label>
            <PhoneInput
              placeholder="Enter phone number"
              value={phoneNumber}
              onChange={setPhoneNumber}
              className="input input-bordered"
            />
          </div>
          {/* email  */}
          <div className="form-control">
            <label className="label">
              <span className="text-base   font-semibold">Your Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          {/* <p className=" text-red-600 ">{phoneError}</p> */}

          
          <div className="form-control">
            <label className="label">
              <span className="text-base   font-semibold">PIN</span>
            </label>
            <input
              type="number"
              placeholder="PIN"
              className="input input-bordered"
              required
              name="pin"
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Register</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BecomeAgent;
