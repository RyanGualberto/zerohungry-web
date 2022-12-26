import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import Combos from "../pages/Combos";
import Coupons from "../pages/Coupons";
import Home from "../pages/Home";
import Menu from "../pages/Menu";
import News from "../pages/News";
import Product from "../pages/Product";

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
        <Route exact path="/product/:product_id" element={<Product />} />
      </Routes>
    </div>
  );
}
