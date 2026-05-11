import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants, toggleStock }) {
  return (
    <ul className="cards">
      {plants.map((plant) => (
        <PlantCard
          key={plant.id}
          plant={plant}
          toggleStock={toggleStock}
        />
      ))}
    </ul>
  );
}

export default PlantList;