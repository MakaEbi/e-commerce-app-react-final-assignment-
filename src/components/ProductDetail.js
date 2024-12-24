import React from "react";
import { useParams } from "react-router-dom";

function ProductDetail({ cart, setCart }) {
  const { id } = useParams();
  const [product, setProduct] = React.useState(null);

  React.useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((response) => response.json())
      .then((data) => setProduct(data))
      .catch((error) =>
        console.error("Error fetching product details:", error)
      );
  }, [id]);

  const addToCart = () => {
    const newItem = {
      id: product.id,
      name: product.title,
      price: `$${product.price}`,
      image: product.image,
    };
    setCart([...cart, newItem]); // Add product to the cart
  };

  if (!product) {
    return <p>Loading product details...</p>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2>{product.title}</h2>
      <img
        src={product.image}
        alt={product.title}
        style={{ maxWidth: "300px", display: "block", marginBottom: "20px" }}
      />
      <p>{product.description}</p>
      <p>
        <strong>Price:</strong> ${product.price}
      </p>
      <button
        onClick={addToCart}
        style={{
          backgroundColor: "#007bff",
          color: "white",
          border: "none",
          padding: "10px 20px",
          borderRadius: "5px",
          cursor: "pointer",
          marginRight: "10px",
        }}
      >
        Add to Cart
      </button>
    </div>
  );
}

export default ProductDetail;
