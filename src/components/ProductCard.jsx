import React from 'react';

const ProductCard = ({ product, onRemove, onEdit }) => {
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
      {/* Botões de editar e excluir para produtos disponíveis */}
      {product.status === 'DISPONÍVEL' && (
        <div className="mt-2 flex space-x-2">
          {onRemove && (
            <button
              onClick={() => onRemove(product.id)}
              className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
            >
              Excluir
            </button>
          )}
          {onEdit && (
            <button
              onClick={() => onEdit(product.id)}
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            >
              Editar
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default ProductCard;
