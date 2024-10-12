import React from 'react';

const InterestProducts = ({ products }) => {
  return (
    <div className="bg-white rounded-lg border border-gray-300 shadow-md">
      <div className="p-4 border-b border-gray-300">
        <div className="grid grid-cols-2 gap-4 text-sm font-semibold text-gray-500 uppercase">
          <div>Produto</div>
          <div>Ação</div>
        </div>
      </div>
      {products.map(product => (
        <div key={product.id} className="p-4 flex items-center justify-between border-b border-gray-300">
          <div className="flex items-center gap-4">
            <img className="w-12 h-12 rounded-md" src={product.imgSrc} alt={product.name} />
            <span className="text-gray-700">{product.name}</span>
          </div>
          <button className="bg-red-500 text-white px-4 py-2 rounded-md text-sm font-semibold hover:bg-red-600 transition duration-300">
            Cancelar Solicitação
          </button>
        </div>
      ))}
    </div>
  );
};

export default InterestProducts;
