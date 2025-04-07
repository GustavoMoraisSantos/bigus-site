"use client";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";
import { useCart } from "./cart-context";
import { usePathname } from "next/navigation";
import { useCartDrawer } from "./cart-drawer-context";
import BigusLogo from "../assets/bigus-logo-new.png";
import Image from "next/image";

const Navbar = () => {
  const { cart } = useCart();
  const pathname = usePathname();
  const { openDrawer } = useCartDrawer();
  return (
    <nav className="bg-blue-600 w-full fixed top-0 left-0 z-50 shadow-lg">
      <div className="absolute left-4 top-1/2 -translate-y-1/2 z-10">
        <Image alt="bigus-logo" src={BigusLogo} width={100} />
      </div>
      <div className="max-w-screen-xl mx-auto pl-32 pr-4 py-4 flex justify-between items-center text-white">
        <ul className="flex space-x-8 font-medium text-white text-base md:text-lg">
          <li>
            <Link
              href="/"
              className={`pb-1 border-b-2 transition-all duration-200 ${
                pathname === "/"
                  ? "border-white"
                  : "border-transparent hover:border-white/50"
              }`}
            >
              Catálogo
            </Link>
          </li>
          <li>
            <Link
              href="/contato"
              className={`pb-1 border-b-2 transition-all duration-200 ${
                pathname === "/contato"
                  ? "border-white"
                  : "border-transparent hover:border-white/50"
              }`}
            >
              Fale conosco
            </Link>
          </li>
        </ul>

        {pathname === "/" && (
          <button className="relative cursor-pointer" onClick={openDrawer}>
            <ShoppingCart className="w-6 h-6 hover:text-white/80 transition" />
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full text-xs px-1">
                {cart.reduce((acc, item) => acc + item.quantity, 0)}
              </span>
            )}
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
