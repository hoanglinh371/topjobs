import React from "react";
import { Link } from "react-router-dom";
import CompanyLogo from "./CompanyLogo";
import JobInfos from "./JobInfos";
import "./JobCard.css";

const JobCard = (props) => {
  const {
    contract,
    createdAt,
    logo,
    logoBackground,
    id,
    position,
    company,
    location,
  } = props;
  return (
    <article className="jobCard">
      <CompanyLogo logo={logo} logoBackground={logoBackground} small />
      <JobInfos createdAt={createdAt} contract={contract} />
      <Link to={`/${id}`}>
        <h3 className="jobCardPosition">{position}</h3>
      </Link>
      <p>{company}</p>
      <h4 className="jobCardLocation">{location}</h4>
    </article>
  );
};

export default JobCard;
