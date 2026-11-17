import React, { useEffect, useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

const API_URL = "http://localhost:6001/plants";

function PlantPage() {
  const [plants, setPlants] = useState([]);
  const [search, setSearch] = useState("");

  // GET: Fetch plants when the page loads
  useEffect(() => {
    fetch(API_URL)
      .then(response => {
        if (!response.ok) {
          throw new Error("Cannot load plants");
        }
        return response.json();
      })
      .then(data => setPlants(data))
      .catch(error => console.error(error));
  }, []);

  // POST: Add a new plant
  function addPlant(newPlant) {
    fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newPlant)
    })
      .then(response => {
        if (!response.ok) {
          throw new Error("Could not add plant");
        }
        return response.json();
      })
      .then(data => {
        setPlants(previousPlants => [...previousPlants, data]);
      })
      .catch(error => console.error(error));
  }

  // PATCH: Mark a plant as sold out
  function markSoldOut(id) {
    fetch(`${API_URL}/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ soldOut: true })
    })
      .then(response => {
        if (!response.ok) {
          throw new Error("Could not update plant");
        }
        return response.json();
      })
      .then(updatedPlant => {
        setPlants(previousPlants =>
          previousPlants.map(plant =>
            plant.id === id ? updatedPlant : plant
          )
        );
      })
      .catch(error => console.error(error));
  }

  // Search: Filter plants by name
  const filteredPlants = plants.filter(plant =>
    plant.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main>
      <NewPlantForm onAddPlant={addPlant} />

      <Search
        search={search}
        setSearch={setSearch}
      />

      <PlantList
        plants={filteredPlants}
        onMarkSoldOut={markSoldOut}
      />
    </main>
  );
}

export default PlantPage;