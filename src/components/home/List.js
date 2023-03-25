import React from "react";
import axios from "axios";

import JobCard from "../shared/JobCard";
import "./List.css";

const List = (props) => {
  const [jobs, setJobs] = React.useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      const url = "https://topjob-api.onrender.com/api/v1/jobs";
      const data = await axios.get(url, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDFkNDc3MjliY2JhY2Y2N2IxOGQwMzYiLCJpYXQiOjE2Nzk2NDA0MzgsImV4cCI6MTY4NzQxNjQzOH0.RjQOxrz1-nTBtq5odHE-bBpIgRIDwsM_5a7e3Z_KEAw",
        },
      });

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
