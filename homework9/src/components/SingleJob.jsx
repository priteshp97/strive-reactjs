import { Link } from "react-router-dom";

const SingleJob = (props) => {
  return (
    <article className="card">
      <div className="header">
        <p>{props.jobs.title}</p>
      </div>
      <div className="container">
        <Link to={"/company/" + props.jobs.company_name}>
          <p className="company">{props.jobs.company_name}</p>
        </Link>
        <p>{props.jobs.job_type}</p>
        <p>{props.jobs.candidate_required_location}</p>
      </div>
      <a href={props.jobs.url} target="_blank">
        Job Link
      </a>
    </article>
  );
};

export default SingleJob;
