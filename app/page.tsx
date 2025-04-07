"use client";
import CartDrawer from "./componets/cart-drawer";
import { useCartDrawer } from "./componets/cart-drawer-context";
import ProductGrid from "./componets/product-grid";

export default function Home() {
  const { isOpen, closeDrawer } = useCartDrawer();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="relative bg-gradient-to-r from-blue-100 to-blue-200 py-16 px-4 text-center rounded-b-3xl shadow-sm">
        <h1 className="text-3xl md:text-5xl font-bold text-blue-600">
          Catálogo de Produtos de Limpeza
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Explore os melhores produtos para o seu negócio, comércio ou casa!
        </p>
        <p className="mt-4 text-lg text-gray-600">
          Atendemos entregas em Barbosa Ferraz - PR e região.
        </p>
        <div className="absolute right-4 top-4 opacity-70 w-40 h-40 bg-[url('/bubbles.svg')] bg-no-repeat bg-contain pointer-events-none  md:block" />
      </div>
      <CartDrawer isOpen={isOpen} onClose={closeDrawer} />
      <ProductGrid />
    </div>
  );
}
