import React from "react";

function Search({ searchTerm, onSearch }) {
  return (
    <div className="searchbar">
      <input
        type="text"
        placeholder="Type a name to search..."
        value={searchTerm}
        onChange={(event) => onSearch(event.target.value)}
      />
    </div>
  );
}

export default Search;