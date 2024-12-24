import React from "react";
import { useNavigate } from "react-router-dom";

function ProductCard({ id, name, price, image, cart, setCart }) {
  const navigate = useNavigate();

  const addToCart = (event) => {
    event.stopPropagation(); // Prevent navigation when adding to cart
    const newItem = { id, name, price, image };
    setCart([...cart, newItem]);
  };

  const navigateToDetails = () => {
    navigate(`/product/${id}`); // Navigate to product details page
  };

  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "5px",
        padding: "10px",
        margin: "10px",
        width: "200px",
        textAlign: "center",
        cursor: "pointer", // Makes the card look clickable
      }}
      onClick={navigateToDetails} // Navigate to product details on card click
    >
      <img
        src={image}
        alt={name}
        style={{ width: "100%", height: "150px", objectFit: "contain" }}
      />
      <h3>{name}</h3>
      <p>{price}</p>
      <button
        style={{
          backgroundColor: "#007bff",
          color: "white",
          border: "none",
          padding: "5px 10px",
          borderRadius: "3px",
          cursor: "pointer",
        }}
        onClick={addToCart} // Add to cart without navigating
      >
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;
