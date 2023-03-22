import React from 'react';
import { useParams } from 'react-router-dom';
// import Button from "../shared/Button";
// import JobInfos from "../shared/JobInfos";
import './JobDescription.css';

import '../shared/Footer.css';

const JobDescription = (props) => {
  const params = useParams();

  //GET: job by id....

  return (
    <div>
      <p>{params.id}</p>
    </div>
  );
};

export default JobDescription;
