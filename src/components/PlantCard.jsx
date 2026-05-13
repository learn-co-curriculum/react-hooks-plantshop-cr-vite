import React from "react";
import { useState } from "react";

function PlantCard({plant}) {
  const [soldOut, setSoldOut] =useState(false);
    function handleSoldOut(){
      setSoldOut(!soldOut);
    }

  return (
    <li className="card" data-testid="plant-item">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>
      {soldOut ? (
        <button className="primary" onClick={handleSoldOut}>Out of Stock</button>
      ) : (
        <button className="secondary" onClick={handleSoldOut}>In Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
