import React from "react";

function Search({ searchValue, onSearchChange }) {
  // Handle search input changes and filter plants in real-time
  function handleChange(event) {
    onSearchChange(event.target.value);
  }

  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        value={searchValue}
        onChange={handleChange}
      />
    </div>
  );
}

export default Search;
