import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import SongDetails from "../interfaces/songDetails";

const SongsDetail = () => {
  const [songDetails, setSongDetails] = useState<SongDetails | undefined>(
    undefined
  );

  const params = useParams();

  const fetchDetails = async () => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/deezer/track/" + params.id
      );
      if (response.ok) {
        let data = await response.json();
        setSongDetails(data.album);
        console.log(songDetails);
      } else {
        console.log("fetch failed");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchDetails();
  }, []);

  return (
    <div>
      <Link to="/">
        <a href="#">Home</a>
      </Link>
      {songDetails && (
        <div className="detail">
          <p>{songDetails.title}</p>
          <img src={songDetails.cover_big} alt="" />
        </div>
      )}
    </div>
  );
};

export default SongsDetail;
