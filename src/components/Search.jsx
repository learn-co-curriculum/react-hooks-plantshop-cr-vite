function Search({searchWord, setSearchWord}) {

  function handleChange(e){
    e.preventDefault();
    // console.log("SEARCH:", e.target.value);
    setSearchWord(e.target.value);
  
  }

  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        value={searchWord}
        onChange={handleChange}
      />
    </div>
  );
}

export default Search;
