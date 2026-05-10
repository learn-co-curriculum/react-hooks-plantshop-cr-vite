import React, { useState } from "react";

function PlantCard({ plant }) {

  // State to track if the item is sold out
  const [isSoldOut, setIsSoldOut] = useState(false);

  function handleToggleStock() {
    setIsSoldOut(!isSoldOut);
  } 

  return (
    <li className="card" data-testid="plant-item">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>

      {/* Conditional Rendering for the button */}
      {isSoldOut ? (
        <button onClick={handleToggleStock}>Out of Stock</button>
      ) : (
        <button className="primary" onClick={handleToggleStock}>In Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
