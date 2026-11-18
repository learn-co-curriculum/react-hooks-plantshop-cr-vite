import React from "react";
import PlantCard from './PlantCard';

// Renders one PlantCard per plant; the id from the backend is the unique key.
function PlantList({ plants }) {
  return (
    <ul className="cards">
      {plants.map((plant) => (
        <PlantCard key={plant.id} plant={plant} />
      ))}
    </ul>
  );
}

export default PlantList;
