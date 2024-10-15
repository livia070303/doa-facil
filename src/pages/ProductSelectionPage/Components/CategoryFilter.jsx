import React, { useState } from 'react';

const CategoryFilter = () => {
  // Estado inicial para as categorias
  const [categories, setCategories] = useState([
    { id: 1, label: 'Eletrônicos', selected: true },
    { id: 2, label: 'Informática', selected: false },
    { id: 3, label: 'SmartPhone', selected: false },
    { id: 3, label: 'Roupas Femininas', selected: false },
    { id: 3, label: 'Roupas Masculinas', selected: false },
    { id: 3, label: 'Roupas Infantis', selected: false },
    { id: 3, label: 'Sapatos', selected: false },
    { id: 3, label: 'Decoração', selected: false },
    { id: 3, label: 'Móveis', selected: false },
    // Adicione mais categorias aqui
  ]);

  // Função para alternar a seleção de uma categoria
  const toggleCategorySelection = (id) => {
    setCategories((prevCategories) =>
      prevCategories.map((category) =>
        category.id === id
          ? { ...category, selected: !category.selected }
          : category
      )
    );
  };

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-bold">Category</h2>
      <ul className="space-y-2">
        {categories.map((category) => (
          <li
            key={category.id}
            className="flex items-center cursor-pointer"
            onClick={() => toggleCategorySelection(category.id)} // Permite a seleção por clique
          >
            <span
              className={`${
                category.selected
                  ? 'bg-red-500 text-white'
                  : 'bg-white border border-gray-300'
              } w-5 h-5 rounded-full flex justify-center items-center`}
            >
              {category.selected && '●'}
            </span>
            <span className="ml-2">{category.label}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryFilter;
