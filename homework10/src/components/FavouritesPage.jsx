import { connect } from "react-redux";
import { removeFromFavouritesAction } from "../actions";
import { Link } from "react-router-dom";

const mapStateToProps = (state) => ({
  favourites: state.favourites.fav,
});

const mapDispatchToProps = (dispatch) => ({
  removeFromFavourites: (indexToRemove) => {
    dispatch(removeFromFavouritesAction(indexToRemove));
  },
});

const Favourites = (props) => {
  return (
    <>
      <div>
        <Link to={"/"}>
          <a href="#">Home</a>
        </Link>

        <div className="container">
          {console.log(props.favourites)}
          {props.favourites.map((job, i) => (
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
                <button onClick={() => props.removeFromFavourites(i)}>
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

export default connect(mapStateToProps, mapDispatchToProps)(Favourites);
