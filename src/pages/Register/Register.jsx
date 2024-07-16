// import react phone number input
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const navigate = useNavigate();
  // state for control number
  const [phoneNumber, setPhoneNumber] = useState();
  // state for control number error
  const [phoneError, setPhoneError] = useState("");

  // console.log(typeof phoneNumber);
  // handler for register user
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    // check phone number
    if (!phoneNumber || phoneNumber?.length < 8 || phoneNumber?.length > 15) {
      return setPhoneError("invalid phone number");
    }
    setPhoneError("");
    // check pin length
    if (form?.pin?.value?.length < 5 || form?.pin?.value?.length > 5) {
      return toast.error("PIN shouldn't be grater than 5 or smaller than 5");
    }
    const user = {
      name: form.name.value,
      email: form.email.value,
      phone: phoneNumber,
      pin: form.pin.value,
      user_balance: 40,
      agent_balance: 10000,
      role:"user",
      status:'pending'
    };
    axios.post("http://localhost:5000/users", user).then((res) => {
      console.log(res.data);
      toast.success("Registered successfully.");
      setTimeout(() => {
        navigate("/");
      }, 2000);
    });
  };

  return (
    <main>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content ">
          <div className="card bg-base-100 w-full max-w-lg min-w-[500px] shrink-0 shadow-2xl">
            <h1 className=" text-xl font-bold text-center py-3">
              Please Register{" "}
            </h1>
            <form onSubmit={handleRegister} className="card-body">
              {/* Name */}
              <div className="form-control">
                <label className="label">
                  <span className="text-base   font-semibold">Full Name</span>
                </label>
                <input
                  type="text"
                  placeholder="full name"
                  className="input input-bordered"
                  required
                  name="name"
                />
              </div>
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
                  name="phoneInput"
                  rules={{ required: true }}
                />
              </div>
              <p className=" text-red-600 ">{phoneError}</p>
              {/* email  */}
              <div className="form-control">
                <label className="label">
                  <span className="text-base   font-semibold">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                  name={"email"}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="text-base   font-semibold">PIN</span>
                </label>
                <input
                  placeholder="PIN"
                  className="input input-bordered"
                  required
                  name="pin"
                  type="number"
                  maxLength="6"
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
            </form>
            <h4 className=" text-base text-center py-3">
              Already Member of <b>HH Commerze?</b>{" "}
              <Link className=" font-bold text-blue-600" to={"/"}>
                Login!
              </Link>{" "}
            </h4>
          </div>
        </div>
      </div>
      <ToastContainer></ToastContainer>
    </main>
  );
};

export default Register;
