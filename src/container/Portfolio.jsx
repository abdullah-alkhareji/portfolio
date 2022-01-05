import React from "react";
import { Routes, Route } from "react-router-dom";
import {
  About,
  Education,
  Experience,
  Skills,
  Projects,
  Feed,
} from "../components/";

const Portfolio = () => {
  return (
    <div className=" h-full">
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/About" element={<About />} />
        <Route path="/Education" element={<Education />} />
        <Route path="/Experience" element={<Experience />} />
        <Route path="/Skills" element={<Skills />} />
        <Route path="/Projects" element={<Projects />} />
      </Routes>
    </div>
  );
};

export default Portfolio;
