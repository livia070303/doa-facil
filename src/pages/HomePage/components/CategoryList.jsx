import React from 'react';
import { CategoryItem } from './CategoryItem';

export function CategoryList() {
  // Aqui você pode definir a lista de categorias como um array de objetos
  const categories = [
    {
      id: 1,
      imgSrc: "/iphone.png",
      categoryName: 'Eletrônicos',
    },
    {
      id: 2,
      imgSrc: "/furniture.png",
      categoryName: 'Móveis',
    },
    {
      id: 3,
      imgSrc: "/plants.png",
      categoryName: 'Decoração',
    },
    {
      id: 4,
      imgSrc: "/lavaeseca.png",
      categoryName: 'Eletrodomésticos',
    },
  ];

  return (
    <div className="flex flex-col items-center gap-4 lg:grid lg:grid-cols-4">
      {categories.map((category) => (
        <CategoryItem
          key={category.id}
          imgSrc={category.imgSrc}
          categoryName={category.categoryName}
        />
      ))}
    </div>
  );
}
