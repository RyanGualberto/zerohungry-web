import React from "react";
import orders from "../../mock/Orders";
import PostIt from "../Postit";

export default function OrderBar() {
  return (
    <div className="flex gap-2 w-full border-t-4 overflow-x-scroll scrollbar-hide">
      {orders.map((order) => (
        <PostIt order={order} key={order?.id} />
      ))}
    </div>
  );
}
