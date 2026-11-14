import React, { useState, useEffect } from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";

function App() {
  // State to hold all plants fetched from the backend
  const [plants, setPlants] = useState([]);
  
  // State to track the current search input value
  const [searchTerm, setSearchTerm] = useState("");

  // Fetch all plants on initial page load
  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((res) => res.json())
      .then((data) => setPlants(data))
      .catch((error) => console.error("Error fetching plants:", error));
  }, []);

  // Callback function to add a newly created plant to the state
  function handleAddPlant(newPlant) {
    setPlants((prevPlants) => [...prevPlants, newPlant]);
  }

  // Filter the plants array based on the search query (case-insensitive)
  const displayedPlants = plants.filter((plant) =>
    plant.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="app">
      <Header />
      <PlantPage
        plants={displayedPlants}
        onAddPlant={handleAddPlant}
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
      />
    </div>
  );
}

export default App;