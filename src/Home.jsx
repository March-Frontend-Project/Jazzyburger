import React from 'react'
import Card from "./component/Card";
import background1 from "./assets/background/image 4.png";
import { NavLink } from "react-router-dom" 
import heroBanner from "./assets/header/hero-img.png"
import Header from './component/Header';
import Footer2 from './component/Footer2';

const Home = ({ products,handleIncrease,handleReduce,toCartButton,cart }) => {
  return (
    <div className=''>
      <Header cart={cart} toCartButton={toCartButton} />
    <main className="container">
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
  <Footer2/>
  </div>
  )
}

export default Home