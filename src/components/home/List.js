import React from "react";
import axios from "axios";

import JobCard from "../shared/JobCard";
import "./List.css";

const List = (props) => {
  const [jobs, setJobs] = React.useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      const url = "https://topjob-api.onrender.com/api/v1/jobs";
      const data = await axios.get(url);

      console.log(data.data.metadata.jobs);

      setJobs(data.data.metadata.jobs);
    };
    fetchData();
  }, []);

  return (
    <div className="main-list">
      <section className="jobsGrid">
        {jobs.map((job) => (
          <JobCard key={job._id} {...job}></JobCard>
        ))}
      </section>
    </div>
  );
};

export default List;
