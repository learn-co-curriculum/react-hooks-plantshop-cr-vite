// Import necessary states, effects, components
import { useState, useEffect } from "react";
import React from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  // Set states of plants and search
  const [plants, setPlants] = useState([]);
  const [search, setSearch] = useState("");

  // Create useEffect for initial mounting
  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then(response => response.json())
      .then(data => setPlants(data))
      .catch(error => console.error("Error fetching plants: ", error));
  }, [])

  function handleAddPlant(newPlant) {
    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newPlant)
    })
      .then(response => response.json())
      .then(data => setPlants([...plants, data]))
      .catch(error => console.error("Error adding plant: ", error));
  }

  // Add filtering
  const filteredPlants = plants.filter(plant =>
    plant.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main>
      <NewPlantForm onAddPlant={handleAddPlant} />
      <Search search={search} onSearchChange={setSearch} />
      <PlantList plants={filteredPlants} />
    </main>
  );
}

// Make globally available
export default PlantPage;
