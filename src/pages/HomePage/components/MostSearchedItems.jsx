import React from 'react';

export function MostSearchedItems({ imgSrc, title }) {
  return (
    <div className="flex flex-col items-center p-4 bg-white border border-gray-200 rounded-lg shadow-lg w-full max-w-[220px]">
      <img
        src={imgSrc}
        alt={title}
        className="w-full h-40 object-contain rounded-t-lg"
        style={{ maxHeight: '160px', minHeight: '120px' }}
      />
      <div className="mt-4 text-center">
        <h3 className="text-md font-medium">{title}</h3>
      </div>
    </div>
  );
}
