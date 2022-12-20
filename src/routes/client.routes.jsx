import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import Combos from "../pages/Combos";
import Home from "../pages/Home";
import Menu from "../pages/Menu";

export default function ClientRoutes() {
  return (
    <div className="w-screen h-screen flex">
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/cardapio" element={<Menu />} />
        <Route path="/combos" element={<Combos />} />
      </Routes>
    </div>
  );
}
