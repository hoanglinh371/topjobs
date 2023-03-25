import React from 'react';
import style from './Search.module.css';
import Input from '../shared/Input';
import CheckBox from '../shared/CheckBox';
import Button from '../shared/Button';

const Search = () => {
  // const [search, setSearch] = React.useState("");

  return (
    <div className={style.main}>
      <form className={style.searchBarContainer}>
        <div className={style.searchBar}>
          <Input
            id='filterByInfos'
            placeholder='Filter by title, companies, expertise...'
          />
          <Input placeholder='Filter by location...' />
          <CheckBox />
          <Button>Search</Button>
        </div>
      </form>
    </div>
  );
};

export default Search;
