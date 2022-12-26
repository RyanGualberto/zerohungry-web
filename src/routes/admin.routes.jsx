import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import AdminNavbar from "../components/AdminNavbar";
import FormCreate from "../components/FormCreate";
import Modal from "../components/Modal";
import Dashboard from "../pages/Dashboard";
import Menu from "../pages/Menu";
import News from "../pages/News";
import Order from "../pages/Order";
import Orders from "../pages/Orders";
import Product from "../pages/Product";

export default function AdminRoutes() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div className="w-screen h-screen flex">
      <AdminNavbar showModal={() => setOpenModal(true)} />
      <Modal
        title="Adicionar"
        show={openModal}
        close={() => setOpenModal(false)}
        children={<FormCreate />}
      />
      <Routes>
        <Route exact path="*" element={<Dashboard />} />
        <Route exact path="/home" element={<Dashboard />} />
        <Route exact path="/comandas" element={<Orders />} />
        <Route exact path="/cardapio" element={<Menu />} />
        <Route exact path="/novidades" element={<News />} />
        <Route exact path="/product/:product_id" element={<Product />} />
        <Route exact path="/orders/:order_id" element={<Order />} />
      </Routes>
    </div>
  );
}
