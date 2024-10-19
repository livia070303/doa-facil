import React from 'react';
import CategoryFilter from './CategoryFilter';
import PopularBrands from './PopularBrands';
import TagList from './TagList';

const Sidebar = ({ initialCategory }) => {
  return (
    <aside className="w-full lg:w-1/4 space-y-10">
      <CategoryFilter initialCategory={initialCategory} />
      <PopularBrands />
      <TagList />
    </aside>
  );
};

export default Sidebar;