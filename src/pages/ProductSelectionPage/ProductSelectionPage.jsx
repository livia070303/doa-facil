import React, { useState, useEffect } from 'react';
import Sidebar from './Components/Sidebar';
import ProductList from './Components/ProductList';
import SearchAndFilter from './Components/SearchAndFilter';
import Pagination from './Components/Pagination';
import { HeaderAndFooter, HeaderAndFooterContainer } from '../../components/Layouts/HeaderAndFooter';
import { products } from './data/ProductsData';
import { useLocation } from 'react-router-dom';

const ProductSelectionPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8;

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Captura do parâmetro de categoria na URL
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const initialCategory = params.get('category');

  return (
    <HeaderAndFooter>
      <HeaderAndFooterContainer className="flex p-4 sm:p-8 md:p-12 lg:p-24 flex-col gap-4">
        <div className="relative bg-white shadow min-h-screen">
          <div className="container mx-auto flex flex-col lg:flex-row py-6 md:py-10 space-y-6 lg:space-y-0 lg:space-x-6">
            <Sidebar className="w-full lg:w-1/4 hidden lg:block" initialCategory={initialCategory} />

            <main className="w-full lg:w-3/4">
              <SearchAndFilter initialCategory={initialCategory} />

              <ProductList products={currentProducts} />

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
