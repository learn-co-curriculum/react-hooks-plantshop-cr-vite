import React, {useState} from "react";

function PlantCard({plant}) {
  const [inStock, setInstock] = useState(true)

  function handleStockToggle(){
    setInstock((current)=> !current)
  }
  return (
    <li className="card" data-testid="plant-item">

      <img src={plant.image} alt={plant.name} />
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
