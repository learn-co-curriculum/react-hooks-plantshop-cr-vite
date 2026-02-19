import React, { useState, useEffect } from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";

function App() {
  const [plants, setPlants] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch plants");
        return res.json();
      })
      .then((data) => setPlants(data))
      .catch((err) => console.error(err));
  }, []);

  function addPlant(newPlant) {
    setPlants((prevPlants) => [...prevPlants, newPlant]);
  }

  function handleToggleSoldOut(id) {
    setPlants((prevPlants) =>
      prevPlants.map((plant) =>
        plant.id === id
          ? { ...plant, isSoldOut: !plant.isSoldOut }
          : plant
      )
    );
  }

  const filteredPlants = plants.filter((plant) =>
    plant.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="app">
      <Header />
      <PlantPage
        plants={filteredPlants}
        onAddPlant={addPlant}
        onSearchChange={setSearchTerm}
        onToggleSoldOut={handleToggleSoldOut}
      />
    </div>
  );
}

export default App;
