"use client";
import CartDrawer from "./componets/cart-drawer";
import { useCartDrawer } from "./componets/cart-drawer-context";
import ProductGrid from "./componets/product-grid";

export default function Home() {
  const { isOpen, closeDrawer } = useCartDrawer();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header com a onda integrada */}
      <div className="relative bg-gradient-to-r from-blue-100 to-blue-200 pt-16 px-4 text-center overflow-hidden pb-12 md:pb-16 lg:pb-24 xl:pb-32">
        <h1 className="text-3xl md:text-5xl font-bold text-blue-600">
          Catálogo de Produtos de Limpeza
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Explore os melhores produtos para o seu negócio, comércio ou casa!
        </p>
        <p className="mt-2 text-lg text-gray-600">
          Atinja o lote mínimo para frete grátis e entrega rápida!
        </p>
        <p className="mt-2 text-lg text-gray-600 mb-12">
          Atendemos entregas em Barbosa Ferraz - PR e região.
        </p>

        <div className="absolute right-4 top-4 opacity-70 w-40 h-40 bg-[url('/bubbles.svg')] bg-no-repeat bg-contain pointer-events-none md:block" />

        {/* Curva inferior embutida, sem translate */}
        <svg
          viewBox="0 0 1440 320"
          className="absolute bottom-0 left-0 w-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#f9fafb" // mesma cor da seção abaixo
            d="M0,192L60,186.7C120,181,240,171,360,181.3C480,192,600,224,720,234.7C840,245,960,235,1080,224C1200,213,1320,203,1380,197.3L1440,192V320H1380C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320H0Z"
          />
        </svg>
      </div>

      <CartDrawer isOpen={isOpen} onClose={closeDrawer} />
      <ProductGrid />
    </div>
  );
}
