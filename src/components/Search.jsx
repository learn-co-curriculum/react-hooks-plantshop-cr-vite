import React from "react";

function Search( {searchQuery, searchChange} ) {
  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        value={searchQuery}
        onChange={(e) =>searchChange(e.target.value)}
      />
    </div>
  );
}

export default Search;
