import "./JobInfos.css";

const JobInfos = (props) => {
  const { postedAt, contract } = props;
  return (
    <div className="jobInfos">
      <p>{postedAt}</p>
      <span className="jobInfosDivider"></span>
      <p>{contract}</p>
    </div>
  );
};

export default JobInfos;
