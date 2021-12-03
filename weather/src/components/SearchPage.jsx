import { useEffect, useState } from "react";
import weather from "../weather-icons/css/weather-icons.css";

const SearchPage = () => {
  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState(undefined);
  const [icons, setIcons] = useState("");

  const weatherFetch = async () => {
    try {
      let response = await fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=" +
          search +
          "&appid=64442259b4a02c266dd9adb6e6eaa6bc"
      );
      if (response.ok) {
        let data = await response.json();
        console.log(data);
        setWeather(data);
      } else {
        console.log("fetch failed");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const iconId = () => {
    switch (true) {
      case weather?.weather[0].main === "Clouds":
        setIcons("wi wi-cloudy");
        break;
      case weather?.weather[0].main === "Clear":
        setIcons("wi wi-day-sunny");
        break;
      case weather?.weather[0].main === "Rain":
        setIcons("wi wi-rain");
        break;
      default:
        setIcons("wi wi-cloudy");
    }
  };

  const today = new Date();

  function formatDate(date, format) {
    const map = {
      mm: date.getMonth() + 1,
      dd: date.getDate(),
      yy: date.getFullYear().toString().slice(-2),
      yyyy: date.getFullYear(),
    };

    return format.replace(/mm|dd|yy|yyy/gi, (matched) => map[matched]);
  }

  function calCelsius(temp) {
    let cell = Math.floor(temp - 273.15);
    return cell;
  }

  useEffect(() => {
    weatherFetch();
    iconId();
  }, [search]);

  let weatherIcon;

  return (
    <>
      <div class="box">
        <form id="weather">
          <input
            type="text"
            name="city"
            className="input"
            id="city"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </form>
      </div>

      <div class="card">
        <div class="main">
          <div class="icon">
            <i className={icons}></i>
            <p>{weather?.weather[0].main}</p>
          </div>
          <div class="temp">{calCelsius(weather?.main.temp)} &deg;</div>
          <div class="info">
            <span class="city">{weather?.name}</span>
            <span class="country">{weather?.sys.country}</span>
            <br />
            <hr />
            <span class="date">{formatDate(today, "mm/dd/yy")}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchPage;
