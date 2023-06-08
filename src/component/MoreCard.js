import React from "react";
import ImgGallery from "./ImgGallery";
import Cart from "./Cart";
import Rating from "./Rating";
import img1 from "../assets/fruit-group/group7.png";
import img2 from "../assets/fruit-group/group8.png";
import img3 from "../assets/fruit-group/group9.png";
import img4 from "../assets/fruit-group/group10.png";
import img5 from "../assets/fruit-group/group11.png";

const MoreCard = ({ product, toCartButton }) => {
  return (
    <div className="card">
      <img src={product.image} className="card-img-top img-fluid" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{product.title}</h5>
        <h5 className="card-title">{product.desc}</h5>
        <div className="d-flex justify-content-between align-items-center">
          <div className=" ">
            <h5 class="price">Ingredients:</h5>
            <p className="price-tag">
              <ImgGallery a={img1} b={img2} c={img3} d={img4} e={img5} />
            </p>
          </div>
        </div>
        <div className="d-flex justify-content-between align-items-center">
            <Rating/>
        </div>
        <div>
          <Cart product={product} toCartButton={toCartButton} />
        </div>
      </div>
    </div>
  );
};

export default MoreCard;
