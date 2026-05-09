import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  // Fetch plants on page load
  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((r) => r.json())
      .then((plantsArray) => setPlants(plantsArray));
  }, []);

  // Callback function to add a newly created plant to state
  function handleAddPlant(newPlant) {
    setPlants([...plants, newPlant]);
  }

  // Filter plants based on the search term (case-insensitive)
  const displayedPlants = plants.filter((plant) => {
    return plant.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <main>
      {/* Pass the callback to the form */}
      <NewPlantForm onAddPlant={handleAddPlant} />
      {/* Pass state and setter to search */}
      <Search searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      {/* Pass the FILTERED array of plants down */}
      <PlantList plants={displayedPlants} />
    </main>
  );
}

export default PlantPage;