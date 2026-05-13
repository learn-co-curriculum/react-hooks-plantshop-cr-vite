import React from "react";
import {useState} from 'react'

function Search({onSearch}) {
  const [plantName,setPlantName] = useState("")

  function handleChange(e){
    setPlantName(e.target.value);
    onSearch(e.target.value);
  }

  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        value={plantName}
        placeholder="Type a name to search..."
        onChange={handleChange}
      />
    </div>
  );
}

export default Search;
