import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addToFavouritesAction } from "../actions";
import { useDispatch } from "react-redux";

// const mapStateToProps = (state) => ({});

// const mapDispatchToProps = (dispatch) => ({
//   addToFavourites: function (jobToAdd) {
//     dispatch(addToFavouritesAction(jobToAdd));
//   },
// });

const SingleJob = (props) => {
  const dispatch = useDispatch();

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

      <button onClick={() => dispatch(addToFavouritesAction(props.jobs))}>
        Add to favourites
      </button>
    </article>
  );
};

export default SingleJob;
