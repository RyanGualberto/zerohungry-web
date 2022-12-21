import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import Combos from "../pages/Client/Combos";
import Coupons from "../pages/Client/Coupons";
import Home from "../pages/Client/Home";
import Menu from "../pages/Client/Menu";
import News from "../pages/Client/News";

export default function ClientRoutes() {
  return (
    <div className="w-screen h-screen flex">
      <Navbar />
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/cardapio" element={<Menu />} />
        <Route path="/combos" element={<Combos />} />
        <Route path="/promocoes" element={<Coupons />} />
        <Route path="/novidades" element={<News />} />
      </Routes>
    </div>
  );
}
