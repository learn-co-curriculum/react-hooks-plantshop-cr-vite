import React from "react";

function Search() {
  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
  type="text"
  placeholder="Search plants..."
  value={search}
  onChange={(e) => setSearch(e.target.value)}
/>
    </div>
  );
}

export default Search;
