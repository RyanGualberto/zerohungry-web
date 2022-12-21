import React from "react";
import Input, { Select } from "../Input";

const types = [
  { id: "postagem", name: "Postagem" },
  { id: "produto", name: "Produto" },
  { id: "combo", name: "Combo" },
  { id: "promocao", name: "Promoção" },
];

export default function FormPost({ setType }) {
  return (
    <div className="flex gap-2">
      <div className="w-1/2 flex flex-col gap-4">
        <Select
          options={types}
          label="Tipo"
          setValue={(value) => setType(value)}
        />
        <Input label={"Titulo"} placeholder="Sucos Novos" type="text" />
        <Input
          label={"Descrição"}
          placeholder="Venha Conhecer os novos sabores de suco"
          type="text"
        />
      </div>
      <div className="w-1/2 flex flex-col gap-2">
        <input type="file" placeholder="imagem" className="h-[80px]" />
      </div>
    </div>
  );
}
