import React from "react";
import "./Search.css";
import Input from "../shared/Input";
import CheckBox from "../shared/CheckBox";
import Button from "../shared/Button";

const Search = () => {
  return (
    <main>
      <form className="searchBarContainer">
        <section className="searchBar">
          <Input
            id="filterByInfos"
            placeholder="Filter by title, companies, expertise..."
          />
          <Input placeholder="Filter by location..." />
          <CheckBox />
          <Button>Search</Button>
        </section>
      </form>
    </main>
  );
};

export default Search;
