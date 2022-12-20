import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import Combos from "../pages/Combos";
import Home from "../pages/Home";
import Menu from "../pages/Menu";
import News from "../pages/News";

export default function ClientRoutes() {
  return (
    <div className="w-screen h-screen flex">
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/cardapio" element={<Menu />} />
        <Route path="/combos" element={<Combos />} />
        <Route path="/novidades" element={<News />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
}
