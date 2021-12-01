import Songs from "../interfaces/songs";

interface SongsProps {
  songs: Songs;
}

const SingleSong = (props: SongsProps) => {
  return (
    <div>
      <img src={props.songs.album.cover_big} alt="" />
    </div>
  );
};

export default SingleSong;
