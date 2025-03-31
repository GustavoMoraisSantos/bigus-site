import React from 'react';

interface Product {
  name: string;
  description: string;
  price: string;
}

const ProductCard: React.FC<{ product: Product; isLoading: boolean }> = ({ product, isLoading }) => {
  return (
    <div className="p-4 border rounded-lg shadow-lg bg-white">
      {isLoading ? (
        <div className="animate-pulse space-y-4">
          <div className="h-40 bg-gray-300 rounded-lg"></div>
          <div className="h-6 bg-gray-300 rounded w-3/4"></div>
          <div className="h-4 bg-gray-300 rounded w-1/2"></div>
          <div className="h-8 bg-gray-300 rounded w-1/2"></div>
        </div>
      ) : (
        <>
          <div className="h-40 bg-gray-200 rounded-lg mb-4"></div>
          <h3 className="text-lg font-semibold text-gray-700">{product.name}</h3>
          <p className="text-sm text-gray-500">{product.description}</p>
          <p className="mt-2 text-xl font-bold text-gray-900">R${product.price}</p>
        </>
      )}
    </div>
  );
};

export default ProductCard;
