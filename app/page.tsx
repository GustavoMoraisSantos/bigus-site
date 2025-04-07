"use client";
import Navbar from "./componets/menu";
import ProductGrid from "./componets/product-grid";

export default function Home() {
  return (
    <div className="min-h-screen pt-20 bg-gray-50">
      <Navbar />
      <div className="text-center py-20 px-4">
        <h1 className="text-xl md:text-4xl font-bold mb-4">
          Catálogo de Produtos de Limpeza - atualizado
        </h1>
        <p className="text-lg">
          Explore nossa variedade de produtos de limpeza.
        </p>
      </div>

      <ProductGrid />
    </div>
  );
}
