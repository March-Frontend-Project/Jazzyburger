import React from "react";
import bin from "../assets/vector-images/trash.png";
import Counter from "./Counter";

const CheckOutCart = ({ cart, handleIncrease, handleReduce, toCartButton }) => {
  return (
    <div className="cart-order-con">
      <h3>Your order from</h3>
      {cart.map((product) => (
        <>
          <div className="cart-order-inner p-3">
            <div className="d-flex">
              <h4 className="cart-product-title">{product.title}</h4>
              <div className="d-flex align-items-center justify-content-between cart-product-desc">
                <div className="bin" onClick={() => toCartButton(product.id)}>
                  <img src={bin} alt="" className="img-fluid d-block"></img>
                </div>
                <h5 className="cart-product-amount">
                  &#8358; {product.price * product.count}
                </h5>
              </div>
            </div>
            <div className="order-count">
              <Counter
                product={product}
                handleIncrease={handleIncrease}
                handleReduce={handleReduce}
              />
            </div>
          </div>
        </>
      ))}

      <div className="p-3" style={{ borderBottom: "1px solid #AAAAAA" }}>
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
  );
};

export default CheckOutCart;
