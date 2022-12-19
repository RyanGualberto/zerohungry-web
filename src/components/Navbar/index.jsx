import React from "react";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineHome, AiFillHome } from "react-icons/ai";
import {
  MdRestaurantMenu,
  MdOutlineFastfood,
  MdFastfood,
} from "react-icons/md";
import { RiCoupon3Line, RiCoupon3Fill } from "react-icons/ri";
import { IoNewspaperOutline, IoNewspaperSharp } from "react-icons/io5";
import {
  HiOutlineClipboardDocumentList,
  HiClipboardDocumentList,
} from "react-icons/hi2";

export default function Navbar() {
  const { pathname } = useLocation();

  return (
    <div className="h-full flex flex-col p-4 justify-between border-r-[0.5px]">
      <div>ZeroHungry</div>
      <div className="flex flex-col gap-1">
        <Link
          className={`${
            pathname === "/cl/home" && "bg-gray-100"
          } px-2 font-medium py-4 hover:bg-gray-100 rounded-lg ease-in-out duration-300 flex gap-2 items-center cursor-pointer`}
        >
          {pathname === "/cl/home" ? (
            <AiFillHome size={24} />
          ) : (
            <AiOutlineHome size={24} />
          )}
          Início
        </Link>
        <Link
          className={`${
            pathname === "/cl/cardapio" && "bg-gray-100"
          } px-2 font-medium py-4 hover:bg-gray-100 rounded-lg ease-in-out duration-300 flex gap-2 items-center cursor-pointer`}
        >
          <MdRestaurantMenu size={24} />
          Cardápio
        </Link>
        <Link
          className={`${
            pathname === "/cl/combos" && "bg-gray-100"
          } px-2 font-medium py-4 hover:bg-gray-100 rounded-lg ease-in-out duration-300 flex gap-2 items-center cursor-pointer`}
        >
          {pathname === "/cl/combos" ? (
            <MdFastfood size={24} />
          ) : (
            <MdOutlineFastfood size={24} />
          )}
          Combos
        </Link>
        <Link
          className={`${
            pathname === "/cl/cupons" && "bg-gray-100"
          } px-2 font-medium py-4 hover:bg-gray-100 rounded-lg ease-in-out duration-300 flex gap-2 items-center cursor-pointer`}
        >
          {pathname === "/cl/cupons" ? (
            <RiCoupon3Fill size={24} />
          ) : (
            <RiCoupon3Line size={24} />
          )}
          Cupons
        </Link>
        <Link
          className={`${
            pathname === "/cl/novidades" && "bg-gray-100"
          } px-2 font-medium py-4 hover:bg-gray-100 rounded-lg ease-in-out duration-300 flex gap-2 items-center cursor-pointer`}
        >
          {pathname === "/cl/novidades" ? (
            <IoNewspaperSharp size={24} />
          ) : (
            <IoNewspaperOutline size={24} />
          )}
          Novidades
        </Link>
        <Link
          className={`${
            pathname === "/cl/pedido" && "bg-gray-100"
          } px-2 font-medium py-4 hover:bg-gray-100 rounded-lg ease-in-out duration-300 flex gap-2 items-center cursor-pointer`}
        >
          {pathname === "/cl/pedido" ? (
            <HiClipboardDocumentList size={24} />
          ) : (
            <HiOutlineClipboardDocumentList size={24} />
          )}
          Pedido
        </Link>
      </div>
      <div className="bg-red-600 text-white p-2 rounded-lg w-full font-semibold">
        Cancelar Pedido
      </div>
    </div>
  );
}
