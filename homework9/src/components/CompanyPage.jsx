import { useEffect, useState, setState } from "react";
import { useParams } from "react-router-dom";

const CompanyPage = () => {
  const params = useParams();
  console.log(params);

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
        console.log(jobs);
      } else {
        console.log("error occured");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
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
  );
};

export default CompanyPage;
