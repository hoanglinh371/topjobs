import "./JobInfos.css";
import moment from "moment";

const JobInfos = (props) => {
  const { createdAt, contract } = props;

  console.log(createdAt);

  return (
    <div className="jobInfos">
      <p>{moment(new Date(createdAt)).fromNow()}</p>
      <span className="jobInfosDivider"></span>
      <p>{contract}</p>
    </div>
  );
};

export default JobInfos;
