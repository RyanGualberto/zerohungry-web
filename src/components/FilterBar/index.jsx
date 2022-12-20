import React, { useState, useEffect } from "react";
import { FaFilter } from "react-icons/fa";

export default function FilterBar() {
  const [showFilter, setShowFilter] = useState(false);
  const [animationFilter, setAnimationFilter] = useState(false);

  useEffect(() => {
    if (animationFilter) {
      setShowFilter(true);
    } else {
      setTimeout(() => {
        setShowFilter(false);
      }, 500);
    }
  }, [animationFilter, showFilter]);

  return (
    <div className="flex w-full items-start justify-end gap-2">
      {showFilter && (
        <div
          className={`flex gap-2 ${
            animationFilter ? "animate-slide-in" : "animate-slide-out"
          }`}
        >
          <FilterItem label="Bebidas" />
          <FilterItem label="Lanches" />
          <FilterItem label="Sobremesas" />
          <FilterItem label="R$ 0 - R$ 10" />
          <FilterItem label="R$ 10 - R$ 20" />
          <FilterItem label="R$ 20 - R$ 30" />
        </div>
      )}
      <button
        className="bg-white z-20"
        onClick={() => setAnimationFilter(!animationFilter)}
      >
        <FaFilter size={24} />
      </button>
    </div>
  );
}

export function FilterItem({ label }) {
  return (
    <div className="bg-gray-100 py-[2px] px-4 rounded-lg whitespace-nowrap">
      {label}
    </div>
  );
}
