import React from "react";

function Search({ searchTerm, setSearchTerm }) {
  return (
    <input
      placeholder="Type a name to search..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
    />
  );
}

export default Search;