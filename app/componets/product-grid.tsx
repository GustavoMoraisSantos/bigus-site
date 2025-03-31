'use client'
import React, { useEffect, useState } from 'react';
import ProductCard from './card';
import { mockProducts } from '../mock-produtos';

const ProductGrid = () => {
  const [products, setProducts] = useState<{ id: number; name: string; description: string; price: string }[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Simulando o carregamento dos produtos
  useEffect(() => {
    setTimeout(() => {
      setProducts(mockProducts);
      setIsLoading(false);
    }, 2000); // Simulando 2 segundos de carregamento
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-x-10 px-10 gap-y-10 p-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} isLoading={isLoading} />
      ))}
    </div>
  );
};

export default ProductGrid;
