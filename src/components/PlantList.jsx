import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plants, updatePlant}) {
  return (
    <ul className="cards">
    {plants.map((plant) => (
      <PlantCard
       key={plant.id} 
      plant={plant}
      updatePlant={updatePlant} />
    ))}
    
    </ul>
  );
}

export default PlantList;
