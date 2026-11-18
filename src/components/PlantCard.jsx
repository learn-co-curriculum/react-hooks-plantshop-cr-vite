import React, { useState } from "react";

function PlantCard({ plant }) {
  const { name, image, price } = plant;

  // Tracks stock status for this card only; resets on page refresh (non-persisting)
  const [inStock, setInStock] = useState(true);

  // Flips between in stock and out of stock
  function handleStockToggle() {
    setInStock((inStock) => !inStock);
  }

  return (
    <li className="card" data-testid="plant-item">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {/* Conditionally render the button based on stock status */}
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