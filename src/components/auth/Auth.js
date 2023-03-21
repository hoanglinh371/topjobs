import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Login from './Login';
import Register from './Register';
import ForgotPassword from './ForgotPassword';

const Auth = () => {
  return (
    <div>
      <p>Auth works!</p>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/registration' element={<Register />} />
        <Route path='/forgot-password' element={<ForgotPassword />} />
      </Routes>
    </div>
  );
};

export default Auth;
