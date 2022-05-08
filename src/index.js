import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CharacterListPage from "./Components/CharacterListPage/CharacterListPage";
import CharacterDetailPage from "./Components/CharacterDetailPage/CharacterDetailPage";
import SearchPlanets from "./Components/SearchPlanets/SearchPlanets";
import SelectedPlanetDetails from "./Components/SelectedPlanetDetails/SelectedPlanetDetails";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<CharacterListPage/>} />
      <Route path="/:id" element={<CharacterDetailPage/>} />
      <Route path="/searchPlanets" element={<SearchPlanets/>} />
      <Route path="/searchPlanets/:id" element={<SelectedPlanetDetails/>} />
    </Routes>
  </BrowserRouter>
);
