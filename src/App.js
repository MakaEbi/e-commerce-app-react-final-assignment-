import React, { useState } from "react";
import ProductList from "./components/ProductList";
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";
import ProductDetail from "./components/ProductDetail"; // Import the ProductDetail component
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [cart, setCart] = useState([]); // State to track items in the cart
  const [viewCart, setViewCart] = useState(false); // State to toggle between views

  // Function to toggle the cart view
  const toggleCartView = () => setViewCart((prev) => !prev);

  return (
    <Router>
      <div>
        <Navbar cart={cart} toggleCartView={toggleCartView} />
        <Routes>
          <Route
            path="/"
            element={
              viewCart ? (
                <Cart cart={cart} setCart={setCart} />
              ) : (
                <ProductList cart={cart} setCart={setCart} />
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
