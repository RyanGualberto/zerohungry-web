import React from "react";
import orders from "../../mock/Orders";
import Input from "../../components/Input";

export default function Order() {
  const [discount, setDiscount] = React.useState(0);
  return (
    <div className="px-16 py-4 flex flex-col gap-2 w-full">
      <h1 className="text-3xl font-semibold">Comanda #{orders[2].id}</h1>
      <h2 className="text-xl font-semibold">
        Mesa {orders[2].table} - {orders[2].clientName}
      </h2>
      <div className="flex w-full justify-between">
        <div className="w-full">
          <h2 className="text-xl font-semibold">Pedidos</h2>
          <div className="flex w-full flex-col gap-2">
            {orders[2].products.map((item) => (
              <div className="flex flex-row gap-2">
                <div className="w-[300px]">
                  <h3 className="whitespace-nowrap">
                    {item.quantity}x {item.name}
                  </h3>
                  <p>{item.status}</p>
                </div>
                <div className="w-1/2">
                  <p>R${item.price.toFixed(2)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full">
          <h2 className="text-xl font-semibold">Total</h2>
          <div className="flex w-full flex-col gap-2">
            <div className="flex flex-row gap-2">
              <div className="w-[300px]">
                <h3 className="whitespace-nowrap">Subtotal</h3>
              </div>
              <div className="w-1/2 flex justify-end text-xl text-red-400 font-semibold">
                <p>R${orders[2].total.toFixed(2)}</p>
              </div>
            </div>
            <div className="flex items-center flex-row gap-2">
              <div className="w-[300px]">
                <h3 className="whitespace-nowrap">Desconto</h3>
              </div>
              <div className="w-1/2">
                <Input
                  value={discount}
                  setValue={(value) => setDiscount(value)}
                  type="number"
                  min={0}
                />
              </div>
            </div>
            <div className="flex items-center flex-row gap-2">
              <div className="w-[300px]">
                <h3 className="whitespace-nowrap">Total</h3>
              </div>
              <div className="w-1/2 flex justify-end text-xl text-red-400 font-semibold">
                <p>R${(orders[2].total - discount).toFixed(2)}</p>
              </div>
            </div>
            <div className="w-full">
              <button className="bg-red-400 w-full text-white font-semibold py-2 px-4 rounded">
                Finalizar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
