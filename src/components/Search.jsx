function Search({ searchQuery, setSearchQuery }) {
  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>

      <input
        id="search"
        type="text"
        placeholder="Type a name to search..."
        value={searchQuery}
        onChange={(event) => setSearchQuery(event.target.value)}
      />
    </div>
  )
}

export default Search