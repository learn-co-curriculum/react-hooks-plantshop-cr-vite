import React, { useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage({ plants, onAddNewPlant }) {

  const [search, setSearch] = useState("");
  
  function handleSearchChange(e) {
      setSearch(e.target.value);
  }

  const displayedPlants = plants.filter((plant) =>
    plant.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main>
      <NewPlantForm onAddNewPlant={onAddNewPlant} />
      <Search search={search} onSearchChange={handleSearchChange} />
      <PlantList plants={displayedPlants} />
    </main>
  );
}

export default PlantPage;
