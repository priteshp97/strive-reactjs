import React from "react";
import "./App.css";
import SearchPage from "./components/SearchPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SongsDetail from "./components/SongsDetail";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SearchPage />}></Route>
          <Route path="/details/:id" element={<SongsDetail />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
