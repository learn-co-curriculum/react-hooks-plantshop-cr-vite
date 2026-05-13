import React, { useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage({ plants, setPlants }) {
  const [SearchQuery, setSearchQuery] = useState("");

  const filteredPlants = plants.filter((plant) =>
    plant.name.toLowerCase().includes(SearchQuery.toLowerCase())
  );
  return (
    <main>
      <NewPlantForm plants={plants} setPlants={setPlants} />
      <Search SearchQuery={SearchQuery} setSearchQuery={setSearchQuery} />
      <PlantList plants={filteredPlants} setPlants={setPlants} />
    </main>
  );
}

export default PlantPage;
