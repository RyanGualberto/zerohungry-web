import React from "react";
import { BiSearchAlt } from "react-icons/bi";

export default function Header() {
  return (
    <div className="w-full justify-between flex items-center gap-4">
      <h1 className="font-black text-4xl">ZH</h1>
      <form className="flex w-full justify-start border-2 rounded-lg p-2">
        <input
          type="text"
          placeholder="Digite o nome de um produto..."
          className="outline-none w-full"
        />
        <button type="submit" className="outline-none">
          <BiSearchAlt size={30} />
        </button>
      </form>
    </div>
  );
}
