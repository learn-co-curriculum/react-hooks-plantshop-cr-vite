import React from "react";

// Search is a controlled component — its value is owned by PlantPage.
// `searchQuery` is the current value; `onSearch` updates it in the parent.
function Search({ searchQuery, onSearch }) {
  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        value={searchQuery}
        // Lift the new value up on every keystroke so PlantPage can re-filter
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
}

export default Search;
