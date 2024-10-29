import React from 'react';

const SearchAndFilter = ({search, setSearch , orderBy, setOrderBy}) => {
  return (
    <div className="flex justify-between items-center mb-6">
      <input
        type="text"
        placeholder="Pesquisar..."
        className="border border-gray-300 rounded px-4 py-2 w-full max-w-xs"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="flex items-center space-x-2">
        <span>Ordenar por:</span>
        <button type='button' className="border border-gray-300 rounded px-4 py-2" onClick={(e) => setOrderBy((prevOrderBy) => (prevOrderBy === "recents" ? "" : "recents"))}>
          Recentes
        </button>
      </div>
    </div>
  );
};

export default SearchAndFilter;
