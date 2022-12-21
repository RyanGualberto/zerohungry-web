import React from "react";
import OrderBar from "../../../components/OrderBar";
import TableManager from "../../../components/TableManager";

export default function AdminHome() {
  return (
    <div className="w-screen h-screen flex flex-col gap-4 px-16 py-4 overflow-hidden">
      <OrderBar />
      <TableManager />
    </div>
  );
}
