import React from "react";
import icon from "../assets/vector-images/Vector.png";
import { FaCheck } from "react-icons/fa";

const Cart = ({ product, toCartButton }) => {
  return (
    <button className="cart-btn" onClick={() => toCartButton(product.id)}>
      {!product.cart && (
        <>
          <div className="cart-icon">
            <img src={icon} alt="icon"></img>
          </div>
          <div className="cart-txt">Add to Cart</div>
        </>
      )}
      {product.cart && (
        <>
          <div className="cart-icon">
            <FaCheck />
          </div>
          <div className="cart-txt">Update Cart</div>
        </>
      )}
    </button>
  );
};

export default Cart;
