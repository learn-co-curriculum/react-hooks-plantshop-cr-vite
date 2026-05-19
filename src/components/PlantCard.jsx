import React, { useEffect, useState } from "react";

function PlantCard({ plants }) {
  //SET BUTTON STATE
  const [isInStock, setisInStock] = useState(true)
  
  //CONDITION TO TOGGLE BUTTON
  function handleClick() {
    setisInStock(prevState=>!prevState)
  }
  
  return (
    <div>
    <li className="card" data-testid={"plant-item"} >

      {plants.image ? <img src={plants.image} alt={"plant name"} /> : <img src={"https://via.placeholder.com/400"} alt={"plant name"} />}

      <h4>{plants.name}</h4>
      <p>Price: {plants.price}</p>
      {isInStock ? (
        <button className="primary" onClick={handleClick}>In Stock</button>
      ) : (
          <button onClick={handleClick}
            
          >Out of Stock</button>
      )}
      </li>
    </div>
  );
}

export default PlantCard;
