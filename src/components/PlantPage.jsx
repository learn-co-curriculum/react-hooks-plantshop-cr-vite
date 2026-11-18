import React, { useEffect, useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  // GET all plants when the page first loads
  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((r) => {
        if (r.ok) {
          return r.json();
        } else {
          console.log("fetch request failed");
        }
      })
      .then((plantsData) => setPlants(plantsData))
      .catch((error) => console.log(error));
  }, []);

  // Add the newly created plant to state (pessimistic rendering)
  function handleAddPlant(newPlant) {
    setPlants([...plants, newPlant]);
  }

  // Only show plants whose name includes the search term
  const plantsToDisplay = plants.filter((plant) =>
    plant.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <main>
      <NewPlantForm onAddPlant={handleAddPlant} />
      <Search searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      <PlantList plants={plantsToDisplay} />
    </main>
  );
}

export default PlantPage;
