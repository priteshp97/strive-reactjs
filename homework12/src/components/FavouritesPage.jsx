import { connect } from "react-redux";
import { removeFromFavouritesAction } from "../actions";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

// const mapStateToProps = (state) => ({
//   favourites: state.favourites.fav,
// });

// const mapDispatchToProps = (dispatch) => ({
//   removeFromFavourites: (indexToRemove) => {
//     dispatch(removeFromFavouritesAction(indexToRemove));
//   },
// });

const Favourites = (props) => {
  const dispatch = useDispatch();

  const favourites = useSelector((state) => state.favourites.fav);

  return (
    <>
      <div>
        <Link to={"/"}>
          <a href="#">Home</a>
        </Link>

        <div className="container">
          {console.log(favourites)}
          {favourites.map((job, i) => (
            <article className="card" key={i}>
              <div className="header">
                <p>{job.title}</p>
              </div>
              <div className="container">
                <Link to={"/company/" + job.company_name}>
                  <p className="company">{job.company_name}</p>
                </Link>
                <p>{job.job_type}</p>
                <p>{job.candidate_required_location}</p>
              </div>
              <a href={job.url} target="_blank">
                Job Link
              </a>
              <Link to={"/favourites/"}>
                <button onClick={() => dispatch(removeFromFavouritesAction(i))}>
                  Remove from favourites
                </button>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </>
  );
};

export default Favourites;
