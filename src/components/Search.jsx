import React from "react";

// Search receives two props:
//   - searchTerm: the current value of the search input (lives in PlantPage's state)
//   - onSearchChange: a function to call whenever the user types
//
// Search itself owns no state. PlantPage is the single source of truth for the
// search value — Search just displays it and reports changes upward.
// This pattern is called "lifting state up".
function Search({ searchTerm, onSearchChange }) {
  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>

      {/* value={searchTerm}
            Makes this a controlled input — the displayed value always matches
            what PlantPage's state says it should be.

          onChange={(e) => onSearchChange(e.target.value)}
            Every keystroke fires this. e.target.value is the new text in the box.
            We pass it up to PlantPage via onSearchChange, which calls setSearchTerm.
            PlantPage then re-filters the plant list and re-renders everything. */}
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
      />
    </div>
  );
}

export default Search;