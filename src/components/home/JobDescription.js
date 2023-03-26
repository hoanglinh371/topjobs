import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
// import Button from "../shared/Button";
// import JobInfos from "../shared/JobInfos";
import "./JobDescription.css";
import Company from "./Company";

import "../shared/Footer.css";
import JobContent from "./JobContent";
import Footer from "../shared/Footer";

const JobDescription = () => {
  const { id } = useParams();
  const [job, setJob] = React.useState();

  React.useEffect(() => {
    const fetchData = async () => {
      const url = `https://topjob-api.onrender.com/api/v1/jobs/${id}`;
      const data = await axios.get(url);
      setJob(data.data.metadata.job);
    };
    fetchData();
  }, [id]);

  return (
    <>
      {job && (
        <div>
          <div className="flex flex-column items-center justify-center">
            <Company {...job} />
          </div>
          <div className="flex flex-column items-center justify-center">
            <JobContent {...job} />
          </div>
          <Footer {...job} />
        </div>
      )}
    </>
  );
};

export default JobDescription;
