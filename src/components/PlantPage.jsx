import React from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";
import Header from "./Header";

function PlantPage({
  plants,
  addPlant,
  search,
  setSearch,
  onSoldOut,
}) {
  return (
    <main>
      <Header />

      <Search search={search} setSearch={setSearch} />

      <NewPlantForm addPlant={addPlant} />

      <PlantList plants={plants} onSoldOut={onSoldOut} />
    </main>
  );
}

export default PlantPage;