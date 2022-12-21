import React from "react";
import OrderBar from "../../components/OrderBar";
import TableManager from "../../components/TableManager";

export default function AdminHome() {
  return (
    <div className="w-screen h-screen flex flex-col gap-6 px-16 py-4 overflow-auto scrollbar-hide">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      <OrderBar />
      <div className="h-1/2 w-full flex justify-between">
        <TableManager />
        <div className="flex flex-col gap-2">
          <div className="w-[300px] h-[80px] items-center rounded-lg p-4 border-2 flex justify-between ">
            <p>Vendas Totais</p> <p>10</p>
          </div>
          <div className="w-[300px] h-[80px] items-center rounded-lg p-4 border-2 flex justify-between ">
            <p>Vendas Hoje</p> <p>10</p>
          </div>
          <div className="w-[300px] h-[80px] items-center rounded-lg p-4 border-2 flex justify-between ">
            <p>Comandas em Aberto</p> <p>10</p>
          </div>
          <div className="w-[300px] h-[80px] items-center rounded-lg p-4 border-2 flex justify-between ">
            <p>Comandas Fechadas</p> <p>10</p>
          </div>
          <div className="w-[300px] h-[80px] items-center rounded-lg p-4 border-2 flex justify-between ">
            <p>Pedidos em andamento</p> <p>10</p>
          </div>
          <div className="w-[300px] h-[80px] items-center rounded-lg p-4 border-2 flex justify-between ">
            <p>Mesas Ocupadas</p> <p>10</p>
          </div>
        </div>
      </div>
    </div>
  );
}
