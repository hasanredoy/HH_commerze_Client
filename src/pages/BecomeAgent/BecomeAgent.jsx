import { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import PhoneInput from "react-phone-number-input/input";
import { Link } from "react-router-dom";
import { HiCurrencyBangladeshi } from "react-icons/hi2";


const BecomeAgent = () => {
  const [phoneNumber,setPhoneNumber]=useState()
  return (
    <div className=" re flex justify-center relative items-center h-screen">
      <Link to={-1} className=" text-xl font-bold btn btn-ghost btn-circle text-neutral-950 absolute top-1 left-2"><FaArrowLeft></FaArrowLeft></Link>
<div className="card bg-base-100 w-full max-w-lg min-w-[500px] shrink-0 shadow-2xl">
            <h1 className=" text-xl font-bold text-center py-3">Please fill the from blew to become agent.</h1>
            <form  className="card-body">
        
              {/* user Number  */}
              <div className="form-control">
                <label className="label">
                  <span className="text-base   font-semibold">
                    Your Number
                  </span>
                </label>
                <PhoneInput
                  placeholder="Enter phone number"
                  value={phoneNumber}
                  onChange={setPhoneNumber}
                  className="input input-bordered"
                />
              </div>
              {/* customer Number  */}
              <div className="form-control">
                <label className="label">
                  <span className="text-base   font-semibold">
                    Customer Number
                  </span>
                </label>
                <PhoneInput
                  placeholder="Enter customer phone number"
                  value={phoneNumber}
                  onChange={setPhoneNumber}
                  className="input input-bordered"
                />
              </div>
              {/* <p className=" text-red-600 ">{phoneError}</p> */}

              {/* email  */}
              <div className="form-control">
                <label className="label">
                  <span className="text-base   font-semibold">
                    Amount 
                  </span>
                </label>
               
                <input
                  type="number"
                  placeholder="amount "
                  className="input input-bordered"
                  name="email"
                />
                 <p ><small className=" flex gap-1 items-center"><b className="text-red-600">note:</b> min 50<HiCurrencyBangladeshi className="text-xl"></HiCurrencyBangladeshi>, max as you want</small></p>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="text-base   font-semibold">
                    PIN
                  </span>
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
                <button className="btn btn-primary">Send Money</button>
              </div>
            </form>
          
          </div>
    </div>
  );
};

export default BecomeAgent;