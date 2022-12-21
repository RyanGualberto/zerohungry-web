import React from "react";
import { Routes, Route } from "react-router-dom";
import AdminNavbar from "../components/AdminNavbar";
import Dashboard from "../pages/Dashboard";
import Menu from "../pages/Menu";
import News from "../pages/News";
import Orders from "../pages/Orders";

export default function AdminRoutes() {
  return (
    <div className="w-screen h-screen flex">
      <AdminNavbar />
      <Routes>
        <Route exact path="/home" element={<Dashboard />} />
        <Route exact path="/comandas" element={<Orders />} />
        <Route exact path="/cardapio" element={<Menu />} />
        <Route exact path="/novidades" element={<News />} />
      </Routes>
    </div>
  );
}
