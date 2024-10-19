import React, { useState } from 'react';

const PopularBrands = () => {
  
  const [brands, setBrands] = useState([
    { id: 1, label: 'Apple', selected: false },
    { id: 2, label: 'Google', selected: false },
    { id: 3, label: 'Microsoft', selected: false },
    { id: 4, label: 'Samsung', selected: false },
    { id: 5, label: 'Consul', selected: false },
    { id: 6, label: 'Brastemp', selected: false },
    { id: 7, label: 'Dell', selected: false },
    { id: 8, label: 'LG', selected: false },
    // Adicione mais marcas aqui
  ]);

  // Função para alternar a seleção de uma marca
  const toggleBrandSelection = (id) => {
    setBrands((prevBrands) =>
      prevBrands.map((brand) =>
        brand.id === id ? { ...brand, selected: !brand.selected } : brand
      )
    );
  };

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-bold">Marcas Populares</h2>
      <ul className="space-y-2">
        {brands.map((brand) => (
          <li
            key={brand.id}
            className="flex items-center cursor-pointer"
            onClick={() => toggleBrandSelection(brand.id)} // Permite a seleção por clique
          >
            <span
              className={`${
                brand.selected ? 'bg-red-500' : 'bg-white border border-gray-300'
              } w-5 h-5 rounded-sm`}
            ></span>
            <span className="ml-2">{brand.label}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PopularBrands;
