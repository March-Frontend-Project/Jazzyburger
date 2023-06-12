import React from "react";
import CheckOutCart from "./component/CheckOutCart";
import Header from "./component/Header";
import Footer2 from "./component/Footer2";
import "./styles/checkout.css";
import { useNavigate } from "react-router-dom";

const CheckOut = ({ cart, toCartButton, handleIncrease, handleReduce }) => {
  const navigate = useNavigate();
  return (
    <div>
      <Header cart={cart} toCartButton={toCartButton} />
      <div className="checkout-con container-lg my-5">
        <div className="sam">
          <div className="thed mb-3">
            <h2 className="dutch mb-4">Review and place order </h2>
            <p className="rev">
              Review / Add address and fulfill payments to complete your
              purchase
            </p>
          </div>
          <div className="thed pb-4">
            <h2 className="flat">Recipient information</h2>
            <button className="add" onClick={() => navigate("/update")}>
              Add Recipient
            </button>
          </div>
          <div className="thed pb-4">
            <h2 className="flat">Delivery Address</h2>
            <button className="add">Add Delivery Address</button>
          </div>

          <button className="place">Place Your Order</button>
        </div>
        <CheckOutCart
          cart={cart}
          handleIncrease={handleIncrease}
          handleReduce={handleReduce}
          toCartButton={toCartButton}
        />
      </div>
      <Footer2 />
    </div>
  );
};

export default CheckOut;
