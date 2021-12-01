import Songs from "../interfaces/songs";
import { Link } from "react-router-dom";
import { isJSDocPublicTag } from "typescript";

interface SongsProps {
  songs: Songs;
  key?: Songs;
}

const SingleSong = (props: SongsProps) => {
  return (
    <div>
      <img src={props.songs.album.cover_big} alt="" />
      <Link to={"/details/" + props.songs.id}>
        <button>Details</button>
      </Link>
    </div>
  );
};

export default SingleSong;
