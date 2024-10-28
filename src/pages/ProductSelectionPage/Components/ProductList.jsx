import React from "react";
import ProductCard from "./ProductCard";

// Componente que recebe a lista de produtos filtrada como prop
const ProductList = ({ products }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard
          key={product._id}
          imageUrl={product.image}
          title={product.productName}
          badgeCondition={ { label: product.condition, color: "red" }}
          badgeQuantity={ { label: product.quantity, color: "blue" }}
          donor={product.donor}
          _id={product._id}
        />
      ))}
    </div>
  );
};

export default ProductList;
