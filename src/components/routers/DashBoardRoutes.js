import React from "react";
import { Route, Routes } from "react-router-dom";
import { Navbar } from "../ui/NavBar";
import { MarvelScreen } from "../marvel/MarvelScreen";
import { DcScreen } from "../dc/DcScreen";
import { SearchScreen } from "../search/SearchScreen";
import { HeroScreen } from "../heroe/HeroScreen";

export const DashBoardRoutes = () => {
  return (
    <>
      <Navbar />
      <div className="container mt-5">
        <Routes>
          <Route path="/" element={<MarvelScreen />}>
            {" "}
          </Route>
          <Route path="marvel" element={<MarvelScreen />}>
            {" "}
          </Route>
          <Route path="dc" element={<DcScreen />} />
          <Route path="hero/:id" element={<HeroScreen />} />{" "}
          <Route path="search" element={<SearchScreen />}>
            {" "}
          </Route>
        </Routes>
      </div>
    </>
  );
};
