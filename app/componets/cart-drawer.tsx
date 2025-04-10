/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { ShoppingCart, X } from "lucide-react";
import { useCart } from "./cart-context";
import { useState } from "react";

export default function CartDrawer({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const { cart, removeFromCart, addToCart } = useCart();
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const MIN_ORDER_VALUE = 350;

  const [customerName, setCustomerName] = useState("");
  const [customerEmail, setCustomerEmail] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [errors, setErrors] = useState<{
    name?: string;
    email?: string;
    phone?: string;
  }>({});

  function validateForm() {
    const newErrors: typeof errors = {};

    if (customerName.trim().length < 3) {
      newErrors.name = "Informe um nome válido.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(customerEmail)) {
      newErrors.email = "Informe um e-mail válido.";
    }

    const numericPhone = customerPhone.replace(/\D/g, "");
    if (numericPhone.length < 10) {
      newErrors.phone = "Informe um telefone válido.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  return (
    <div
      className={`fixed top-0 right-0 h-full w-96 bg-white shadow-xl z-[100] transform transition-transform duration-300 border-l border-gray-200 flex flex-col ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      {/* Header */}
      <div className="flex justify-between items-center px-6 py-4 border-b border-gray-200 bg-gray-50">
        <h2 className="text-xl flex gap-x-2 font-semibold text-gray-800">
          <ShoppingCart /> Carrinho
        </h2>
        <button onClick={onClose} className="text-gray-600 hover:text-gray-400">
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Conteúdo */}
      <div className="flex-1 p-2 overflow-y-auto">
        {cart.length === 0 ? (
          <p className="text-center text-gray-500 mt-10">
            Seu carrinho está vazio.
          </p>
        ) : (
          <div className="space-y-4 p-4">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-start border-b pb-3"
              >
                <div className="w-3/4">
                  <p className="font-semibold text-sm break-words leading-snug">
                    {item.name}
                  </p>
                  <p className="text-sm text-gray-600">
                    R$ {item.price.toFixed(2)}
                  </p>
                </div>

                <div className="flex items-center space-x-1">
                  <button
                    className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                    onClick={() => removeFromCart(item.id)}
                  >
                    –
                  </button>
                  <span className="text-sm w-5 text-center">
                    {item.quantity}
                  </span>

                  <button
                    className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                    onClick={() => addToCart({ ...item, quantity: 1 })}
                  >
                    +
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Footer */}
      {cart.length > 0 && (
        <div className="px-6 py-4 border-t border-gray-200 bg-white">
          <div className="flex justify-between items-center text-lg font-semibold mb-2">
            <span>Total:</span>
            <span className="text-blue-600">R$ {total.toFixed(2)}</span>
          </div>

          {/* Regra de pedido mínimo */}
          {total < MIN_ORDER_VALUE ? (
            <div className="text-sm text-red-700 bg-red-50 border border-red-200 p-2 rounded mb-4 text-center">
              Faltam <strong>R$ {(MIN_ORDER_VALUE - total).toFixed(2)}</strong>{" "}
              para atingir o pedido mínimo de R${MIN_ORDER_VALUE.toFixed(2)} e
              liberar a finalização.
            </div>
          ) : (
            <div className="text-sm text-green-700 bg-green-50 border border-green-200 p-2 rounded mb-4 text-center">
              Pedido mínimo atingido! Você pode finalizar sua compra com frete
              grátis 🎉
            </div>
          )}
          <div className="space-y-3 mb-4">
            <div>
              <input
                type="text"
                placeholder="Nome completo"
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                className={`w-full px-4 py-2 border text-sm rounded-md ${
                  errors.name ? "border-red-500" : "border-gray-300"
                } focus:outline-none focus:ring-2 focus:ring-blue-200`}
              />
              {errors.name && (
                <p className="text-red-500 text-xs mt-1">{errors.name}</p>
              )}
            </div>

            <div>
              <input
                type="email"
                placeholder="E-mail"
                value={customerEmail}
                onChange={(e) => setCustomerEmail(e.target.value)}
                className={`w-full px-4 py-2 border text-sm rounded-md ${
                  errors.email ? "border-red-500" : "border-gray-300"
                } focus:outline-none focus:ring-2 focus:ring-blue-200`}
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">{errors.email}</p>
              )}
            </div>

            <div>
              <input
                type="tel"
                placeholder="Telefone"
                value={customerPhone}
                onChange={(e) => {
                  const raw = e.target.value.replace(/\D/g, ""); // remove tudo que não for número
                  const formatted = raw
                    .replace(/^(\d{2})(\d)/, "($1) $2")
                    .replace(/(\d{5})(\d)/, "$1-$2")
                    .slice(0, 15); // limita a 15 caracteres com máscara
                  setCustomerPhone(formatted);
                }}
                className={`w-full px-4 py-2 border text-sm rounded-md ${
                  errors.phone ? "border-red-500" : "border-gray-300"
                } focus:outline-none focus:ring-2 focus:ring-blue-200`}
              />
              {errors.phone && (
                <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
              )}
            </div>
          </div>

          <button
            disabled={
              // total < MIN_ORDER_VALUE ||
              !customerName || !customerEmail || !customerPhone
            }
            onClick={async () => {
              if (!validateForm()) return;

              const response = await fetch("/api/create_preference", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  cart,
                  customerName,
                  customerEmail,
                  customerPhone,
                }),
              });

              const data = await response.json();
              window.location.href = data.init_point;
            }}
            className={`w-full font-bold py-3 rounded-lg transition duration-200 ${
              total < MIN_ORDER_VALUE ||
              !customerName ||
              !customerEmail ||
              !customerPhone
                ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700 text-white"
            }`}
          >
            Finalizar compra
          </button>
        </div>
      )}
    </div>
  );
}
