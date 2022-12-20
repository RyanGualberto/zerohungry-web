import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import { FaFilter } from "react-icons/fa";
import Products from "../../mock/Products";
import ProductCard from "../../components/ProductCard";
import BackToTop from "../../components/BackToTop";

export default function Menu() {
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
    <div className="w-full py-4 px-16 flex flex-col gap-4 overflow-x-hidden">
      <BackToTop />
      <Header />
      <div className="flex w-full items-start justify-end gap-2">
        {showFilter && (
          <div
            className={`flex gap-2 ${
              animationFilter ? "animate-slide-in" : "animate-slide-out"
            }`}
          >
            <div className="bg-gray-100 py-[2px] px-4 rounded-lg">Bebidas</div>
            <div className="bg-gray-100 py-[2px] px-4 rounded-lg">Lanches</div>
            <div className="bg-gray-100 py-[2px] px-4 rounded-lg">
              Sobremesas
            </div>
            <div className="bg-gray-100 py-[2px] px-4 rounded-lg">
              R$ 0 - R$ 10
            </div>
            <div className="bg-gray-100 py-[2px] px-4 rounded-lg">
              R$ 10 - R$ 20
            </div>
            <div className="bg-gray-100 py-[2px] px-4 rounded-lg">
              R$ 20 - R$ 30
            </div>
          </div>
        )}
        <button
          className="bg-white z-20"
          onClick={() => setAnimationFilter(!animationFilter)}
        >
          <FaFilter size={24} />
        </button>
      </div>
      <div className="justify-start flex flex-wrap overflow-y-scroll scrollbar-hide gap-2">
        {Products.map((product) => (
          <ProductCard key={product?.id} product={product} />
        ))}
      </div>
    </div>
  );
}
