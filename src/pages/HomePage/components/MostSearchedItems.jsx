import React from 'react';

export function MostSearchedItems({ imgSrc, title }) {
  return (
    <div className="flex flex-col items-center p-4 bg-white border border-gray-200 rounded-lg shadow-lg w-full max-w-[200px]">
      <div className="relative">
        <img
          src={imgSrc}
          alt={title}
          className="w-full h-40 object-contain rounded-t-lg" // Redimensiona sem cortes
          style={{ maxHeight: '160px', minHeight: '100px' }} // Define uma altura padrão
        />
      </div>
      <div className="mt-4 text-center">
        <h3 className="text-lg font-medium">{title}</h3>
      </div>
    </div>
  );
}
