import React from "react";
import { useNavigate } from "react-router-dom";

function Cart({ cart, setCart, setViewCart }) {
  const navigate = useNavigate();

  const totalPrice = cart.reduce((total, item) => {
    return total + parseFloat(item.price.replace("$", ""));
  }, 0);

  const removeFromCart = (index) => {
    const updatedCart = cart.filter((_, i) => i !== index);
    setCart(updatedCart);
  };

  const handlePlaceOrder = () => {
    alert("Order confirmed! We’ll start preparing it right away."); // Show notification
    setCart([]); // Clear the cart
    setViewCart(false); // Switch back to product list view
    navigate("/"); // Navigate to the product list
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty!</p>
      ) : (
        <>
          <ul>
            {cart.map((item, index) => (
              <li key={index} style={{ marginBottom: "10px" }}>
                {item.name} - {item.price}
                <button
                  onClick={() => removeFromCart(index)}
                  style={{
                    marginLeft: "10px",
                    backgroundColor: "red",
                    color: "white",
                    border: "none",
                    padding: "5px 10px",
                    borderRadius: "3px",
                    cursor: "pointer",
                  }}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <h3>Total: ${totalPrice.toFixed(2)}</h3>
          <button
            onClick={handlePlaceOrder}
            style={{
              backgroundColor: "#28a745",
              color: "white",
              border: "none",
              padding: "10px 20px",
              borderRadius: "5px",
              cursor: "pointer",
              marginTop: "20px",
            }}
          >
            Place an Order
          </button>
        </>
      )}
    </div>
  );
}

export default Cart;
