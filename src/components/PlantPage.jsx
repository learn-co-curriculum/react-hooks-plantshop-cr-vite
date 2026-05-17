import React, { useEffect, useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

const PLANTS_URL = "http://localhost:6001/plants";

function PlantPage() {
  const [plants, setPlants] = useState([]);
  const [searchText, setSearchText] = useState("");

  // Fetch all plants on component mount
  useEffect(() => {
    fetch(PLANTS_URL)
      .then((response) => response.json())
      .then((plantData) => setPlants(plantData))
      .catch((error) => console.error("Error fetching plants:", error));
  }, []);

  // Handle adding a new plant via form submission
  function handleAddPlant(newPlant) {
    fetch(PLANTS_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPlant),
    })
      .then((response) => response.json())
      .then((createdPlant) => {
        // Add newly created plant to state
        setPlants((prevPlants) => [...prevPlants, createdPlant]);
      })
      .catch((error) => console.error("Error adding plant:", error));
  }

  // Filter plants based on search input
  const filteredPlants = plants.filter((plant) =>
    plant.name.toLowerCase().includes(searchText.toLowerCase()),
  );

  return (
    <main>
      <NewPlantForm onAddPlant={handleAddPlant} />
      <Search searchValue={searchText} onSearchChange={setSearchText} />
      <PlantList plants={filteredPlants} />
    </main>
  );
}

export default PlantPage;
