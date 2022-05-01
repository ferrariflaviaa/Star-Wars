import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CharacterListPage from "./Components/CharacterListPage/CharacterListPage";
import CharacterDetailPage from "./Components/CharacterDetailPage/CharacterDetailPage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<CharacterListPage/>} />
      <Route path="/details/:id" element={<CharacterDetailPage/>} />
    </Routes>
  </BrowserRouter>
);
