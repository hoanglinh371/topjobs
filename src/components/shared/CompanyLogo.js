import "./CompanyLogo.css";

const CompanyLogo = (props) => {
  return (
    <div
      className={`${"companyLogo"} ${
        props.small ? "companyLogoSmall" : "companyLogoBig"
      }`}
      style={{ backgroundColor: props.logoBackground }}
    >
      <img src={props.logo} alt="" />
    </div>
  );
};

export default CompanyLogo;
