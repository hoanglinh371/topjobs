import React from "react";
import { Outlet } from "react-router-dom";

import List from "./List";
// import JobDescription from "./JobDescription";

import Search from "../search/Search";

const Home = () => {
  return (
    <>
      <Search />
      <List />

      {/* <Routes>
        <Route path="/" element={<List />} />
        <Route path="/:id" element={<JobDescription />} />
      </Routes> */}
      <Outlet />
    </>
  );
};

export default Home;
