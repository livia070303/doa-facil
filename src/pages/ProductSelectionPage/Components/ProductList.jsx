import React from "react";
import ProductCard from "./ProductCard";
import { products } from "../data/productsData";

const ProductList = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
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
