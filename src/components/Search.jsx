function Search({ searchText, onSearchChange }) {
  return (
    <div style={{ margin: "16px 0" }}>
      <label htmlFor="search">Search by name</label>
      {/* placeholder must match tests exactly */}
      <input
        id="search"
        type="text"
        value={searchText}
        onChange={(e) => onSearchChange(e.target.value)}
        placeholder="Type a name to search..."
        style={{ marginLeft: 8 }}
      />
    </div>
  );
}
export default Search;