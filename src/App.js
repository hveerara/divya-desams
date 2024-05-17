import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import About from "./components/About";
import AllSongs from "./components/AllSongs.js";
import Song from "./components/Song.js";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AllSongs />} />
        <Route path="/about" element={<About />} />
        <Route path="/song/:id" element={<Song />} />
      </Routes>
    </Router>
  );
};

export default App;
