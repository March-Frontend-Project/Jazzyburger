import React from "react";
import Counter from "./Counter";
import ImgGallery from "./ImgGallery";

import Cart from "./Cart";
const Card = ({ product, handleIncrease, handleReduce, toCartButton }) => {
  return (
    <div className="card">
      <img src={product.image} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{product.title}</h5>
        <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex-column">
            <p class="price">Total Price</p>
            <p className="price-tag">&#8358;{product.price}.00</p>
          </div>
          <Counter
            product={product}
            handleIncrease={handleIncrease}
            handleReduce={handleReduce}
          />
        </div>
        <div>
          <ImgGallery />
        </div>
        <div>
          <Cart product={product} toCartButton={toCartButton} />
        </div>
      </div>
    </div>
  );
};

export default Card;
