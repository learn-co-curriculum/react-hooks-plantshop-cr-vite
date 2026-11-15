import { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([]);
  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((r) => r.json())
      .then((plants) => setPlants(plants));
  }, []);

  return (
    <main>
      <NewPlantForm onAddPlant={(newPlant) => setPlants([...plants, newPlant])} />
      <Search />
      <PlantList plants={plants} />
    </main>
  );
}
function addNewPlant(newPlant) {
  fetch("http://localhost:6001/plants", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newPlant),
  })
    .then((r) => r.json())
    .then((addedPlant) => {
      setPlants([...plants, addedPlant]);
    });
}
export default PlantPage;


