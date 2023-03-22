import React from "react";
import { RouterProvider } from "react-router-dom";
import AppRouter from "./app.routing";

// import Auth from "./components/auth/Auth";
// import Admin from "./components/admin/Admin";
// import Home from "./components/home/Home";

import Header from "./components/shared/Header";

const App = () => {
  return (
    <div>
      <Header />
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/auth/*" element={<Auth />} />
      </Routes> */}

      <RouterProvider router={AppRouter}></RouterProvider>
    </div>
  );
};

export default App;
