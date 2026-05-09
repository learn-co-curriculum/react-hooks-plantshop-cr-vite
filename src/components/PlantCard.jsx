import React, { useState } from "react";

function PlantCard({ plant }) {
  // Destructure plant data for cleaner code
  const { name, image, price } = plant;
  
  // Local state for stock status (defaults to true)
  const [inStock, setInStock] = useState(true);

  function handleToggleStock() {
    setInStock((currentStock) => !currentStock);
  }

  return (
    <li className="card" data-testid="plant-item">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {inStock ? (
        <button className="primary" onClick={handleToggleStock}>
          In Stock
        </button>
      ) : (
        <button onClick={handleToggleStock}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;