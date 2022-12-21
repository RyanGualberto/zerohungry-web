import React, { useState } from "react";
import FormPost from "../FormPost";
import FormProduct from "../FormProduct";

export default function FormCreate() {
  const [type, setType] = useState("produto");

  return (
    <form>
      <div className="flex flex-col gap-2">
        {type === "produto" && (
          <FormProduct setType={(value) => setType(value)} />
        )}
        {type === "postagem" && (
          <FormPost setType={(value) => setType(value)} />
        )}
        <button className="w-full p-2 bg-green-500 text-white rounded-md">
          Adicionar
        </button>
      </div>
    </form>
  );
}
