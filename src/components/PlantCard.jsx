
import React from "react";
import { useState } from "react";

// PlantCard component displays individual plant details and manages stock status
function PlantCard({onSearch, plant, ...props}) {
  // State to track if the plant is in stock
  const [inStock, setInStock] = useState(true)

  // Toggle stock status of the plant
  function updateStock() {
    if(inStock === true) {
      return setInStock(false)
    }
    return setInStock(true)
  };

  // Render the plant card with image, name, price, and stock button
  return (
    <li className="card" data-testid="plant-item">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>
      {inStock ? (
        <button className="primary" onClick={updateStock}>In Stock</button>
      ) : (
        <button onClick={updateStock}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
