import React from 'react';
import { Outlet } from 'react-router-dom';

import Search from '../search/Search';

const Home = () => {
  return (
    <>
      <Search />
      <Outlet />
    </>
  );
};

export default Home;
