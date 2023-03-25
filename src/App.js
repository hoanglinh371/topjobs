import React from 'react';
import { RouterProvider } from 'react-router-dom';
import AppRouter from './app.routing';

import Header from './components/shared/Header';

const App = () => {
  return (
    <div>
      <RouterProvider router={AppRouter}></RouterProvider>
    </div>
  );
};

export default App;
