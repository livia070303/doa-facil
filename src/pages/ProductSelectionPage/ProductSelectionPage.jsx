import React, { useState } from 'react';
import Sidebar from './Components/Sidebar';
import ProductList from './Components/ProductList';
import SearchAndFilter from './Components/SearchAndFilter';
import Pagination from './Components/Pagination';
import { HeaderAndFooter, HeaderAndFooterContainer } from '../../components/Layouts/HeaderAndFooter';
import { products } from './data/ProductsData';

const ProductSelectionPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8;

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <HeaderAndFooter>
      {/* Layout flexível com espaçamento que se adapta ao tamanho da tela */}
      <HeaderAndFooterContainer className="flex p-4 sm:p-8 md:p-12 lg:p-24 flex-col gap-4">
        <div className="relative bg-white shadow min-h-screen">
          <div className="container mx-auto flex flex-col lg:flex-row py-6 md:py-10 space-y-6 lg:space-y-0 lg:space-x-6">
            {/* Sidebar ajustada para se esconder em telas pequenas e aparecer em telas maiores */}
            <Sidebar className="w-full lg:w-1/4 hidden lg:block" />

            {/* Conteúdo principal ocupando toda a tela em dispositivos móveis */}
            <main className="w-full lg:w-3/4">
              {/* Componentes de busca e filtro no topo */}
              <SearchAndFilter />

              {/* Lista de produtos */}
              <ProductList products={currentProducts} />

              {/* Paginação */}
              <Pagination
                productsPerPage={productsPerPage}
                totalProducts={products.length}
                currentPage={currentPage}
                paginate={paginate}
              />
            </main>
          </div>
        </div>
      </HeaderAndFooterContainer>
    </HeaderAndFooter>
  );
};

export default ProductSelectionPage;
