import React from "react";

// Search is a controlled input component. It receives the current `search` value
// and calls `onSearchChange(newValue)` on every edit so the parent can filter.
function Search({ search, onSearchChange }) {
  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        value={search}
        onChange={(e) => onSearchChange(e.target.value)}
      />
    </div>
  );
}

export default Search;
