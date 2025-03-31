export const mockProducts = Array.from({ length: 25 }, (_, index) => ({
    id: index + 1,
    name: `Produto de Limpeza ${index + 1}`,
    description: `Este é um produto de limpeza muito eficaz. Ele ajuda a remover sujeiras e manchas difíceis.`,
    price: (Math.random() * 50 + 10).toFixed(2), // preço aleatório entre 10 e 60
  }));
  