import React from "react";
import ProductCard from "./ProductCard";

// Agora o componente recebe a lista de produtos filtrada como prop
const ProductList = ({ products }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          imageUrl={product.imageUrl}
          title={product.title}
          reviews={product.reviews}
          badge={product.badge}
        />
      ))}
    </div>
  );
};

export default ProductList;
