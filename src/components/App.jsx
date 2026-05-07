import { useEffect, useState } from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";

function App() {
  const [plants, setPlants] = useState([]);
  const [search, setSearch] = useState("");

  // Fetch plants on page load
  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((response) => response.json())
      .then((data) => setPlants(data));
  }, []);

  // Add new plant
  function handleAddPlant(newPlant) {
    setPlants([...plants, newPlant]);
  }

  // Filter plants
  const filteredPlants = plants.filter((plant) =>
    plant.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="App">
      <Header />
      <PlantPage
        plants={filteredPlants}
        onAddPlant={handleAddPlant}
        search={search}
        setSearch={setSearch}
      />
    </div>
  );
}

export default App;