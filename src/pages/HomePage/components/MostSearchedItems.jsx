import React from 'react';

export function MostSearchedItems({ imgSrc, title }) {
  return (
    <div className="flex flex-col items-center p-6 bg-white border border-gray-200 rounded-lg shadow-lg w-full max-w-[280px]"> {/* Aumenta max-w */}
      <img
        src={imgSrc}
        alt={title}
        className="w-full h-48 object-contain rounded-t-lg" // Aumenta a altura da imagem
        style={{ maxHeight: '200px', minHeight: '150px' }} // Define uma altura padrão
      />
      <div className="mt-4 text-center">
        <h3 className="text-lg font-medium">{title}</h3>
      </div>
    </div>
  );
}
