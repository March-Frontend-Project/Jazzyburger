import { useState, useEffect } from "react";
import data from "./ProductStore";
import Home from "./Home";
import { Routes, Route } from "react-router-dom";
import ViewMore from "./ViewMore";
import Header from "./component/Header";
import LoadingPage from "./LoadingPage";

function App() {
  const [products, setProducts] = useState(data);
  const [cart, setCart] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
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

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="App ">
      {isLoading && 
      <LoadingPage/>
      }
    {!isLoading && 
      <div className="container-lg">
      <Header cart={cart} toCartButton={toCartButton}/>
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
      </Routes>
      </div>
}
    </div>
  );
}

export default App;
