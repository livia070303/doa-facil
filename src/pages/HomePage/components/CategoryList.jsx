import React from 'react';
import { CategoryItem } from './CategoryItem';

export function CategoryList() {
  const categories = [
    {
      id: 1,
      imgSrc: "/celular.png",
      categoryName: 'Eletrônicos',
    },
    {
      id: 2,
      imgSrc: "/poltrona.png",
      categoryName: 'Móveis',
    },
    {
      id: 3,
      imgSrc: "/roupas.png",
      categoryName: 'Roupas',
    },
    {
      id: 4,
      imgSrc: "/ferro.png",
      categoryName: 'Eletrodomésticos',
    },
    {
      id: 5,
      imgSrc: "/alimentos.png",
      categoryName: 'Alimentos',
    },
    {
      id: 6,
      imgSrc: "/sapato.png",
      categoryName: 'Sapatos',
    },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-8 mt-8 mb-16">
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
