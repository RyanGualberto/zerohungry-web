import React from "react";
import FilterBar from "../../../components/FilterBar";
import Header from "../../../components/Header";
import Products from "../../../mock/Products";
import ProductCard from "../../../components/ProductCard";

export default function News() {
  return (
    <div className="w-full py-4 px-16 flex flex-col gap-4">
      <Header />
      <FilterBar />
      <div className="flex flex-wrap overflow-y-scroll scrollbar-hide gap-2">
        {Products.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
          .reverse()
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
}
