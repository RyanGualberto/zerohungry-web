import React, { useState } from "react";
import Products from "../../mock/Products";
import Input, { Select } from "../Input";

const types = [
  { id: "combo", name: "Combo" },
  { id: "postagem", name: "Postagem" },
  { id: "produto", name: "Produto" },
  { id: "promocao", name: "Promoção" },
];

export default function FormCombo({ setType }) {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    productsQuantity: 1,
    image: "",
    products: [],
  });

  return (
    <div className="flex gap-2">
      <div className="w-1/2 flex flex-col gap-4">
        <Select
          options={types}
          label="Tipo"
          setValue={(value) => setType(value)}
        />
        <Input
          label={"Nome do Combo"}
          placeholder="Nome do Combo"
          type="text"
          value={formData.name}
          setValue={(value) => setFormData({ ...formData, name: value })}
        />
        <Input
          label={"Descrição"}
          placeholder="Descrição"
          type="text"
          value={formData.description}
          setValue={(value) => setFormData({ ...formData, description: value })}
        />
        <Input
          label={"Preço"}
          placeholder="Preço"
          type="number"
          value={formData.price}
          min={0.01}
          setValue={(value) => setFormData({ ...formData, price: value })}
        />
        <Input
          label={"Quantidade de itens"}
          placeholder="quantidade de itens"
          type="number"
          value={formData.productsQuantity}
          setValue={(value) =>
            setFormData({ ...formData, productsQuantity: value })
          }
          min={1}
          max={5}
        />
      </div>
      <div className="w-1/2 flex flex-col gap-4">
        {Array.from({ length: formData.productsQuantity }).map((_, index) => (
          <Select
            key={index}
            options={Products}
            setValue={(value) =>
              setFormData({
                ...formData,
                products: [...formData.products, value],
              })
            }
            label={`Item ${index + 1}`}
          />
        ))}

        <input type="file" placeholder="imagem" className="h-[80px]" />
      </div>
    </div>
  );
}
