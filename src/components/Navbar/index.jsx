import React from "react";
import { AiOutlineHome, AiFillHome } from "react-icons/ai";
import {
  MdRestaurantMenu,
  MdOutlineFastfood,
  MdFastfood,
} from "react-icons/md";
import { RiCoupon3Line, RiCoupon3Fill } from "react-icons/ri";
import { IoNewspaperOutline, IoNewspaperSharp } from "react-icons/io5";
import NavLink from "../NavLink";

export default function Navbar() {
  return (
    <div className="h-full flex flex-col p-4 justify-between border-r-[0.5px]">
      <div>ZeroHungry</div>
      <div className="flex flex-col gap-1">
        <NavLink
          pathParam="/cl/home"
          iconActive={<AiFillHome size={24} />}
          iconInactive={<AiOutlineHome size={24} />}
          label="Início"
        />
        <NavLink
          pathParam="/cl/cardapio"
          iconActive={<MdRestaurantMenu size={24} />}
          iconInactive={<MdRestaurantMenu size={24} />}
          label="Cardápio"
        />
        <NavLink
          pathParam="/cl/combos"
          iconActive={<MdFastfood size={24} />}
          iconInactive={<MdOutlineFastfood size={24} />}
          label="Combos"
        />
        <NavLink
          pathParam="/cl/cupons"
          iconActive={<RiCoupon3Fill size={24} />}
          iconInactive={<RiCoupon3Line size={24} />}
          label="Cupons"
        />
        <NavLink
          pathParam="/cl/novidades"
          iconActive={<IoNewspaperSharp size={24} />}
          iconInactive={<IoNewspaperOutline size={24} />}
          label="Novidades"
        />
      </div>
      <div className="bg-red-600 text-white p-2 rounded-lg w-full font-semibold whitespace-nowrap">
        Cancelar Pedido
      </div>
    </div>
  );
}
