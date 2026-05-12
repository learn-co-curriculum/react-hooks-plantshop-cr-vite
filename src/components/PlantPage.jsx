import React from "react";
import { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  // All plants fetched from the backend
  const [plants, setPlants] = useState([]);
  // Current search query string
  const [searchQuery, setSearchQuery] = useState("");

  // Fetch all plants once on mount
  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((res) => res.json())
      .then((data) => setPlants(data));
  }, []); // empty array = runs once on page load

  // Add a new plant to state after POSTing to backend
  function handleAddPlant(newPlant) {
    setPlants((prev) => [...prev, newPlant]);
  }

  // Filter plants whose name includes the search query (case-insensitive)
  const displayedPlants = plants.filter((plant) =>
    plant.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <main>
      <NewPlantForm onAddPlant={handleAddPlant} />
      <Search searchQuery={searchQuery} onSearch={setSearchQuery} />
      <PlantList plants={displayedPlants} />
    </main>
  );
}

export default PlantPage;