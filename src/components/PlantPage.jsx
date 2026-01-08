import React from "react";
import { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

// PlantPage component manages the overall plant page including fetching plants, searching, and adding new plants
function PlantPage() {
  const [plants, setPlants] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch plants data from the server when the component mounts
  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((r) => {
        if (!r.ok) { throw new Error("Failed to fetch plans")}
        return r.json()
      })
      .then(plants => {
        setPlants(plants)
        setLoading(false)})
      .catch(err => {
        setError(err.message)
        setLoading(false)
      });
  }, []); // dependency array is empty to run only once on mount

  // Handle adding a new plant to the list
  function handleNewPlant(newPlant) {
    setPlants(prevPlants => [...prevPlants, newPlant])
  };

  // Handle search term changes
  function handleSearchChange(term) {
    setSearchTerm(term);
  };

  // Filter plants based on the search term
  const plantsToDisplay = plants.filter(plant => 
    plant.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Render the PlantPage with NewPlantForm, Search, and PlantList components
  return (
    <main>
      <NewPlantForm onAddPlant={handleNewPlant}/>
      <Search onSearch={handleSearchChange} term={searchTerm}/>
      <PlantList plants={plantsToDisplay} loading={loading} error={error}/>
    </main>
  );
};

export default PlantPage;