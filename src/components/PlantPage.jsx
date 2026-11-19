
import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  // Store all plants
  const [plants, setPlants] = useState([]);

  // Store search input
  const [searchTerm, setSearchTerm] = useState("");

  // Store plants marked as sold out
  const [soldOutPlants, setSoldOutPlants] = useState([]);

  // Fetch plants when the page loads
  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((response) => response.json())
      .then((data) => setPlants(data))
      .catch((error) =>
        console.error("Error fetching plants:", error)
      );
  }, []);

  // Add a new plant
  const addPlant = (newPlant) => {
    setPlants((previousPlants) => [...previousPlants, newPlant]);
  };

  // Mark a plant as sold out
  const markSoldOut = (plantId) => {
    setSoldOutPlants((previousPlants) => [
      ...previousPlants,
      plantId,
    ]);
  };

  // Filter plants by name
  const filteredPlants = plants.filter((plant) =>
    plant.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <main>
      <NewPlantForm addPlant={addPlant} />

      <Search
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />

      <PlantList
        plants={filteredPlants}
        markSoldOut={markSoldOut}
        soldOutPlants={soldOutPlants}
      />
    </main>
  );
}

export default PlantPage;
