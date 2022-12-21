import React from "react";
import Header from "../../../components/Header";
import Products from "../../../mock/Products";
import ProductCard from "../../../components/ProductCard";
import BackToTop from "../../../components/BackToTop";
import FilterBar from "../../../components/FilterBar";

export default function Menu() {
  return (
    <div className="w-full py-4 px-16 flex flex-col gap-4 overflow-x-hidden">
      <BackToTop />
      <Header />
      <FilterBar />
      <div className="flex flex-wrap overflow-y-scroll scrollbar-hide gap-2">
        {Products.map((product) => (
          <ProductCard key={product?.id} product={product} />
        ))}
      </div>
    </div>
  );
}
