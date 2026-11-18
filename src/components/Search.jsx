import React, { useState } from "react";

function Search() {
  const [search, Setsearch]=useState("")
  function handleSearch(){
    Setsearch(e.target.value)
    onSearch(e.target.value)
  }
  return (

    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        onChange={handleSearch}
      />
    </div>
  );
}

export default Search;
