import { useEffect, useState, setState } from "react";
import { useParams } from "react-router-dom";

const MovieDetails = (props) => {
  const [mov, setMov] = useState(undefined);

  const params = useParams();
  console.log(params);

  useEffect(() => {
    movies();
  }, []);

  const movies = async () => {
    try {
      let response = await fetch(
        "https://www.omdbapi.com/?apikey=b2d7b7f8&i=" + params.movieId
      );
      if (response.ok) {
        let data = await response.json();
        console.log(data);
        setMov(data);
        console.log(mov);
      } else {
        console.log("error");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section>
      {mov ? (
        <>
          <img src={mov.Poster} alt="" />
          <p>{mov.Title + " | " + mov.Year}</p>
        </>
      ) : (
        <h1>error</h1>
      )}
    </section>
  );
};

export default MovieDetails;
