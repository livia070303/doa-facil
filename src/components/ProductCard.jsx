import React from 'react';

const ProductCard = ({ product, onRemove }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center">
      <img 
        src={product.imgSrc} 
        alt={product.name} 
        style={{ width: "200px", height: "200px", objectFit: "cover" }}
        className="mb-4"
      />
      <h3 className="text-lg font-semibold text-gray-700">{product.name}</h3>
      {product.status && (
        <p className={`text-sm ${product.status === 'DISPONÍVEL' ? 'text-green-600' : 'text-red-600'}`}>
          {product.status}
        </p>
      )}
      {/* Botão de excluir para produtos disponíveis */}
      {product.status === 'DISPONÍVEL' && onRemove && (
        <button
          onClick={() => onRemove(product.id)}
          className="mt-2 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
        >
          Excluir
        </button>
      )}
    </div>
  );
};

export default ProductCard;
