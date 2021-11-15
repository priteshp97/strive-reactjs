import { Component } from "react";
import { Card } from "react-bootstrap";

class MovieDetails extends Component {
  state = {
    movieDetails: null,
  };

  fetchMovieData = async () => {
    try {
      let response = await fetch(
        "http://www.omdbapi.com/?apikey=24ad60e9&s=" + this.props.movieTitle
      );
      if (response.ok) {
        let data = await response.json();
        console.log(data.Search[0]);
        this.setState({
          movieDetails: data.Search[0],
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
      <>
        {this.state.movieDetails ? (
          <Card>
            <Card.Img src={this.state.movieDetails.Poster} />
            <Card.Body className="text-dark">
              <Card.Title>{this.state.movieDetails.Title}</Card.Title>
              <Card.Text>{this.state.movieDetails.Year}</Card.Text>
            </Card.Body>
          </Card>
        ) : (
          <p>Movie loading...</p>
        )}
      </>
    );
  }
}

export default MovieDetails;
