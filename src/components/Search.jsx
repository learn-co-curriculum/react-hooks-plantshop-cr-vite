import React from "react";

function Search({ search, setSearch }) {
  function handleSearchChange(e) {
    console.log("Searching...");
    setSearch(e.target.value);
  }
  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        value={search}
        onChange={handleSearchChange}
        />
    
    </div>
  );
}

export default Search;
