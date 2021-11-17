import "./App.css";
import TvShows from "./components/TvShows";
import "bootstrap/dist/css/bootstrap.min.css";
import TrendingNowList from "./components/TrendingNowList";
import Footer from "./components/Footer";
import "./Components.css";
import MyNavBar from "./components/MyNavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MovieDetails from "./components/MovieDetails";

function App() {
  return (
    <div>
      <BrowserRouter>
        <MyNavBar />
        <Routes>
          <Route path="/" element={<TrendingNowList title="harry-potter" />} />
          <Route path="/tvshows" element={<TvShows />} />
          <Route path="/movie-details/:movieId" element={<MovieDetails />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
