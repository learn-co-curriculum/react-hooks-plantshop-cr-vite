import React from "react";

function PlantCard({ plant }) {
  const { image, name, price, status } = plant;

  return (
    <li className="card" data-testid="plant-item">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      <p>Status: {status}</p>
    </li>
  );
}

export default PlantCard;
