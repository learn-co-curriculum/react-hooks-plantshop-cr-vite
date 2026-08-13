import React from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage({ plants, onAddPlant, search, onSearchChange }) {
  return (
    <main>
      <NewPlantForm onAddPlant={onAddPlant} />
      <Search search={search} onSearchChange={onSearchChange} />
      <PlantList plants={plants} />
    </main>
  );
}

export default PlantPage;
