import React from "react";
import { Routes, Route } from "react-router-dom";
import AdminNavbar from "../components/AdminNavbar";
import AdminHome from "../pages/Admin/Home";
import Menu from "../pages/Admin/Menu";
import Orders from "../pages/Admin/Orders";

export default function AdminRoutes() {
  return (
    <div className="w-screen h-screen flex">
      <AdminNavbar />
      <Routes>
        <Route exact path="/home" element={<AdminHome />} />
        <Route exact path="/comandas" element={<Orders />} />
        <Route exact path="/cardapio" element={<Menu />} />
      </Routes>
    </div>
  );
}
