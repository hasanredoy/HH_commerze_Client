import { useState } from "react";
import PhoneInput from "react-phone-number-input/input";

const AddMoney = () => {
  const [phoneNumber,setPhoneNumber]=useState()
  return (
    <div className=" flex justify-center items-center h-screen">
<div className="card bg-base-100 w-full max-w-lg min-w-[500px] shrink-0 shadow-2xl">
            <h1 className=" text-xl font-bold text-center py-3">Please give your and agent info blew.</h1>
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
              {/* Agent Number  */}
              <div className="form-control">
                <label className="label">
                  <span className="text-base   font-semibold">
                    Agent Number
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

              {/* amount  */}
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
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
          
          </div>
    </div>
  );
};

export default AddMoney;