// src/pages/HomePage/components/CategoryItem.jsx

import React from 'react';
import { Link } from 'react-router-dom';

export function CategoryItem({ imgSrc, categoryName }) {
  return (
    <Link to={`/product-selection?category=${encodeURIComponent(categoryName)}`}>
      <div className="flex flex-col items-center w-32">
        <div className="w-32 h-32 rounded-full border-2 border-low-gray hover:border-azul-claro shadow-md overflow-hidden flex items-center justify-center">
          <img src={imgSrc} alt={categoryName} className="w-full h-full object-cover" />
        </div>
        <span className="mt-2 text-center text-azul-escuro font-bold">{categoryName}</span>
      </div>
    </Link>
  );
}
