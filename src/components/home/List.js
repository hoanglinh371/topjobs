import React from 'react';
import axios from 'axios';

import JobCard from '../shared/JobCard';

const List = () => {
  const [jobs, setJobs] = React.useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      const url = 'https://topjob-api.onrender.com/api/v1/jobs';
      const data = await axios.get(url);

      console.log(data.data.metadata.jobs);

      // setJobs(data.data.metadata.jobs);
    };
    fetchData();
  }, []);

  return (
    <div>
      {jobs.map((job) => (
        <p key={job._id}>{job.company}</p>
      ))}
    </div>
  );
};

export default List;
