import React, { useState } from 'react';
import Sidebar from './Components/Sidebar';
import ProductList from './Components/ProductList';
import SearchAndFilter from './Components/SearchAndFilter';
import Pagination from './Components/Pagination';
import { HeaderAndFooter, HeaderAndFooterContainer } from '../../components/Layouts/HeaderAndFooter';
import { products } from './data/ProductsData';

const ProductSelectionPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6;

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <HeaderAndFooter>
      <HeaderAndFooterContainer className="flex p-12 lg:p-24 flex-col gap-4">
        <div className="relative bg-white shadow min-h-screen">
          <div className="container mx-auto flex flex-col lg:flex-row py-10 space-y-10 lg:space-y-0 lg:space-x-10">
            <Sidebar />

            <main className="w-full lg:w-3/4">
              <SearchAndFilter />

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
