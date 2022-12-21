import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function ProductCard({ product }) {
  const { pathname } = useLocation();
  const linkPrefix = pathname.split("/")[1];

  return (
    <Link
      to={`/${linkPrefix}/product/${product?.id}`}
      className="bg-gray-100 flex flex-col gap-2 p-4 rounded-lg w-[300px]"
    >
      <img
        className="w-full h-[150px] object-cover rounded-lg"
        src={product.image}
        alt={product.name}
      />
      <h1 className="font-semibold text-2xl max-h-[40px] overflow-hidden">
        {product.name}
      </h1>
      <p className="text-2xl font-bold text-red-600">
        R${parseFloat(product.price).toFixed(2)}
      </p>
      <p className="flex overflow-scroll scrollbar-hide">
        {product?.ingredients?.map((ingredient, idx) => (
          <span key={idx} className="bg-gray-200 p-1 rounded-lg mr-2">
            {ingredient}
          </span>
        ))}
      </p>
      <div className="w-full flex justify-between gap-2">
        {linkPrefix === "adm" ? (
          <>
            <button className="bg-blue-500 w-full text-white font-semibold py-2 px-4 rounded-lg">
              Editar
            </button>
            <button className="bg-red-500 w-full text-white font-semibold py-2 px-4 rounded-lg">
              Deletar
            </button>
          </>
        ) : (
          <button className="bg-yellow-500 w-full text-white font-semibold py-2 px-4 rounded-lg">
            Adicionar à Sacola
          </button>
        )}
      </div>
    </Link>
  );
}
