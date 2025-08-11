import {useState, useEffect} from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";

function App() {
  const [plants, setPlants] = useState([]);
  const [filteredPlants, setFilteredPlants] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/plants")
      .then((response) => response.json())
      .then((data) => {
        setPlants(data);
        setFilteredPlants(data);
      });
  }, []);

function handleAddPlant(newPlantData) {
  // POST new plant to backend
  fetch("http://localhost:4000/plants", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newPlantData),
  })
    .then((response) => {
      if (!response.ok) throw new Error("Failed to add plant");
      return response.json();
    })
    .then((createdPlant) => {
      // Update local state
      setPlants((prevPlants) => [...prevPlants, createdPlant]);
      setFilteredPlants((prevPlants) => [...prevPlants, createdPlant]);
    })
    .catch((error) => {
      console.error("Error adding plant:", error);
    });
}


  function handleSearch(query) {
    const filtered = plants.filter((plant) =>
      plant.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredPlants(filtered);
  }

  return (
    <div className="app">
      <Header />
      <PlantPage 
      plants={plants}
      filteredPlants={filteredPlants}
      onAddPlant={handleAddPlant}
      onSearch={handleSearch}
      />
    </div>
  );
}

export default App;
