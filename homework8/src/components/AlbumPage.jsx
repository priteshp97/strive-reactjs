import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEllipsisH,
  faExchangeAlt,
  faHeart,
  faPlayCircle,
  faRandom,
  faStepBackward,
  faStepForward,
  faWindowMaximize,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { Nav } from "react-bootstrap";

const AlbumPage = () => {
  const [album, setAlbum] = useState([]);
  const [songs, setSongs] = useState([]);

  console.log(album);

  useEffect(() => {
    fetchAlbum();
  }, []);

  const fetchAlbum = async () => {
    try {
      let response = await fetch(
        `https://striveschool-api.herokuapp.com/api/deezer/album/69319552`
      );
      if (response.ok) {
        let data = await response.json();
        setAlbum(data);
        console.log(album);
        let songList = data.tracks.data;
        setSongs(songList);
        console.log(songs);
      } else {
        console.log("error");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {album !== [] ? (
        <>
          <section id="album">
            <div className="wrap">
              <div className="album-container">
                <div className="album-img-container">
                  <img src={album.cover_xl} alt="album cover" className="img" />
                </div>

                <div className="album-content">
                  <h3 className="album">ALBUM</h3>

                  <h1 className="title">{album.title}</h1>

                  <h3 className="detail">
                    <img
                      src="assets/drake.jpg "
                      alt=""
                      className="small-artist-img"
                    />
                    <a href="./artist.html" className="album-link">
                      {album.artist.name}
                    </a>
                    <span className="detail-span">
                      - {album.release_date.substring(0, 4)} - $
                      {album.tracks.data.length} songs, 1 hr 27 min
                    </span>
                  </h3>
                </div>
              </div>

              <div className="song-icons">
                <FontAwesomeIcon
                  icon={faPlayCircle}
                  className="album-icon-play"
                />
                <FontAwesomeIcon icon={faHeart} className="album-icon" />
                <FontAwesomeIcon icon={faEllipsisH} className="album-icon" />
              </div>
            </div>
          </section>
          <section className="song-list">
            <div className="wrap">
              <div className="grid-container">
                {/* <!-- song --> */}
                <div className="song song-first">
                  <div className="left-number">
                    <p className="column">#</p>
                  </div>
                  <div className="left-title">
                    <p className="column">TITLE</p>
                  </div>
                  <div className="right-time">
                    <p className="column">Time</p>
                  </div>
                </div>
                {/* <!-- end of song --> */}
                <hr />
                <div id="song-list"></div>

                {songs.map((song) => (
                  <div className="song">
                    <div className="left-number">
                      <p>1</p>
                    </div>
                    <div className="left-title">
                      <p>
                        {song.title}
                        <br />
                        <span className="title-span">Drake</span>
                      </p>
                    </div>
                    <div className="right-time">
                      <p>{song.duration}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
          {/* // <!-- end of album --> */}

          {/* // <!-- music player --> */}
          <footer className="music-player">
            {/* <!-- start of left side --> */}
            <div className="player-left">
              <div className="album-picture">
                <img src="./assets/album.png" className="album-img" alt="" />
              </div>
              <div className="song-details">
                <p className="song-name">N 2 Deep</p>
                <p className="artist-name">Drake, Future</p>
              </div>
              <div className="player-left-icons">
                <FontAwesomeIcon icon={faHeart} className="player-left-icon" />
                <FontAwesomeIcon
                  icon={faWindowMaximize}
                  className="player-left-icon"
                />
              </div>
            </div>
            {/* <!-- end of left side -->
              <!-- start of middle --> */}
            <div className="player-middle">
              <div className="player-middle-icons">
                <FontAwesomeIcon
                  icon={faRandom}
                  className="player-middle-icon"
                />
                <FontAwesomeIcon
                  icon={faStepBackward}
                  className="player-middle-icon"
                />

                <a id="ASong" onClick="playPause()">
                  <audio
                    src="Drake ft. Future _N 2 Deep_ (Music Video).mp3"
                    autoplay
                    loop
                  ></audio>
                  <FontAwesomeIcon
                    icon={faPlayCircle}
                    className="player-middle-icon-play"
                  />
                </a>
                <FontAwesomeIcon
                  icon={faStepForward}
                  className="player-middle-icon"
                />
                <FontAwesomeIcon
                  icon={faExchangeAlt}
                  className="player-middle-icon"
                />
              </div>
              <div className="player-middle-bar">
                <p className="time-current">1:25</p>
                <div className="fill"></div>
                <p className="time-total">-3:15</p>
              </div>
            </div>
            {/* <!-- end of middle -->
              <!-- start of right --> */}
            <div className="player-right">
              <i className="fas fa-stream player-right-icon"></i>
              <i className="fas fa-laptop-house player-right-icon"></i>

              <i className="fas fa-volume-up player-right-icon"></i>

              <label for="fader"></label>
              <input
                type="range"
                min="0"
                max="100"
                value="50"
                id="fader"
                step="10"
              />
              <output for="fader" id="volume"></output>
            </div>
            {/* <!-- end of right --> */}
          </footer>
        </>
      ) : (
        <p>error</p>
      )}
    </>
  );
};

export default AlbumPage;
