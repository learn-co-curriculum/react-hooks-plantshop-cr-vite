
import React from "react";
import PlantCard from "./PlantCard";

// PlantList component displays a list of plants with loading and error handling
function PlantList({plants, loading, error}) {

  // Render the list of plants or loading/error messages
  return (
    <ul className="cards">
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        plants.map((plant) => (
          <PlantCard key={plant.id} plant={plant} />
        ))
      )}
    </ul>
  );
}
;
export default PlantList;
