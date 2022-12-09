import React from "react";
import Home from "./Home";
import Cuisine from "./Cuisine";
import Searched from "./Searched";
import Recipe from "./Recipe";
import Social from "./Social";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

function Pages() {
  //location is needed for framer-motion to fade in and fade out
  //in order to know when the page navigates
  let location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/cuisine/:type" element={<Cuisine />} />
        <Route path="/searched/:search" element={<Searched />} />
        <Route path="/recipe/:name" element={<Recipe />} />
        <Route path="/social" element={<Social />} />
      </Routes>
    </AnimatePresence>
  );
}
export default Pages;
