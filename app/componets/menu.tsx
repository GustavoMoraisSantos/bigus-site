"use client";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import CartDrawer from "./cart-drawer";
import { useCart } from "./cart-context";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const { cart } = useCart();
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <nav className="bg-blue-600 w-full fixed top-0 left-0 z-50 shadow-lg">
        <div className="max-w-screen-xl mx-auto px-4 py-4 flex justify-between items-center text-white">
          <ul className="flex space-x-8 font-semibold text-lg">
            <li>
              <Link
                href="/"
                className={`pb-1 ${
                  pathname === "/" ? "border-b-2 border-white" : ""
                }`}
              >
                Loja
              </Link>
            </li>
            <li>
              <Link
                href="/contato"
                className={`pb-1 ${
                  pathname === "/contato" ? "border-b-2 border-white" : ""
                }`}
              >
                Contato
              </Link>
            </li>
          </ul>

          <button
            className="relative"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            <ShoppingCart className="w-6 h-6 hover:cursor-pointer hover:text-gray-300" />
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full text-xs px-1">
                {cart.reduce((acc, item) => acc + item.quantity, 0)}
              </span>
            )}
          </button>
        </div>
      </nav>
      <CartDrawer isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
};

export default Navbar;
