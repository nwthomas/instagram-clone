import React from "react";
import "./SearchBar.css";

const SearchField = props => {
  return (
    <input
      className="search-field"
      type="text"
      name="searchText"
      placeholder="Search"
    />
  );
};

export default SearchField;
