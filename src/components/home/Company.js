import React from "react";

import CompanyLogo from "../shared/CompanyLogo";
import styles from "./Company.module.css";
import Button from "../shared/Button";

const Company = (props) => {
  return (
    <section className={styles.companyHeader}>
      <CompanyLogo
        logo={props.logo}
        logoBackground={props.logoBackground}
        big
      />
      <div className={styles.companyHeaderInfos}>
        <div>
          <h2>{props.company}</h2>
          <p>{props.website}</p>
        </div>
        <a href={props.website} target="_blank" rel="noreferrer">
          <Button secondary>Company Site</Button>
        </a>
      </div>
    </section>
  );
};

export default Company;
