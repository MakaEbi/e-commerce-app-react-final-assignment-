import React from "react";
import { useNavigate } from "react-router-dom";

function Navbar({ cart, toggleCartView, viewCart }) {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate("/"); // Navigate to the product list or main page
    toggleCartView(); // Toggle cart view state
  };

  // Determine button text based on cart state
  let buttonText = "View Cart"; // Default state
  if (cart.length > 0 && !viewCart) {
    buttonText = `Added (${cart.length})`; // Items added, cart not open
  } else if (viewCart) {
    buttonText = "Add More"; // Cart is open
  }

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
          {buttonText} {/* Dynamic button text */}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
