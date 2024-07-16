// import react phone number input
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { useState } from "react";
import { Link } from "react-router-dom";
import { toast, ToastContainer} from "react-toastify";
import axios from "axios";

const Login = () => {
  // state for control number
  const [phoneNumber, setPhoneNumber] = useState();
    // state for control number error
    const [phoneError, setPhoneError] = useState("");


// handler for login 
const loginUser=(e)=>{
  e.preventDefault();
  const form = e.target;
  // check phone number
  if ( phoneNumber?.length < 8 || phoneNumber?.length > 15) {
    return setPhoneError("invalid phone number");
  }
  setPhoneError("");
  // check pin length
  if (form?.pin?.value?.length < 5 || form?.pin?.value?.length > 5) {
    return toast.error("PIN shouldn't be grater than 5 or smaller than 5");
  }
  const user = {
    email: form.email.value,
    phone: phoneNumber,
    pin: form.pin.value,
  };
  axios.post("http://localhost:5000/user_login", user).then((res) => {
    console.log(res.data);
    if(res.data?.message=='incorrect pin'){
      return toast.error("Incorrect PIN.");

    }
    if(res.data?.message=='Request Under Process'){
     return  toast.error("Please wait request is under process.");

    }
    if(res.data?.message==='user'){
     console.log('login');
      return toast.success("login successfully.");

    }
  
  });
}


  return (
    <main >

      <div  className="hero bg-base-200 min-h-screen">
        <div className="hero-content ">
          <div className="card bg-base-100 w-full max-w-lg min-w-[500px] shrink-0 shadow-2xl">
            <h1 className=" text-xl font-bold text-center py-3">Please Login with Number/Email.</h1>
            <form onSubmit={loginUser} className="card-body">
        
              {/* Number  */}
              <div className="form-control">
                <label className="label">
                  <span className="text-base   font-semibold">
                    Phone Number
                  </span>
                </label>
                <PhoneInput
                  placeholder="Enter phone number"
                  value={phoneNumber}
                  onChange={setPhoneNumber}
                  className="input input-bordered"
                />
              </div>
              <p className=" text-red-600 ">{phoneError}</p>

              {/* email  */}
              <div className="form-control">
                <label className="label">
                  <span className="text-base   font-semibold">
                    Email
                  </span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required={!phoneNumber}
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
            <h4 className=" text-base text-center py-3">New in <b>HH Commerze?</b> <Link className=" font-bold text-blue-600" to={'/register'}>Register!</Link> </h4>
          </div>
        </div>
      </div>
      <ToastContainer></ToastContainer>
    </main>
  );
};

export default Login;
