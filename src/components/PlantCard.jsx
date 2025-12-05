import React from "react";

function PlantCard({ plant }) {
  const [inStock, setInStock] = React.useState(true);

  function handleStockToggle() {
    setInStock((prevInStock) => !prevInStock);
  }
  return (
    <li className="card" data-testid="plant-item">
      <img src={plant.image?plant.image: "https://via.placeholder.com/400"} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>
      {inStock ? (
        <button className="primary" onClick={handleStockToggle}>In Stock</button>
      ) : (
        <button onClick={handleStockToggle}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
