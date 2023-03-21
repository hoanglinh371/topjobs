import React from 'react';
import { Routes, Route } from 'react-router-dom';

import List from './List';
import JobDescription from './JobDescription';

const Home = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<List />} />
        <Route path='/:id' element={<JobDescription />} />
      </Routes>
    </div>
  );
};

export default Home;
