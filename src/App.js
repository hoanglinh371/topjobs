import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './components/shared/Header';
import Auth from './components/auth/Auth';
import Admin from './components/admin/Admin';
import Home from './components/home/Home';

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/home/*' element={<Home />} />
        <Route path='/admin' element={<Admin />} />
        <Route path='/auth/*' element={<Auth />} />
      </Routes>
    </div>
  );
};

export default App;
