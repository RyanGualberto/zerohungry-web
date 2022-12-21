import React from "react";
import { Link } from "react-router-dom";
import Tables from "../../mock/Tables";

export default function TableManager() {
  return (
    <div className="w-1/3">
      <h1>Gerenciamento de mesas</h1>
      <div className="max-h-[280px] overflow-y-scroll scrollbar-hide flex flex-col gap-2">
        {Tables.map((table) => (
          <Link
            to={table?.order && `/adm/order/${table?.order}`}
            className="border-2 rounded-lg min-h-[80px] flex flex-col items-end w-full gap-2 p-2"
          >
            <div className="w-full flex justify-between" key={table.id}>
              <h2 className="text-xl font-bold">{table.id}</h2>
              <p
                className={`${
                  table.status === "Ocupado" ? "text-red-500" : "text-green-500"
                } font-semibold`}
              >
                {table.status}
              </p>
            </div>
            {table.status === "Ocupado" && (
              <div className="w-full flex justify-between">
                <p>x{table?.people}</p>
                <p>#{table.order}</p>
              </div>
            )}
          </Link>
        ))}
      </div>
    </div>
  );
}
