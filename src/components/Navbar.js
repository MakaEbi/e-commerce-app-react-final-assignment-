import React from "react";
import { useNavigate } from "react-router-dom";

function Navbar({ cart, toggleCartView }) {
  const navigate = useNavigate();

  const handleToggleCart = () => {
    navigate("/"); // Ensure we're on the "/" route
    toggleCartView(); // Toggle the cart view
  };

  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px 20px",
        backgroundColor: "#007bff",
        color: "white",
      }}
    >
      <h2>My E-Commerce App</h2>
      <div>
        <button
          onClick={handleToggleCart}
          style={{
            backgroundColor: "white",
            color: "#007bff",
            border: "none",
            padding: "5px 10px",
            borderRadius: "3px",
            cursor: "pointer",
          }}
        >
          {cart.length > 0 ? `View Cart (${cart.length})` : "View Cart"}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
