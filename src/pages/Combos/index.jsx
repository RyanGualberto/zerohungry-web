import React from "react";
import Header from "../../components/Header";
import ProductCard from "../../components/ProductCard";
import Products from "../../mock/Products";

export default function Combos() {
  return (
    <div className="w-full py-4 px-16 flex flex-col gap-4">
      <Header />
      <div className="flex flex-wrap overflow-y-scroll scrollbar-hide gap-2">
        {Products.map((product) => (
          <ProductCard key={product?.id} product={product} />
        ))}
      </div>
    </div>
  );
}
