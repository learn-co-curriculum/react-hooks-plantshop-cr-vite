import React, { useEffect, useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((res) => res.json())
      .then(setPlants);
  }, []);

  const handleAddPlant = (plant) => {
    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(plant),
    })
      .then((res) => res.json())
      .then((newPlant) => setPlants((prevPlants) => [...prevPlants, newPlant]));
  };

  const handleSearchChange = (value) => {
    setSearchQuery(value);
  };

  const displayedPlants = plants.filter((plant) =>
    plant.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <main>
      <NewPlantForm onAddPlant={handleAddPlant} />
      <Search searchQuery={searchQuery} onSearchChange={handleSearchChange} />
      <PlantList plants={displayedPlants} />
    </main>
  );
}

export default PlantPage;
