import React from "react";
import OrderCard from "../../../components/OrderCard";
import orders from "../../../mock/Orders";

export default function Orders() {
  return (
    <div className="px-16 py-4 flex flex-col gap-2">
      <h1 className="text-3xl font-bold">Comandas</h1>
      <div className="flex w-full justify-end gap-4">
        <div className="py-2 px-4 bg-gray-100 rounded-lg">Abertas</div>
        <div className="py-2 px-4 bg-gray-100 rounded-lg">Encerradas</div>
        <div className="py-2 px-4 bg-gray-100 rounded-lg">Hoje</div>
        <div className="py-2 px-4 bg-gray-100 rounded-lg">Última Semana</div>
        <div className="py-2 px-4 bg-gray-100 rounded-lg">Último Mês</div>
      </div>
      <div className="flex flex-wrap gap-2">
        {orders.map((order) => (
          <OrderCard order={order} />
        ))}
      </div>
    </div>
  );
}
