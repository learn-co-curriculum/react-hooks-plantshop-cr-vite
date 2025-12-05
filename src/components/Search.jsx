import React from "react";

function Search({ plants, setPlants, getPlants }) {
  async function handleSearch(query) {
    if(!query) {
      await getPlants();
      return;
    }
    try {await getPlants();
      const filteredPlants = plants.filter((plant) =>
        plant.name.toLowerCase().includes(query.toLowerCase())
      );
      setPlants(filteredPlants);
    } catch (error) {
      console.error("Search failed:", error);
    }
  }

  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        onChange={(e) => handleSearch(e.target.value)}
      />
    </div>
  );
}

export default Search;
