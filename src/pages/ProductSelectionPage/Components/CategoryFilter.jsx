import React, { useState, useEffect } from 'react';

const CategoryFilter = ({ selectedCategory, setSelectedCategory }) => {
  const categories = [
    'Eletrônicos',
    'Móveis',
    'Roupas Femininas',
    'Roupas Masculinas',
    'Roupas Infantis',
    'Eletrodomésticos',
    'Mantimentos e Cuidados',
    'Sapatos',
    'Decoração',
    'Educação',
    'Todos'
  ];

  const toggleCategorySelection = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-bold">Categorias</h2>
      <ul className="space-y-2">
        {categories.map((category) => (
          <li
            key={category}
            className="flex items-center cursor-pointer"
            onClick={() => toggleCategorySelection(category)}
          >
            <span
              className={`${
                selectedCategory === category
                  ? 'bg-red-500 text-white contrast:bg-custom-yellow contrast:text-custom-black'
                  : 'bg-white border border-gray-300 contrast:border-custom-black'
              } w-5 h-5 rounded-full flex justify-center items-center`}
            >
              {selectedCategory === category && '●'}
            </span>
            <span className="ml-2">{category}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryFilter;
