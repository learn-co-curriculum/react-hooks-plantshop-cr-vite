import React from "react";
import {useState, useEffect} from "react";

function PlantCard({plant}) {
  const [isSoldOut, setIsSoldOut] = useState(false);

  function handleToggleSoldOut() {
    setIsSoldOut(true);
  }

  return (
    <div className="card" data-testid="plant-item">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: ${plant.price}</p>
      <button
        onClick={handleToggleSoldOut}
        disabled={isSoldOut}
        style={{ backgroundColor: isSoldOut ? "gray" : "green" }}
      >
        {isSoldOut ? "Out of Stock" : "In Stock"}
      </button>
    </div>
  );
}

export default PlantCard;

