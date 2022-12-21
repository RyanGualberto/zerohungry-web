import React from "react";

export default function FormPost({ setType }) {
  return (
    <div className="flex gap-2">
      <div className="w-1/2 flex flex-col gap-2">
        <select
          className="w-full p-2 bg-white border-2 rounded-md"
          onChange={(e) => setType(e.target.value)}
        >
          <option value="postagem">Postagem</option>
          <option value="produto">Produto</option>
          <option value="combo">Combo</option>
          <option value="promocao">Promoção</option>
        </select>
        <input
          type="text"
          placeholder="Titulo"
          className="w-full p-2 bg-white border-2 rounded-md"
        />
        <input
          type="text"
          placeholder="Descrição"
          className="w-full p-2 bg-white border-2 rounded-md"
        />
      </div>
      <div className="w-1/2 flex flex-col gap-2">
        <input type="file" placeholder="imagem" className="h-[80px]" />
      </div>
    </div>
  );
}
