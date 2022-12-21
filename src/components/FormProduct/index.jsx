import React from "react";
import Input, { Select, TextArea } from "../Input";

const types = [
  { id: "produto", name: "Produto" },
  { id: "postagem", name: "Postagem" },
  { id: "combo", name: "Combo" },
  { id: "promocao", name: "Promoção" },
];

export default function FormProduct({ setType }) {
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
        <Input label={"Preço"} placeholder="9.99" min={0.01} type="number" />
      </div>
      <div className="w-1/2 flex flex-col gap-2">
        <input type="file" placeholder="imagem" className="h-[80px]" />
        <TextArea label={"Ingredientes"} placeholder="Ingredientes" />
        <label className="text-xs text-[#33333370]">
          * lembre-se de separar os ingredientes através de espaços
        </label>
      </div>
    </div>
  );
}
