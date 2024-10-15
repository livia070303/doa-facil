import React from 'react';

// Componente para cada produto relacionado
function RelatedProductItem({ imgSrc, productName, rating }) {
  return (
    <div className="flex flex-col items-center bg-white rounded-xl shadow-lg p-4">
      <img src={imgSrc} alt={productName} className="w-full h-auto object-cover" />
      <h4 className="mt-2 text-sm font-semibold text-gray-800">{productName}</h4>
      {/* Avaliação em estrelas */}
      <div className="flex mt-1">
        <div className="flex text-yellow-400">
          {[...Array(rating)].map((_, index) => (
            <span key={index} className="text-lg">★</span>
          ))}
          {[...Array(5 - rating)].map((_, index) => (
            <span key={index} className="text-gray-400">★</span>
          ))}
        </div>
      </div>
    </div>
  );
}

// Componente principal para a lista de produtos relacionados
export function RelatedProducts() {
  // Lista de produtos relacionados
  const products = [
    {
      imgSrc: "/geladeirapreta.png",
      productName: 'Geladeira Braste',
      rating: 4,
    },
    {
      imgSrc: "/TVled.png",
      productName: 'SmartTV de Led',
      rating: 4,
    },
    {
      imgSrc: "/maquinadelavar.png",
      productName: 'Máquina de Lavar Roupas',
      rating: 3,
    },
    {
      imgSrc: "/plantinhas.png",
      productName: 'Plantas decorativas',
      rating: 5,
    },
  ];

  return (
    <div className="mt-12">
      <h3 className="text-lg font-semibold text-gray-800">Produtos relacionados</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
        {products.map((product, index) => (
          <RelatedProductItem
            key={index}
            imgSrc={product.imgSrc}
            productName={product.productName}
            rating={product.rating}
          />
        ))}
      </div>
    </div>
  );
}
