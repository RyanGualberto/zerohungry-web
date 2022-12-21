import React from "react";
import { AiOutlineHome, AiFillHome } from "react-icons/ai";
import {
  MdRestaurantMenu,
  MdOutlineFastfood,
  MdFastfood,
  MdLocalOffer,
  MdOutlineLocalOffer,
} from "react-icons/md";
import { IoNewspaperOutline, IoNewspaperSharp } from "react-icons/io5";
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
          pathParam="/adm/cardapio"
          iconActive={<MdRestaurantMenu size={24} />}
          iconInactive={<MdRestaurantMenu size={24} />}
          label="Cardápio"
        />
        <NavLink
          pathParam="/adm/combos"
          iconActive={<MdFastfood size={24} />}
          iconInactive={<MdOutlineFastfood size={24} />}
          label="Combos"
        />
        <NavLink
          pathParam="/adm/promocoes"
          iconActive={<MdLocalOffer size={24} />}
          iconInactive={<MdOutlineLocalOffer size={24} />}
          label="Promoções"
        />
        <NavLink
          pathParam="/adm/novidades"
          iconActive={<IoNewspaperSharp size={24} />}
          iconInactive={<IoNewspaperOutline size={24} />}
          label="Novidades"
        />
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
