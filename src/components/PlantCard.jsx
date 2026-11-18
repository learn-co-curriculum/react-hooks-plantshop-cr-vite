import React, { useState } from "react";

function PlantCard({ plant }) {
  const { name, image, price } = plant;
  const [inStock, setInStock] = useState(true);

  function handleStockClick() {
    setInStock(false);
  }

  return (
    <li className="card" data-testid="plant-item">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {inStock ? (
        <button className="primary" onClick={handleStockClick}>
          In Stock
        </button>
      ) : (
        <button>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
