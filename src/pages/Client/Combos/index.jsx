import React from "react";
import FilterBar from "../../../components/FilterBar";
import Header from "../../../components/Header";
import ProductCard from "../../../components/ProductCard";
import combos from "../../../mock/Combos";

export default function Combos() {
  return (
    <div className="w-full py-4 px-16 flex flex-col gap-4">
      <Header />
      <FilterBar />
      <div className="flex flex-wrap overflow-y-scroll scrollbar-hide gap-2">
        {combos.map((product) => (
          <ProductCard key={product?.id} product={product} />
        ))}
      </div>
    </div>
  );
}
