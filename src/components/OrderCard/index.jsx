import React from "react";
import { Link } from "react-router-dom";

export default function OrderCard({ order }) {
  return (
    <Link
      className=" relative flex flex-col text-[#333] border-gray-100 border-2 bg-gradient-to-br from-yellow-200 to-white p-4 rounded-b-lg min-w-[300px] gap-2 max-w-[300px] h-fit"
      to={`/adm/orders/${order.id}`}
      key={order.id}
    >
      <div className="h-4 w-4 bg-gradient-to-br from-red-500 to-red-200 rounded-full self-center absolute top-1" />
      <div className="w-full flex text-lg justify-between">
        <p>{order.table}</p>
        <p>#{order.id}</p>
      </div>
      <div className="w-full justify-between flex">
        <p>{order?.clientName}</p>
        <p>{order.status}</p>
      </div>
      <p className="text-lg font-semibold">R${order.total.toFixed(2)}</p>
    </Link>
  );
}
