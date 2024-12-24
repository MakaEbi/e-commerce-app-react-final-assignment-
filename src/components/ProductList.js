import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";

function ProductList({ cart, setCart }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "20px",
        padding: "20px",
      }}
    >
      {products.map((product) => (
        <ProductCard
          key={product.id}
          id={product.id}
          name={product.title}
          price={`$${product.price}`}
          image={product.image}
          cart={cart}
          setCart={setCart}
        />
      ))}
    </div>
  );
}

export default ProductList;
