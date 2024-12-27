import React from "react";
import { useNavigate } from "react-router-dom";

function Navbar({ cart, toggleCartView, viewCart }) {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate("/"); // Navigate to the main page
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
          onClick={handleNavigation}
          style={{
            backgroundColor: "white",
            color: "#007bff",
            border: "none",
            padding: "5px 10px",
            borderRadius: "3px",
            cursor: "pointer",
          }}
        >
          {cart.length > 0 ? `Added (${cart.length})` : "View Cart"}{" "}
          {/* Dynamic Text */}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
