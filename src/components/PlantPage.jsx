import React, { useEffect, useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  // Store plants from backend
  const [plants, setPlants] = useState([]);

  // Store search input
  const [search, setSearch] = useState("");

  // Fetch plants when page loads
  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((res) => res.json())
      .then((data) => setPlants(data));
  }, []);

  // Add new plant to state
  function handleAddPlant(newPlant) {
    setPlants([...plants, newPlant]);
  }

  // Filter plants by search
  const filteredPlants = plants.filter((plant) =>
    plant.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main>
      <NewPlantForm onAddPlant={handleAddPlant} />

      <Search
        search={search}
        onSearchChange={setSearch}
      />

      <PlantList plants={filteredPlants} />
    </main>
  );
}

export default PlantPage;