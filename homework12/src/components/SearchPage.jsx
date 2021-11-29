import { useEffect, useState } from "react";
import SingleJob from "./SingleJob";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getJobsAction } from "../actions";
import { getSearchAction } from "../actions";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

// const mapStateToProps = (state) => ({
//   favouritesLength: state.favourites.fav.length,
//   jobResults: state.jobs.content,
//   searchContent: state.search.content,
// });

// const mapDispatchToProps = (dispatch) => ({
//   getJobs: (search) => {
//     dispatch(getJobsAction(search));
//   },
// getSearch: function (searchContent) {
//   dispatch(getSearchAction(searchContent));
// },
// });

const SearchPage = (props) => {
  // const [jobs, setJobs] = useState([]);
  const [search, setSearch] = useState("");

  const dispatch = useDispatch();
  const favouritesLength = useSelector((state) => state.favourites.fav.length);
  const jobResults = useSelector((state) => state.jobs.content);
  const searchContent = useSelector((state) => state.search.content);

  useEffect(async () => {
    dispatch(getJobsAction());
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
        <a href="#">Favourites ({favouritesLength})</a>
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
        {jobResults.map((job) => (
          <SingleJob jobs={job} />
        ))}
      </div>
    </>
  );
};

export default SearchPage;
