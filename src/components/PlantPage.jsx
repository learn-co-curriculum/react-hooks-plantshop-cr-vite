import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  // Store all plants fetched from the backend
  const [plants, setPlants] = useState([]);

  // Store the user's search input
  const [searchQuery, setSearchQuery] = useState("");

  // Fetch plants when the component first loads
  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((response) => response.json())
      .then((data) => setPlants(data))
      .catch((error) => console.error("Error fetching plants:", error));
  }, []);

  // Add a new plant to the backend
  const handleAddPlant = (newPlant) => {
    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPlant),
    })
      .then((response) => response.json())
      .then((createdPlant) => {
        setPlants((currentPlants) => [...currentPlants, createdPlant]);
      })
      .catch((error) => console.error("Error adding plant:", error));
  };

  // Mark a plant as sold out
  const handleSoldOut = (plantId) => {
    setPlants((currentPlants) =>
      currentPlants.map((plant) =>
        plant.id === plantId ? { ...plant, soldOut: true } : plant
      )
    );
  };

  // Filter plants according to the search query
  const filteredPlants = plants.filter((plant) =>
    plant.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <main>
      <NewPlantForm onAddPlant={handleAddPlant} />

      <Search
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />

      <PlantList
        plants={filteredPlants}
        onSoldOut={handleSoldOut}
      />
    </main>
  );
}

export default PlantPage;