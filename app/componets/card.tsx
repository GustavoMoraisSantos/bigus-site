"use client";
import Image from "next/image";
import React from "react";
import { useCart } from "./cart-context";

interface Product {
  id: number;
  name: string;
  description: string;
  price: string;
  url?: string;
}

const ProductCard: React.FC<{ product: Product; isLoading: boolean }> = ({
  product,
  isLoading,
}) => {
  const imageUrl = product.url;

  const { addToCart } = useCart();

  return (
    <div className="p-4 border rounded-lg shadow-lg bg-white flex flex-col justify-between min-h-[360px]">
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
            <div className="h-40 bg-gray-300 rounded-lg"></div>
          ) : (
            <Image
              src={imageUrl}
              alt={product.name}
              className="h-40 w-full object-contain rounded-lg mb-4"
            />
          )}

          <div className="flex-1 flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-semibold text-gray-700">
                {product.name}
              </h3>
              <p className="text-sm text-gray-500">{product.description}</p>
              <p className="mt-2 text-xl font-bold text-gray-900">
                R${product.price}
              </p>
            </div>

            <button
              onClick={() =>
                addToCart({
                  id: product.id.toString(),
                  name: product.name,
                  price: Number(product.price),
                  image: imageUrl || "",
                  quantity: 1,
                })
              }
              className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition duration-200 cursor-pointer"
            >
              Adicionar ao carrinho
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default ProductCard;
