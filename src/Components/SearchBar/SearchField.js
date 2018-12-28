import React from "react";
import "./_SearchBar.scss";

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
