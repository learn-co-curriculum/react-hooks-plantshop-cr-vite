import React, { useState } from "react";


function Search({ onSearch }) {
  const [query, setQuery] = useState("");

  function handleSearchChange(e) {
    const newQuery = e.target.value;
    setQuery(newQuery);
    onSearch(newQuery);
  }

  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        value={query}
        onChange={handleSearchChange}
      />
    </div>
  );
}

export default Search;
