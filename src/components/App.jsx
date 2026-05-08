import { useEffect, useState } from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";
import NewPlantForm from "./NewPlantForm";
import Search from "./Search";

function App() {
  // State for storing all plants
  const [plants, setPlants] = useState([]);

  // State for search input
  const [search, setSearch] = useState("");

  // Fetch plants when app loads
  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((r) => r.json())
      .then((data) => setPlants(data));
  }, []);

  // Add new plant to state
  function handleAddPlant(newPlant) {
    setPlants([...plants, newPlant]);
  }

  // Filter plants using search input
  const filteredPlants = plants.filter((plant) =>
    plant.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="app">
      <Header />
      
      <Search search={search} onSearchChange={setSearch} />

      <NewPlantForm onAddPlant={handleAddPlant} />

      <PlantPage plants={filteredPlants} />
    </div>
  );
}

export default App;