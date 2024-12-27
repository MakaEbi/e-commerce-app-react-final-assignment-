import React from "react";
import ProductCard from "./ProductCard";

function ProductList({ cart, setCart, products, loading }) {
  if (loading) {
    return <p>Loading products...</p>; // Show a loading message while fetching
  }

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
