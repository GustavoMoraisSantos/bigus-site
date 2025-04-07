"use client";

import { X } from "lucide-react";
import { useCart } from "./cart-context";

export default function CartDrawer({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const { cart, removeFromCart, addToCart } = useCart();

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div
      className={`fixed top-0 right-0 h-full w-80 bg-white shadow-lg z-[100] transform transition-transform duration-300 ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="flex justify-between items-center p-4 border-b border-gray-300">
        <h2 className="text-xl font-bold">Carrinho</h2>
        <button onClick={onClose}>
          <X className="cursor-pointer hover:text-gray-400" />
        </button>
      </div>

      <div className="p-4 space-y-4 overflow-y-auto h-full">
        {cart.length === 0 && (
          <p className="text-center text-gray-600">Seu carrinho está vazio.</p>
        )}

        {cart.map((item) => (
          <div
            key={item.id}
            className="flex justify-between items-center border-b pb-2"
          >
            <div>
              <p className="font-semibold">{item.name}</p>
              <p className="text-sm text-gray-600">
                R$ {item.price.toFixed(2)}
              </p>
            </div>

            <div className="flex items-center space-x-2">
              <button
                className="px-2 bg-gray-200 rounded text-lg"
                onClick={() => addToCart({ ...item, quantity: 1 })}
              >
                +
              </button>
              <span className="text-sm">{item.quantity}</span>
              <button
                className="px-2 bg-gray-200 rounded text-lg"
                onClick={() => removeFromCart(item.id)}
              >
                –
              </button>
            </div>
          </div>
        ))}
        {cart.length > 0 && (
          <>
            <div className="flex justify-between text-lg font-semibold px-1">
              <span>Total:</span>
              <span>R$ {total.toFixed(2)}</span>
            </div>
            <button
              onClick={async () => {
                const response = await fetch("/api/create_preference", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify({ cart }),
                });
                const data = await response.json();
                window.location.href = data.init_point;
              }}
              className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Finalizar compra
            </button>
          </>
        )}
      </div>
    </div>
  );
}
