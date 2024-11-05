import React from 'react';

const Pagination = ({ productsPerPage, totalProducts, currentPage, paginate }) => {
  const pageNumbers = [];

  // Calcula o número total de páginas com base no número de produtos e produtos por página
  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="pagination flex justify-center mt-6">
      <ul className="inline-flex items-center">
        {/* Botão de Página Anterior */}
        <li>
          <button
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1} // Desativa o botão "Anterior" se for a primeira página
            className={`px-3 py-2 rounded-l-md bg-gray-200 contrast:bg-custom-yellow contrast:border contrast:border-custom-black contrast:font-bold ${
              currentPage === 1 ? 'cursor-not-allowed' : 'hover:bg-gray-300'
            }`}
          >
            Anterior
          </button>
        </li>

        {/* Números das Páginas */}
        {pageNumbers.map((number) => (
          <li key={number}>
            <button
              onClick={() => paginate(number)}
              className={`px-3 py-2 ${
                currentPage === number
                  ? 'bg-blue-500 text-white' // Estiliza a página atual com cor diferente
                  : 'bg-gray-200 hover:bg-gray-300'
              }`}
            >
              {number}
            </button>
          </li>
        ))}

        {/* Botão de Próxima Página */}
        <li>
          <button
            onClick={() => paginate(currentPage + 1)}
            disabled={currentPage === pageNumbers.length} // Desativa o botão "Próxima" se for a última página
            className={`px-3 py-2 rounded-r-md bg-gray-200 contrast:bg-custom-yellow contrast:border contrast:border-custom-black contrast:font-bold ${
              currentPage === pageNumbers.length ? 'cursor-not-allowed' : 'hover:bg-gray-300'
            }`}
          >
            Próxima
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
