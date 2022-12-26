import React from "react";
import { useLocation, useParams } from "react-router-dom";
import ProductCard from "../../components/ProductCard";
import Products from "../../mock/Products";

export default function Product() {
  const location = useLocation();
  const prefix = location.pathname.split("/")[1];
  const { product_id } = useParams();

  return (
    <div className="px-16 py-4 flex flex-col gap-2 overflow-scroll scrollbar-hide">
      <h1 className="text-3xl font-bold">Produto</h1>
      <div className="flex gap-2">
        <div className="flex flex-col w-1/2">
          <img
            className="w-full h-96 object-cover"
            src="https://cdn.panelinha.com.br/receita/1562096945621-receita.jpg"
            alt=""
          />
        </div>
        <div className="flex flex-col w-1/2 justify-between">
          <h2 className="text-2xl font-bold">Nome do produto</h2>
          <p className="text-xl">Descrição do produto</p>
          <div className="w-full flex flex-col gap-2">
            <p className="text-xl font-semibold text-red-500">R$ 10,00</p>
            {prefix === "adm" ? (
              <div className="flex gap-2">
                <button className="bg-red-500 w-full text-white font-bold py-2 px-4 rounded">
                  Excluir
                </button>
                <button className="bg-green-500 w-full text-white font-bold py-2 px-4 rounded">
                  Editar
                </button>
              </div>
            ) : (
              <button className="bg-green-500 w-full text-white font-bold py-2 px-4 rounded">
                Adicionar ao carrinho
              </button>
            )}
          </div>
        </div>
      </div>
      <div className="flex gap-2 items-center">
        <h2 className="text-2xl font-bold">Ingredientes: </h2>
        {Products[0].ingredients.map((ingredient) => (
          <p className="text-xl">{ingredient}</p>
        ))}
      </div>
      <hr className="my-6" />
      <h1 className="text-2xl font-bold">Produtos relacionados</h1>
      <div className="flex flex-wrap gap-4">
        {Products.map((product) => (
          <ProductCard product={product} />
        ))}
      </div>
    </div>
  );
}
