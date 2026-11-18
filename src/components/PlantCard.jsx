import React, { useState } from "react";

function PlantCard() {
  const [isSoldOut, setIsSoldOut] = useState(false);

  return (
    <li className="card" data-testid="plant-item">
      <img src={"https://via.placeholder.com/400"} alt={"plant name"} />
      <h4>{"plant name"}</h4>
      <p>Price: {"plant price"}</p>

      {isSoldOut ? (
        <button onClick={() => setIsSoldOut(false)}>
          Out of Stock
        </button>
      ) : (
        <button
          className="primary"
          onClick={() => setIsSoldOut(true)}
        >
          In Stock
        </button>
      )}
    </li>
  );
}

export default PlantCard;