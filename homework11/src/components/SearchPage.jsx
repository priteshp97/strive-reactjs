import { useEffect, useState } from "react";
import SingleJob from "./SingleJob";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getJobsAction } from "../actions";
import { getSearchAction } from "../actions";

const mapStateToProps = (state) => ({
  favouritesLength: state.favourites.fav.length,
  jobResults: state.jobs.content,
  searchContent: state.search.content,
});

const mapDispatchToProps = (dispatch) => ({
  getJobs: () => {
    dispatch(getJobsAction());
  },
  getSearch: function (searchContent) {
    dispatch(getSearchAction(searchContent));
  },
});

const SearchPage = (props) => {
  // const [jobs, setJobs] = useState([]);
  // const [search, setSearch] = useState("");

  useEffect(async () => {
    props.getJobs();
  }, []);

  // const fetchJobs = async () => {
  //   try {
  //     let response = await fetch(
  //       "https://strive-jobs-api.herokuapp.com/jobs?search=" +
  //         search +
  //         "&limit=10"
  //     );
  //     if (response.ok) {
  //       let data = await response.json();
  //       setJobs(data.data);
  //     } else {
  //       console.log("error occured");
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

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
          value={props.searchContent}
          onChange={(e) => props.getSearch(e.target.value)}
        />

        <button type="submit">Search</button>
      </form>
      <div className="container">
        {props.jobResults.map((job) => (
          <SingleJob jobs={job} />
        ))}
      </div>
    </>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);
