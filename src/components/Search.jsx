import React from "react";

function Search() {
  const displayedPlants = plants.filter((plant) => plant.name.toLowerCase().includes(searchTerm.toLowerCase()));
  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        onChange={(e) => console.log("Searching...")}
      />
    </div>
  );
}

export default Search;
