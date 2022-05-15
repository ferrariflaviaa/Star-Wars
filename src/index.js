import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CharacterListPage from "./Components/CharacterListPage/CharacterListPage";
import CharacterDetailPage from "./Components/CharacterDetailPage/CharacterDetailPage";
import SearchLocals from "./Components/SearchLocals/SearchLocals";
import SelectedLocalsDetails from "./Components/SelectedLocalsDetails/SelectedLocalsDetails";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<CharacterListPage/>} />
      <Route path="/:id" element={<CharacterDetailPage/>} />
      <Route path="/searchLocals" element={<SearchLocals/>} />
      <Route path="/searchLocals/:id" element={<SelectedLocalsDetails/>} />
    </Routes>
  </BrowserRouter>
);
