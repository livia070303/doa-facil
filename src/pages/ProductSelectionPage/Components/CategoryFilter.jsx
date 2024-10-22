import React, { useState, useEffect } from 'react';

const CategoryFilter = ({ initialCategory }) => {
  const [categories, setCategories] = useState([
    { id: 1, label: 'Eletrônicos', selected: false },
    { id: 2, label: 'Móveis', selected: false },
    { id: 3, label: 'Roupas', selected: false },
    { id: 4, label: 'Roupas Femininas', selected: false },
    { id: 5, label: 'Roupas Masculinas', selected: false },
    { id: 6, label: 'Roupas Infantis', selected: false },
    { id: 7, label: 'Eletrodomésticos', selected: false },
    { id: 8, label: 'Alimentos', selected: false },
    { id: 9, label: 'Sapatos', selected: false },
    { id: 10, label: 'Decoração', selected: false },
    { id: 11, label: 'Educação', selected: false },
    
    // Adicione mais categorias aqui
  ]);

  // Atualiza a seleção inicial com base na categoria passada
  useEffect(() => {
    if (initialCategory) {
      setCategories((prevCategories) =>
        prevCategories.map((category) =>
          category.label === initialCategory
            ? { ...category, selected: true }
            : category
        )
      );
    }
  }, [initialCategory]);

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
      <h2 className="text-lg font-bold">Categorias</h2>
      <ul className="space-y-2">
        {categories.map((category) => (
          <li
            key={category.id}
            className="flex items-center cursor-pointer"
            onClick={() => toggleCategorySelection(category.id)}
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
