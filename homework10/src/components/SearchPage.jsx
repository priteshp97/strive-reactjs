import { useEffect, useState } from "react";
import SingleJob from "./SingleJob";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const mapStateToProps = (state) => ({
  favouritesLength: state.favourites.fav.length,
});

const SearchPage = (props) => {
  const [jobs, setJobs] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchJobs();
  }, [search]);

  const fetchJobs = async () => {
    try {
      let response = await fetch(
        "https://strive-jobs-api.herokuapp.com/jobs?search=" +
          search +
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
      <Link to={"/favourites/"}>
        <a href="#">Favourites ({props.favouritesLength})</a>
      </Link>
      <form id="form">
        <input
          type="text"
          placeholder="Search..."
          name="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <button type="submit">Search</button>
      </form>
      <div className="container">
        {jobs.map((job) => (
          <SingleJob jobs={job} />
        ))}
      </div>
    </>
  );
};

export default connect(mapStateToProps)(SearchPage);
