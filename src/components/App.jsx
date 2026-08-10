import React, { useState, useEffect } from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";

function App() {

  const [ plants, setPlants ] = useState([]);
  const [ loading, setLoading ] = useState(false);
  const [ error, setError ] = useState(null);

  const API_URL = "http://localhost:6001/plants";

  useEffect(() => {
    handleGetCurrentPlants();
  }, []);

  async function fetchPlantsFromAPI() {
    try {
        const res = await fetch(API_URL);
          
        if (!res.ok) {
          throw new Error(`Fetch failed with status ${res.status}`);
        }

        const data = await res.json();
        return data; 
      } catch (error) {
        console.error("Error fetching plants list:", error);
      }
    }

  async function handleGetCurrentPlants() {
    try {
      setLoading(true);
      const plantsData = await fetchPlantsFromAPI();
      setPlants(plantsData);
    } catch (error) {
      console.error("Error fetching plants list:", error);
    } finally {
      setLoading(false);
    }
  }

  function handleAddNewPlant(newPlant) {
    setError(null);
    addNewPlantToAPI(newPlant);
  }

  function addNewPlantToAPI(newPlant) {
      fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newPlant),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Failed to add plant");
          }
          return response.json();
        })
        .then((data) => {
          handleGetCurrentPlants();
        })
        .catch((err) => setError(err.message));
    }

  return (
    <div className="app">
      <Header />
      <PlantPage plants={plants} onAddNewPlant={handleAddNewPlant} />
    </div>
  );
}

export default App;
