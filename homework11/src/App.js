import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SearchPage from "./components/SearchPage";
import CompanyPage from "./components/CompanyPage";
import Favourites from "./components/FavouritesPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SearchPage />} />
        <Route path="/company/:companyname" element={<CompanyPage />} />
        <Route path="/favourites" element={<Favourites />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
