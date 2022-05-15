import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CharacterListPage from "./Components/CharacterListPage/CharacterListPage";
import CharacterDetailPage from "./Components/CharacterDetailPage/CharacterDetailPage";
import SearchDungeons from "./Components/SearchDungeons/SearchDungeons";
import SelectedDungeonsDetails from "./Components/SelectedDungeonsDetails/SelectedDungeonsDetails";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<CharacterListPage/>} />
      <Route path="/:id" element={<CharacterDetailPage/>} />
      <Route path="/searchDungeons" element={<SearchDungeons/>} />
      <Route path="/searchDungeons/:id" element={<SelectedDungeonsDetails/>} />
    </Routes>
  </BrowserRouter>
);
