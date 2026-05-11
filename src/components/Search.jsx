import React from "react";

function Search({ search, setSearch }) {
  return (
    <input
      type="text"
      placeholder="Type a name to search..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  );
}

export default Search;