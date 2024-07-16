// import react phone number input
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Register = () => {
  // state for control number
  const [phoneNumber, setPhoneNumber] = useState();
  // handler for register user
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const user = {
      name: form.name.value,
      email: form.email.value,
      phone: phoneNumber,
      user_balance: 40,
      agent_balance: 10000,
    };
    axios.post("http://localhost:5000/users", user).then((res) => {
      console.log(res.data);
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
                />
              </div>
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
                  onInput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
                  type="number"
                  maxLength="6"
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
            </form>
            <h4 className=" text-base text-center py-3">
              Already Member of HH Commerze{" "}
              <Link className=" font-bold text-blue-600" to={"/"}>
                Login!
              </Link>{" "}
            </h4>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Register;
