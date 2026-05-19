import React, { useState } from "react";

// PlantCard receives a single `plant` object as a prop.
// inStock is LOCAL state — toggling it does NOT persist to the backend.
function PlantCard({ plant }) {
  const { name, image, price } = plant;

  // Start every card as in-stock by default
  const [inStock, setInStock] = useState(true);

  // Toggle between in-stock and out-of-stock on each click
  function handleStockToggle() {
    setInStock((prev) => !prev);
  }

  return (
    <li className="card" data-testid="plant-item">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>

      {/* Conditional rendering: button style and label change with inStock */}
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
