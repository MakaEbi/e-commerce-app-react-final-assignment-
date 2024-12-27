import React, { useState, useEffect } from "react";
import ProductList from "./components/ProductList";
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";
import ProductDetail from "./components/ProductDetail";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [cart, setCart] = useState([]); // State to track items in the cart
  const [viewCart, setViewCart] = useState(false); // State to toggle between views
  const [products, setProducts] = useState([]); // Cache products data
  const [loading, setLoading] = useState(true); // Loading state

  // Fetch products only once and store them in state
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setLoading(false); // Set loading to false once data is fetched
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  // Function to toggle the cart view
  const toggleCartView = () => setViewCart((prev) => !prev);

  return (
    <Router>
      <div>
        <Navbar
          cart={cart}
          toggleCartView={toggleCartView}
          viewCart={viewCart}
        />
        <Routes>
          <Route
            path="/"
            element={
              viewCart ? (
                <Cart cart={cart} setCart={setCart} setViewCart={setViewCart} />
              ) : (
                <ProductList
                  cart={cart}
                  setCart={setCart}
                  products={products}
                  loading={loading}
                />
              )
            }
          />
          <Route
            path="/product/:id"
            element={<ProductDetail cart={cart} setCart={setCart} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
