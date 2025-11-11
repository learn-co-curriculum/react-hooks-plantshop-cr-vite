import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants, searchTerm }) {
  // Filter plants based on the search term
  const filteredPlants = plants.filter((plant) =>
    plant.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Optional: Show a message if no plants match the search
  if (filteredPlants.length === 0) {
    return <p>No plants match your search.</p>;
  }

  return (
    <ul className="cards">
      {filteredPlants.map((plant) => (
        <PlantCard key={plant.id} plant={plant} />
      ))}
    </ul>
  );
}

export default PlantList;
