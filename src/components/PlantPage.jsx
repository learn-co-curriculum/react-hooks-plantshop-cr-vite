import React, { useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search"

function PlantPage({ plants = [], onAddPlant }) {
  const [search, setSearch] = useState("");

  const filteredPlants = plants.filter((p) => {
    const matchesSearch =
      p.name.toLowerCase().includes(search.toLowerCase())
    return matchesSearch;
  });

  return (
    <main>
      <NewPlantForm onAddPlant={onAddPlant} />
      <Search />
      <PlantList plants={filteredPlants} />
    </main>
  );
}

export default PlantPage;
