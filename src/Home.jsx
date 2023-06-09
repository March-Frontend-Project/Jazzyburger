import React from 'react'
import Card from "./component/Card";
import background1 from "./assets/background/image 4.png";
import { NavLink } from "react-router-dom" 
import heroBanner from "./assets/header/hero-img.png"

const Home = ({ products,handleIncrease,handleReduce,toCartButton,cart }) => {
  return (
    <main>
        <div className='hero-banner'>
            <img src={heroBanner} alt="...Banner" className='img-fluid' />
        </div>
    <section className="main-section">
    <div className="hero-section">
      <img
        src={background1}
        alt="backgroung-img"
        className="img-fluid background1"
      ></img>
    </div>
    <div className="card-con">
      {products.slice(0,6).map((product) => (
        <Card
          product={product}
          key={product.id}
          handleIncrease={handleIncrease}
          handleReduce={handleReduce}
          toCartButton={toCartButton}
          cart={cart}
        />
      ))}
    </div>
  </section>
    <div className='more-con'>
    <NavLink to={"/more"}>
    <button className='see-more-btn'>See more</button> 
    </NavLink> 
    </div>
  </main>
  )
}

export default Home