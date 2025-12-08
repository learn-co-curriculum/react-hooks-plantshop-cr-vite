import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plants, loading, error}) {

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

export default PlantList;
