 import React from "react";
import { useState } from "react";

function Search({ searchTerm, setSearchTerm }) {
  //SetSearchTerm EXPECTS A STRING || INPUT FROM USER  
  
  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        value={searchTerm}
        placeholder="Type a name to search..."
        onChange={(e) => {
          setSearchTerm(e.target.value)
          console.log("Searching...")
        }}
      />
    </div>
  );
}

export default Search;
