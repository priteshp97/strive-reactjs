import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const MovieDetails = (props) => {
  //   const [movie, setMovie] = useState(undefined);

  const params = useParams();
  console.log(params);

  useEffect(() => {
    movie();
  }, []);

  const movie = async () => {
    try {
      let response = await fetch(
        "https://www.omdbapi.com/?apikey=b2d7b7f8&i=" + params.movieId
      );
      if (response.ok) {
        let data = await response.json();
        // this.setState({
        //   movies: data.Search,
        //   isLoading: false,
        // });
        console.log(this.state.movies2);
      } else {
        // if we fall here we're getting an error, maybe a 404
        // this.setState({
        //   isLoading: false,
        //   isError: true,
        // });
      }
    } catch (error) {
      //   this.setState({
      //     isLoading: false,
      //     isError: true,
      //   });
    }
  };
};

export default MovieDetails;
