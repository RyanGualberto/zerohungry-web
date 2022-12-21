import React from "react";
import { AiOutlineHome, AiFillHome } from "react-icons/ai";
import { MdRestaurantMenu } from "react-icons/md";
import { IoNewspaperOutline, IoNewspaperSharp } from "react-icons/io5";
import { HiOutlineClipboardList, HiClipboardList } from "react-icons/hi";
import NavLink from "../NavLink";
import { Link } from "react-router-dom";

export default function AdminNavbar() {
  return (
    <div className="h-full flex flex-col p-4 justify-between border-r-[0.5px]">
      <div className="font-black text-4xl whitespace-nowrap">ZH Admin</div>
      <div className="flex flex-col gap-1">
        <NavLink
          pathParam="/adm/home"
          iconActive={<AiFillHome size={24} />}
          iconInactive={<AiOutlineHome size={24} />}
          label="Início"
        />
        <NavLink
          pathParam="/adm/comandas"
          iconActive={<HiClipboardList size={24} />}
          iconInactive={<HiOutlineClipboardList size={24} />}
          label="Comandas"
        />
        <NavLink
          pathParam="/adm/cardapio"
          iconActive={<MdRestaurantMenu size={24} />}
          iconInactive={<MdRestaurantMenu size={24} />}
          label="Cardápio"
        />
        <NavLink
          pathParam="/adm/novidades"
          iconActive={<IoNewspaperSharp size={24} />}
          iconInactive={<IoNewspaperOutline size={24} />}
          label="Novidades"
        />
        <div className="font-medium py-4 bg-blue-500 text-white rounded-lg hover:bg-opacity-80 ease-in-out duration-300 flex justify-center items-center cursor-pointer text-lg">
          Adicionar
        </div>
      </div>
      <Link
        to="/"
        className="bg-red-600 text-white text-center cursor-pointer p-2 rounded-lg w-full font-semibold whitespace-nowrap"
      >
        Sair
      </Link>
    </div>
  );
}
