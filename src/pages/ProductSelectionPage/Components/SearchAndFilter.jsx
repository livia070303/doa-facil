import React from 'react';

const SearchAndFilter = () => {
  return (
    <div className="flex justify-between items-center mb-6">
      <input
        type="text"
        placeholder="Pesquisar..."
        className="border border-gray-300 rounded px-4 py-2 w-full max-w-xs"
      />
      <div className="flex items-center space-x-2">
        <span>Sort by:</span>
        <select className="border border-gray-300 rounded px-4 py-2">
          <option>Populares</option>
          <option>Recentes</option>
          {/* Other options */}
        </select>
      </div>
    </div>
  );
};

export default SearchAndFilter;
