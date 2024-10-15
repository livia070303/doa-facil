import React from 'react';

export function MostSearchedItems({ imgSrc, title, rating, reviews }) {
  return (
    <div className="flex flex-col items-center p-4 bg-white border border-gray-200 rounded-lg shadow-lg">
      <div className="relative">
        <img
          src={imgSrc}
          alt={title}
          className="w-full h-auto"
        />
        <button className="absolute top-2 right-2 bg-white p-2 rounded-full shadow-md">
          ❤️
        </button>
      </div>
      <div className="mt-4 text-center">
        <h3 className="text-lg font-medium">{title}</h3>
        <div className="flex justify-center items-center mt-2">
          {/* Renderizando as estrelas */}
          {[...Array(rating)].map((_, index) => (
            <span key={index} className="text-yellow-400 text-lg">★</span>
          ))}
          <span className="ml-2 text-gray-500">({reviews})</span>
        </div>
      </div>
    </div>
  );
}
