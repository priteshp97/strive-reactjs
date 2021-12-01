import { useEffect, useState } from "react";
import Songs from "../interfaces/songs";
import search from "../interfaces/search";
import SingleSong from "./SingleSong";

const SearchPage = () => {
  const [search, setSearch] = useState("");
  const [music, setMusic] = useState<Songs[]>([]);

  const fetchMusic = async () => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/deezer/search?q=" + search
      );
      if (response.ok) {
        let data = await response.json();
        console.log(data.data);
        setMusic(data.data);
      } else {
        console.log("error occured with fetch");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchMusic();
  }, [search]);

  return (
    <>
      <form id="form">
        <input
          type="text"
          placeholder="Search..."
          name="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      <div className="container">
        {music.map((song) => (
          <SingleSong songs={song} />
        ))}
      </div>
    </>
  );
};

export default SearchPage;
