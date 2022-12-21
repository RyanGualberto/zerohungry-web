import React, { useState } from "react";
import Input, { Select } from "../Input";
import Products from "../../mock/Products";
import Combos from "../../mock/Combos";

const types = [
  { id: "promocao", name: "Promoção" },
  { id: "postagem", name: "Postagem" },
  { id: "produto", name: "Produto" },
  { id: "combo", name: "Combo" },
];

export default function FormOffer({ setType }) {
  const [formData, setFormData] = useState({
    promotionType: "combo",
    code: "",
    image: "",
    price: 0,
  });

  return (
    <div className="flex gap-2 w-[700px]">
      <div className="w-1/2 flex flex-col gap-4">
        <Select
          options={types}
          label="Tipo"
          setValue={(value) => setType(value)}
        />
        <Select
          label="Tipo de Promoção"
          setValue={(value) =>
            setFormData({ ...formData, promotionType: value })
          }
          options={[
            { id: "combo", name: "Combo" },
            {
              id: "produto",
              name: "Produto",
            },
          ]}
        />
        <Input
          label={"Código"}
          classname="uppercase"
          placeholder="abc123"
          min={6}
          max={6}
          value={formData.code}
          setValue={(value) => setFormData({ ...formData, code: value })}
          type="text"
        />
      </div>
      <div className="w-1/2 flex flex-col gap-4">
        <Select
          label={formData?.promotionType === "combo" ? "Combo" : "Produto"}
          options={formData?.promotionType === "combo" ? Combos : Products}
        />
        <Input
          value={formData?.price}
          label={"Preço"}
          placeholder="9.99"
          min={0.01}
          setValue={(value) => setFormData({ ...formData, price: value })}
          type="number"
        />
        <input type="file" placeholder="imagem" className="h-[80px]" />
      </div>
    </div>
  );
}
