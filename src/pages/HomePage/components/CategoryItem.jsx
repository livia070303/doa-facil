import React from 'react';

export function CategoryItem({ imgSrc, categoryName }) {
  return (
    <div className="flex flex-col items-center w-[132px] h-[128px] rounded-full border-2 border-low-gray hover:border-azul-claro shadow-md">
      <img src={imgSrc} alt={categoryName} className="w-full h-full object-cover rounded-full" />
      <span className="mt-2 text-center text-black font-medium">{categoryName}</span>
    </div>
  );
}
