"use client";
import React from "react";
import ProductCard from "./card";
import { mockProducts } from "../mock-produtos";

const ProductGrid = () => {
  return (
    <div className="max-w-[1500px] mx-auto px-4 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
      {mockProducts.map((product) => (
        <ProductCard key={product.id} product={product} isLoading={false} />
      ))}
    </div>
  );
};

export default ProductGrid;
