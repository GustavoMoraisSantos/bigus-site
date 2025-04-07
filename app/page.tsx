"use client";
import Navbar from "./componets/menu";
import ProductGrid from "./componets/product-grid";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="relative bg-gradient-to-r from-blue-100 to-blue-200 py-16 px-4 text-center rounded-b-3xl shadow-sm">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-800">
          Catálogo de Produtos de Limpeza
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Explore os melhores produtos para manter sua casa impecável.
        </p>
        <div className="absolute right-4 top-4 opacity-70 w-40 h-40 bg-[url('/bubbles.svg')] bg-no-repeat bg-contain pointer-events-none  md:block" />

        <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition">
          Ver Ofertas
        </button>
      </div>

      <ProductGrid />
    </div>
  );
}
