import React from "react";
import { useState } from "react";

function PlantCard({ plant }) {
  // Track stock status locally — starts as in stock
  const [inStock, setInStock] = useState(true);

  function handleStockToggle() {
    setInStock((prev) => !prev);
  }

  return (
    <li className="card" data-testid="plant-item">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>

      {/* Conditionally render button style based on stock status */}
      {inStock ? (
        <button className="primary" onClick={handleStockToggle}>
          In Stock
        </button>
      ) : (
        <button onClick={handleStockToggle}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;