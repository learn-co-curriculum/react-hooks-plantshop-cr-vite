import React from "react";

function PlantCard() {
  const { image, name, price } = plant;

  return (
    <li className="card" data-testid="plant-item">
      <img src={image} alt={"name"} />
      <h4>{"name"}</h4>
      <p>Price: {"price"}</p>
      {true ? (
        <button className="primary">In Stock</button>
      ) : (
        <button>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
