import React, { useState } from "react";
import "./styles/Update.css";
import Header from "./component/Header";
import Footer2 from "./component/Footer2";

const Update = ({ cart, toCartButton }) => {
  const iniatialState = {
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
  };
  const [updateData, setUpdateData] = useState(iniatialState);
  const handleChange = (e) => {
    e.preventDefault();
    console.log(e.target);
    const { name, value } = e.target;
    setUpdateData({ [name]: value });
  };
  const { firstName, lastName, email, phoneNumber } = updateData;
  return (
    <div>
      <Header cart={cart} toCartButton={toCartButton} />
      <div className="cont container-lg">
        <div className="ink">
          <h1 className="osho">
            Update <br /> Recipient
          </h1>
          <div className="mb-3">
            <label className="sand d-block" htmlFor="">
              First Name
            </label>
            <input
              className="form-control "
              type="text"
              id="firstName"
              name="firstName"
              placeholder="First Name"
              value={firstName}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label className="sand d-block" htmlFor="">
              Last Name
            </label>
            <input
              className="form-control"
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Last Name"
              value={lastName}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label className="sand d-block" htmlFor="">
              Email
            </label>
            <input
              className="form-control "
              type="email"
              id="email"
              name="email"
              placeholder="example@mail.com"
              value={email}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label className="sand d-block" htmlFor="">
              Phone Number
            </label>
            <div className="d-flex num-inp">
              <input type="text" placeholder="+234" className="inpp" disabled />
              <input
                className="form-control number"
                type="text"
                id="PhoneNumber"
                name="phoneNumber"
                placeholder="818 000 0000"
                value={phoneNumber}
                onChange={handleChange}
              />
            </div>
          </div>
          <button className="btn sub text-white">Submit</button>
        </div>
        <div className="cart-order-checkout">
          <div className="p-3 " style={{ borderBottom: "1px solid #AAAAAA" }}>
            <table>
              <colgroup>
                <col className="col-1"></col>
                <col className="col-1"></col>
              </colgroup>

              <tr>
                <td>Items total:</td>
                <td>
                  &#8358;{" "}
                  {cart.reduce(
                    (total, product) => total + product.price * product.count,
                    0
                  )}
                </td>
              </tr>
              <tr>
                <td>Discount:</td>
                <td>&#8358; 0</td>
              </tr>
              <tr>
                <td className="delivery">Delivery Charge:</td>
                <td className="delivery">&#8358; 0.0</td>
              </tr>
            </table>
          </div>
          <div className="p-3 d-flex justify-content-between">
            <h6>Total:</h6>
            <h6>
              &#8358;{" "}
              {cart.reduce(
                (total, product) => total + product.price * product.count,
                0
              )}
            </h6>
          </div>
        </div>
      </div>
      <Footer2 />
    </div>
  );
};

export default Update;
