// Controlled search box. The text lives in PlantPage so it can filter the list.
function Search({ search, onSearchChange }) {
  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        value={search}
        onChange={(event) => onSearchChange(event.target.value)}
      />
    </div>
  );
}

export default Search;