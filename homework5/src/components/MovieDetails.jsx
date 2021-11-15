import { Component } from "react";
import { Card } from "react-bootstrap";

class MovieDetails extends Component {
  state = {
    movieDetails: [],
  };

  fetchMovieData = async () => {
    try {
      let response = await fetch(
        "http://www.omdbapi.com/?apikey=24ad60e9&s=" + this.props.movieTitle
      );
      if (response.ok) {
        let data = await response.json();
        this.setState({
          movieDetails: data.Search,
        });
      } else {
        console.log("error in fetching movie");
      }
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount = async () => {
    this.fetchMovieData();
  };

  componentDidUpdate = (previousProps, previousState) => {
    if (previousProps.movieTitle !== this.props.movieTitle) {
      this.fetchMovieData();
    }
  };

  render() {
    return (
      <div className="movies">
        {this.state.movieDetails.map((res) => (
          <Card className="movie">
            <Card.Img src={res.Poster} />
            <Card.Body className="text-dark">
              <Card.Title>{res.Title}</Card.Title>
              <Card.Text>{res.Year}</Card.Text>
            </Card.Body>
          </Card>
        ))}
      </div>
    );
  }
}

export default MovieDetails;
