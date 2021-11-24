import { useEffect, useState, setState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const CompanyPage = (props) => {
  const params = useParams();

  const [jobs, setJobs] = useState(undefined);

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      let response = await fetch(
        "https://strive-jobs-api.herokuapp.com/jobs?company=" +
          params.companyname +
          "&limit=10"
      );
      if (response.ok) {
        let data = await response.json();
        setJobs(data.data);
      } else {
        console.log("error occured");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Link to={"/"}>
        <a href="#">Home</a>
      </Link>

      <h1 className="company-title">{params.companyname}</h1>
      <div className="container">
        {jobs?.map((job) => (
          <article className="card">
            <div className="header">
              <p>{job.title}</p>
            </div>
            <div className="container">
              <p className="company">{job.company_name}</p>

              <p>{job.job_type}</p>
              <p>{job.candidate_required_location}</p>
            </div>
            <a href={job.url} target="_blank">
              Job Link
            </a>
          </article>
        ))}
      </div>
    </>
  );
};

export default CompanyPage;
