import React from "react";

function Search({ searchTerm, onSearchChange }) {
  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        value={searchTerm}
        // Fire the function passed from parent on every keystroke
        onChange={(e) => onSearchChange(e.target.value)}
      />
    </div>
  );
}

export default Search;