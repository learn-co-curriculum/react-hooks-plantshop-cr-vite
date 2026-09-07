import {useState} from "react";

function PlantCard({plant}) {
  const [soldOut, setSoldOut] = useState(false);

  function handleClick(e){
    e.preventDefault();
    setSoldOut(true);
  }
  return (
    <li className="card" data-testid="plant-item" key={plant.id}>
      <img src={"https://via.placeholder.com/400"} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>
      {!soldOut ? (
        <button className="primary" onClick={handleClick}>In Stock</button>
      ) : (
        <button>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
