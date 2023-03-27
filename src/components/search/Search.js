import React from 'react';
import style from './Search.module.css';
import Input from '../shared/Input';
import CheckBox from '../shared/CheckBox';
import Button from '../shared/Button';
import axiosClient from '../../api/axios.client';

const Search = ({ search, setJobs }) => {
  const [position, setPosition] = React.useState('');

  const handleSearch = async () => {
    const data = await axiosClient.get('/jobs', {
      params: {
        position,
      },
    });

    setJobs(data.data.metadata.jobs);
  };

  return (
    <div className={style.main}>
      <form className={style.searchBarContainer}>
        <div className={style.searchBar}>
          <Input
            id='filterByInfos'
            placeholder='Filter by position'
            onChange={(e) => setPosition(e.target.value)}
          />
          {/* <Input
            placeholder='Filter by location...'
            onChange={(e) => setLocation(e.target.value)}
          /> */}
          <CheckBox />
          <Button onClick={handleSearch}>Search</Button>
        </div>
      </form>
    </div>
  );
};

export default Search;
