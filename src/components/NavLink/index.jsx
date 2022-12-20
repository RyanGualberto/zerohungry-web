import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function NavLink({
  pathParam,
  iconActive,
  iconInactive,
  label,
}) {
  const { pathname } = useLocation();

  return (
    <Link
      to={pathParam}
      className={`
        ${pathname === pathParam && "bg-gray-100"} 
        px-4 font-medium py-4 hover:bg-gray-100 rounded-lg ease-in-out duration-300 flex gap-2 items-center cursor-pointer text-lg`}
    >
      {pathname === pathParam ? iconActive : iconInactive}
      {label}
    </Link>
  );
}
