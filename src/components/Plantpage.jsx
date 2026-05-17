import React, { useState, useEffect } from "react";
// Assuming components like PlantForm, PlantList are already imported
// import PlantList from "./PlantList";
// import PlantForm from "./PlantForm";
// import Search from "./Search";

function PlantPage() {
  // 1. STATE ARCHITECTURE
  const [plants, setPlants] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  // FEATURE 1: Data fetching using useEffect on page load
  useEffect(() => {
    fetch("http://localhost:6001/plants") // Assuming backend runs on port 6001
      .then((response) => response.json())
      .then((data) => {
        // Add an 'inStock' property to each plant dynamically since out-of-stock is non-persisting
        const initializedPlants = data.map(plant => ({ ...plant, inStock: true }));
        setPlants(initializedPlants);
      })
      .catch((error) => console.error("Error fetching plants:", error));
  }, []); // Empty dependency array ensures this runs only once when the component mounts

  // FEATURE 1 (Continued): Handle onSubmit event for adding a new plant
  const handleAddPlant = (newPlantData) => {
    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPlantData),
    })
      .then((response) => response.json())
      .then((savedPlant) => {
        // Initialize the new plant as in-stock and update local state immediately
        setPlants([...plants, { ...savedPlant, inStock: true }]);
      })
      .catch((error) => console.error("Error adding plant:", error));
  };

  // FEATURE 2: Mark a plant as out of stock (Non-persisting local state modification)
  const handleToggleStock = (id) => {
    // We map through the existing plants array and flip the 'inStock' flag for the matching ID
    const updatedPlants = plants.map((plant) => {
      if (plant.id === id) {
        return { ...plant, inStock: !plant.inStock };
      }
      return plant;
    });
    setPlants(updatedPlants); // This updates the UI without making a PATCH/PUT fetch request to the database
  };

  // FEATURE 3: Implement search functionality to filter plants
  const displayedPlants = plants.filter((plant) => {
    return plant.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <main>
      {/* Form receives the onSubmit handler to add new data */}
      <PlantForm onSubmit={handleAddPlant} />
      
      {/* Search component updates the state string on input change */}
      <Search searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      
      {/* List receives the filtered array and the non-persisting stock toggle function */}
      <PlantList 
        plants={displayedPlants} 
        onToggleStock={handleToggleStock} 
      />
    </main>
  );
}

export default PlantPage;