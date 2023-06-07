
import React from 'react';
// import Footer from './components/Footer.jsx';
import Footer2 from './components/Footer2.jsx';
import './App.css';
import { useState } from "react";
import data from "./ProductStore";
import Card from "./component/Card";
import background1 from "./assets/background/image 4.png";

function App() {
  const [products, setProducts] = useState(data);

  const handleIncrease = (id) => {
    const newProducts = products.map((product) => {
      if (product.id === id) {
        product.count++;
      }
      return product;
    });
    setProducts(newProducts);
  };

  const handleReduce = (id) => {
    const newProducts = products.map((product) => {
      if (product.id === id && product.count > 1) {
        product.count--;
      }
      return product;
    });
    setProducts(newProducts);
  };

  const toCartButton = (id) => {
    const newProducts = products.map((product) => {
      if (product.id === id) {
        product.cart = !product.cart;
      }
      return product;
    });
    setProducts(newProducts);
  };

  return (
    <div className="App">
      <main className="main-section">
        <div className="hero-section">
          <img
            src={background1}
            alt="backgroung-img"
            className="img-fluid"
          ></img>
        </div>
        <div className="card-con">
          {products.map((product) => (
            <Card
              product={product}
              key={product.id}
              handleIncrease={handleIncrease}
              handleReduce={handleReduce}
              toCartButton={toCartButton}
            />
          ))}
        </div>
      </main>
      <Footer2/>
    </div>
  );
}

export default App;
