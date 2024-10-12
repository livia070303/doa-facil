import React from 'react';

const DonationProducts = ({ products }) => {
  return (
    <div className="bg-white rounded-lg border border-gray-300 shadow-md">
      <div className="p-4 border-b border-gray-300">
        <div className="grid grid-cols-3 gap-4 text-sm font-semibold text-gray-500 uppercase">
          <div>Produto</div>
          <div>Disponibilidade</div>
          <div>Ação</div>
        </div>
      </div>
      {products.map(product => (
        <div key={product.id} className="grid grid-cols-3 gap-4 p-4 items-center border-b border-gray-300">
          <div className="flex items-center gap-4">
            <img className="w-16 h-16 rounded-md" src={product.imgSrc} alt={product.name} />
            <span className="text-gray-700">{product.name}</span>
          </div>
          <div className={`font-semibold text-center ${product.status === 'DISPONÍVEL' ? 'text-green-600' : 'text-red-600'}`}>
            {product.status}
          </div>
          <div className="text-center">
            <button className="bg-red-500 text-white px-4 py-2 rounded-md text-sm font-semibold hover:bg-red-600 transition duration-300">
              Cancelar Doação
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DonationProducts;

