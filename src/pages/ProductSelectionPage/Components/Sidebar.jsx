import React from 'react';
import CategoryFilter from './CategoryFilter';
import PopularBrands from './PopularBrands';
import TagList from './TagList';

const Sidebar = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <aside className="w-full lg:w-1/4 space-y-10">
      <CategoryFilter selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
    </aside>
  );
};

export default Sidebar;