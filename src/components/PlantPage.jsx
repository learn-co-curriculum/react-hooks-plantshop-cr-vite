import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const API_URL = "http://localhost:6001/plants";
  const [plants, setPlants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchPlants();
  }, []);

  const filtered = plants.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  async function fetchPlants() {
    setLoading(true);
    try {
      const r = await fetch("http://localhost:6001/plants");
      if (!r.ok) throw new Error("Network error");
      const data = await r.json();

      setPlants((prev) => (prev.length ? prev : data));
    } catch (err) {
      console.error("Fetch error", err);
    } finally {
      setLoading(false);
    }
  }

  function handleAddPlant(newPlant) {
    setPlants((prev) => [...prev, newPlant]);
  }
  return (
    <main>
      <NewPlantForm onAddPlant={handleAddPlant} />
      <Search value={search} onChange={setSearch} />
      <PlantList plants={filtered} loading={loading} />
    </main>
  );
}

export default PlantPage;
