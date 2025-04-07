/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Image from "next/image";
import React from "react";
import { useCart } from "./cart-context";
import { ShoppingCart } from "lucide-react";
import { useCartDrawer } from "./cart-drawer-context";

interface Product {
  id: number;
  name: string;
  description: string;
  price: string;
  url?: any;
}

const ProductCard: React.FC<{ product: Product; isLoading: boolean }> = ({
  product,
  isLoading,
}) => {
  const imageUrl = product.url;
  const { addToCart } = useCart();

  const { openDrawer } = useCartDrawer();

  return (
    <div className="p-4 border border-gray-200 rounded-xl shadow-md bg-white flex flex-col justify-between min-h-[360px] transition-transform duration-200 hover:-translate-y-1 hover:shadow-xl">
      {/* <div className="p-4 border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition duration-300 bg-white flex flex-col justify-between min-h-[400px]"> */}
      {isLoading ? (
        <div className="animate-pulse space-y-4 flex-1">
          <div className="h-40 bg-gray-300 rounded-lg"></div>
          <div className="h-6 bg-gray-300 rounded w-3/4"></div>
          <div className="h-4 bg-gray-300 rounded w-1/2"></div>
          <div className="h-8 bg-gray-300 rounded w-1/2"></div>
        </div>
      ) : (
        <>
          {!imageUrl ? (
            <div className="h-40 bg-gray-100 rounded-lg"></div>
          ) : (
            <Image
              src={imageUrl}
              alt={product.name}
              width={200}
              height={200}
              className="h-40 w-full object-contain rounded-lg mb-4"
            />
          )}

          <div className="flex-1 flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-semibold text-gray-800">
                {product.name}
              </h3>
              <p className="text-sm text-gray-500">{product.description}</p>
              <p className="mt-2 text-xl font-bold text-blue-600">
                R${product.price}
              </p>
            </div>

            <button
              onClick={() => {
                addToCart({
                  id: product.id.toString(),
                  name: product.name,
                  price: Number(product.price),
                  image: imageUrl || "",
                  quantity: 1,
                });
                openDrawer();
              }}
              className="mt-4 w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-xl transition duration-200 cursor-pointer"
            >
              <ShoppingCart className="w-5 h-5" /> Adicionar ao carrinho
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default ProductCard;
