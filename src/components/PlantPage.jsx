import React, { useEffect, useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {

  // stores all plants
  const [plants, setPlants] = useState([]);

  // stores search text
  const [search, setSearch] = useState("");

  // fetch plants when page loads
  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((res) => res.json())
      .then((data) => setPlants(data));
  }, []);

  // add new plant to state
  function handleAddPlant(newPlant) {
    setPlants([...plants, newPlant]);
  }

  // filtered plants
  const filteredPlants = plants.filter((plant) =>
    plant.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main>
      <NewPlantForm onAddPlant={handleAddPlant} />

      <Search search={search} setSearch={setSearch} />

      <PlantList plants={filteredPlants} />
    </main>
  );
}

export default PlantPage;