import React from "react";
import LogoLink from "./LogoLink";
import SearchField from "./SearchField";
import Icons from "./Icons";
import "./_SearchBar.scss";

const SearchBarContainer = props => {
  return (
    <div className="search-bar__container">
      <div className="search-bar__main">
        <LogoLink />
        <SearchField
          searchText={props.searchText}
          searchOnChange={props.searchOnChange}
        />
        <Icons />
      </div>
    </div>
  );
};

export default SearchBarContainer;
