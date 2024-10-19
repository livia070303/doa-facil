import React from 'react';
import { Link } from 'react-router-dom';

export function CategoryItem({ imgSrc, categoryName }) {
  return (
    <Link to={`/product-selection?category=${encodeURIComponent(categoryName)}`}>
    <div className="flex flex-col items-center w-[132px] h-[128px] rounded-full border-2 border-low-gray hover:border-azul-claro shadow-md">
      <img src={imgSrc} alt={categoryName} className="w-full h-full object-cover rounded-full" />
      <span className="mt-4 text-center text-azul-escuro font-bold">{categoryName}</span>
    </div>
    </Link>
  );
}
