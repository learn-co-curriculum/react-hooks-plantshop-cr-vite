import React from "react";
import { useState } from "react";

function Search({onSearch, term}) {

  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        value={term}
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
}

export default Search;
