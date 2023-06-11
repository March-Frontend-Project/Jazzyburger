import React, { useState } from "react";
import mobileImg from "../assets/mobile/image 4.png";

const Signup = () => {
  const initialState = {
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassWord: "",
  };
  const [user, setUser] = useState(initialState);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [passwordVisible1, setPasswordVisible1] = useState(false);
  const [errors, setErrors] = useState({});

  const handleTogglePassword = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleTogglePassword1 = () => {
    setPasswordVisible1(!passwordVisible1);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
    setErrors({ ...errors, [name]: "" });

    if (name === "email") {
      if (!value.includes("@") || !value.includes(".com")) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          email: "Invalid email format*",
        }));
      }
    }

    if (name === "phoneNumber") {
      if (value.length < 10 || value.length > 10) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          phoneNumber: "Invalid Phone Number*",
        }));
      }
    }

    if (name === "password" || name === "confirmPassWord") {
      if (value.length < 8) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          [name]: "Password too short*",
        }));
      }
    }

    if (user.password !== user.confirmPassWord) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        confirmPassWord: "Passwords do not match*",
      }));
    }
  };

  const { firstName, lastName, email, phoneNumber, password, confirmPassWord } =
    user;
  console.log(user);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    // Check for errors
    if (firstName.length === 0) {
      newErrors.firstName = "Required*";
    }
    if (lastName.length === 0) {
      newErrors.lastName = "Required*";
    }
    if (email.length === 0) {
      newErrors.email = "Required*";
    }
    if (phoneNumber.length <= 0) {
      newErrors.phoneNumber = "Required*";
    }

    if (password.length < 8) {
      newErrors.password = "Password should be at least 8 characters*";
    }
    if (confirmPassWord.length < 8) {
      newErrors.confirmPassWord =
        "Confirm password should be at least 8 characters*";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      // Perform your form submission logic here
      console.log(user);
    }
  };

  return (
    <div className="form-container col-10 offset-1  col-md-4 offset-md-4">
      <div className="first text-center mt-4">
        <img className="mb-4" src={mobileImg} alt="" height={120} />
        <h2 className="create mb-5">Create Your account</h2>
      </div>
      <div className="cont col-md-10 col-10 offset-1 offset-md-1">
        <form onSubmit={handleSubmit}>
          <div className="label mb-3">
            <label className="label d-block" htmlFor="">
              First name
            </label>
            <input
              className={`form-control ${errors.firstName ? "error" : ""}`}
              type="text"
              id="firstName"
              name="firstName"
              placeholder="First Name"
              value={firstName}
              onChange={handleChange}
            />

            {errors.firstName && (
              <label className="label1 text-danger">{errors.firstName}</label>
            )}
          </div>
          <div className="mb-3">
            <label className="label d-block" htmlFor="">
              Last name
            </label>
            <input
              className={`form-control ${errors.lastName ? "error" : ""}`}
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Last Name"
              value={lastName}
              onChange={handleChange}
            />
            {errors.lastName && (
              <label className="label1 text-danger">{errors.lastName}</label>
            )}
          </div>
          <div className="mb-3">
            <label className="label d-block" htmlFor="">
              Email
            </label>
            <input
              className={`form-control ${errors.email ? "error" : ""}`}
              type="text"
              id="email"
              name="email"
              placeholder="example@mail.com"
              value={email}
              onChange={handleChange}
            />
            {errors.email && (
              <label className="label1 text-danger">{errors.email}</label>
            )}
          </div>
          <div className="mb-3">
            <label className="label d-block" htmlFor="">
              Phone Number
            </label>

            <input
              className={`form-control ${errors.phoneNumber ? "error" : ""}`}
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              placeholder="818 000 0000"
              value={phoneNumber}
              onChange={handleChange}
            />
            <div className="toolkit-con">
              <button
                className="toolkit"
                type="button"
                disabled
                aria-label="Disabled button"
              >
                <span>+234</span>
              </button>
            </div>

            {errors.phoneNumber && (
              <label className="label1 text-danger">{errors.phoneNumber}</label>
            )}
          </div>
          <div className="mb-3 login">
            <label className="label d-block" htmlFor="">
              Password (8 character minimum)
            </label>
            <input
              className={`form-control ${errors.password ? "error" : ""}`}
              type={passwordVisible ? "text" : "password"}
              id="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={handleChange}
            />

            <button
              className="btn-password"
              onClick={handleTogglePassword}
              aria-label={passwordVisible ? "Hide password" : "Show password"}
            >
              <i
                className={`fa fa-sharp fa-light ${
                  passwordVisible ? "fa-eye" : "fa-eye-slash"
                }`}
              ></i>
            </button>
          </div>
          <div className="er">
            {errors.password && (
              <label className="label3 text-danger">{errors.password}</label>
            )}
          </div>
          <div className="mb-3 login">
            <label className="label d-block" htmlFor="">
              Confirm Password
            </label>
            <input
              className={`form-control ${
                errors.confirmPassWord ? "error" : ""
              }`}
              type={passwordVisible1 ? "text" : "password"}
              id="confirmPassWord"
              name="confirmPassWord"
              placeholder="Confirm Password"
              value={confirmPassWord}
              onChange={handleChange}
            />

            <button
              className="btn-password"
              onClick={handleTogglePassword1}
              aria-label={passwordVisible1 ? "Hide password" : "Show password"}
            >
              <i
                className={`fa fa-sharp fa-light ${
                  passwordVisible1 ? "fa-eye" : "fa-eye-slash"
                }`}
              ></i>
            </button>
          </div>
          <div className="er">
            {errors.confirmPassWord && (
              <label className="label2 text-danger">
                {errors.confirmPassWord}
              </label>
            )}
          </div>

          <div className="mb-3">
            <input type="checkbox" />
            <label className="keep" htmlFor="">
              Keep me signed in
            </label>
          </div>

          <div className="btn1 text-center mb-4">
            <button className="btn-create">Create Your Account</button>
          </div>
        </form>
      </div>

      <div className="foot p-2 text-center mb-4">
        <p className="have">
          Have an account? <a href="">Sign in</a>
        </p>
        By creating your Quickmunch account, you agree to the <br />
        <a href="">Terms of use</a> and <a href="">Privacy Policy.</a>
      </div>
    </div>
  );
};

export default Signup;
