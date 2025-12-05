import { useEffect, useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    getPlants();
  }, []);

  async function getPlants() {
    try {
      const response = await fetch("http://localhost:6001/plants");
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setPlants(data);
    } catch (error) {
      console.error("Failed to fetch plants:", error);
    }
  }

  return (
    <main>
      <NewPlantForm setPlants={setPlants} />
      <Search plants={plants} setPlants={setPlants} getPlants={getPlants} />
      <PlantList plants={plants} />
    </main>
  );
}

export default PlantPage;
