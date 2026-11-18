import React from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

const API_URL = "http://localhost:6001/plants";

function PlantPage() {
  const [plants, setPlants] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  // Side effect: load all plants from the backend once, on first render.
  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setPlants(data))
      .catch((err) => console.error("Could not load plants:", err));
  }, []);

  // Called by the form after the backend has saved the new plant.
  function handleAddPlant(newPlant) {
    setPlants((currentPlants) => [...currentPlants, newPlant]);
  }

  // Search: keep only plants whose name includes the search text.
  // An empty search text matches everything, so all plants show again.
  const visiblePlants = plants.filter((plant) =>
    plant.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <main>
      <NewPlantForm onAddPlant={handleAddPlant} apiUrl={API_URL} />
      <Search searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      <PlantList plants={visiblePlants} />
    </main>
  );
}

export default PlantPage;