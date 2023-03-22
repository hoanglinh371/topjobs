import React from "react";
import "./Footer.css";
import Button from "./Button";

const Footer = (props) => {
  const { position, company, apply } = props;
  return (
    <section className="jobBottomBanner">
      <div className="jobDescription">
        <h3>{position}</h3>
        <p>{company}</p>
      </div>
      <a href={apply} target="_blank" rel="noreferrer">
        <Button primary>Apply now</Button>
      </a>
    </section>
  );
};

export default Footer;
