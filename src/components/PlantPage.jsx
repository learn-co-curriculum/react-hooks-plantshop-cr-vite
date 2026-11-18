import { useState, useEffect } from 'react';
import NewPlantForm from './NewPlantForm';
import PlantList from './PlantList';
import Search from './Search';
import { API_URL } from '../api';

function PlantPage() {
  // Every plant returned by the backend.
  const [plants, setPlants] = useState([]);
  // Current text typed into the search box.
  const [search, setSearch] = useState('');

  // Fetch all plants once, when the page first renders.
  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setPlants(data))
      .catch((err) => console.error('Could not load plants:', err));
  }, []);

  // Called by NewPlantForm after the backend has saved the plant,
  // so the new plant already has its server-generated id.
  function handleAddPlant(newPlant) {
    setPlants((prevPlants) => [...prevPlants, newPlant]);
  }

  // Case-insensitive name match. An empty search matches every plant,
  // so deleting the query brings the full list back.
  const visiblePlants = plants.filter((plant) =>
    plant.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main>
      <NewPlantForm onAddPlant={handleAddPlant} />
      <Search search={search} onSearchChange={setSearch} />
      <PlantList plants={visiblePlants} />
    </main>
  );
}

export default PlantPage;