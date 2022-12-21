import React from "react";
import { Link } from "react-router-dom";

export default function PostIt({ order }) {
  return (
    <Link
      className=" relative flex flex-col border-gray-100 border-2 bg-gradient-to-br from-yellow-200 to-white p-4 rounded-b-lg min-w-[300px] gap-2 max-w-[300px] h-fit"
      to={`/adm/orders/${order.id}`}
      key={order.id}
    >
      <div className="h-4 w-4 bg-gradient-to-br from-red-500 to-red-200 rounded-full self-center absolute top-1" />
      <div className="w-full flex justify-between">
        <p className="text-xl">{order.table}</p>
        <p className="text-sm">#{order?.id}</p>
      </div>
      <div className="max-h-[85px] overflow-y-scroll  scrollbar-hide">
        {order?.products?.map((product) => (
          <div className="w-full flex justify-between">
            <p className="max-w-[240px] overflow-hidden">{product.name}</p>
            <p>x{product.quantity}</p>
          </div>
        ))}
      </div>
      <p className="w-full flex justify-end self-end">{order?.time}</p>
      <div className="w-full flex  justify-center py-2 bg-yellow-200 rounded-lg">
        Concluído
      </div>
    </Link>
  );
}
