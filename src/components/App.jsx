import { useEffect, useState } from "react";
import PlantList from "./PlantList";
import NewPlantForm from "./NewPlantForm";
import Search from "./Search";

function App() {
  const [plants, setPlants] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    async function loadPlants() {
      try {
        const res = await fetch("http://localhost:6001/plants");
        if (!res.ok) throw new Error("Network error");
        const data = await res.json();
        setPlants(data);
      } catch (err) {
        console.error(err);
      }
    }
    loadPlants();
  }, []);

  function handleAddPlant(newPlant) {
    setPlants((prev) => [...prev, newPlant]);
  }

  const filteredPlants = plants.filter((p) =>
    p.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <main style={{ fontFamily: "system-ui, Arial, sans-serif", padding: 16 }}>
      <h1>Plant Shop</h1>

      {/* search input */}
      <Search searchText={searchText} onSearchChange={setSearchText} />

      {/* add new plant */}
      <NewPlantForm onAddPlant={handleAddPlant} />

      {/* list of plants */}
      <PlantList plants={filteredPlants} />
    </main>
  );
}

export default App;