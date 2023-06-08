import { useState, useEffect } from "react";
import data from "./ProductStore";
import CartPage from "./component/CartPage";
import Home from "./Home";
import { Routes, Route } from "react-router-dom";
import ViewMore from "./ViewMore";

function App() {
  const [products, setProducts] = useState(data);
  const [cart, setCart] = useState([]);
  const appRating = 3

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

  useEffect(() => {
    const toCart = () => {
      setCart(products.filter((product) => product.cart && product));
    };
    toCart();
  }, [products]);

  return (
    <div className="App">
      <CartPage cart={cart} toCartButton={toCartButton} />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              products={products}
              handleIncrease={handleIncrease}
              handleReduce={handleReduce}
              toCartButton={toCartButton}
              cart={cart}
            />
          }
        />
        <Route path="/more" element={<ViewMore
        products={products}
        handleIncrease={handleIncrease}
        handleReduce={handleReduce}
        toCartButton={toCartButton}
        cart={cart}
        />} />
        {/* <Route path="/rating" element={<Rating/>} /> */}
      </Routes>
    </div>
  );
}

export default App;
