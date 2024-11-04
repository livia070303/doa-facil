import React from 'react';
import ProductCard from './ProductCard';

const DonationProducts = ({ products, onRemove, onEdit }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {products.map(product => (
        <ProductCard
          key={product.id}
          product={product}
          onRemove={onRemove}
          onEdit={onEdit} // Passa a função de edição para o ProductCard
        />
      ))}
    </div>
  );
};

export default DonationProducts;
