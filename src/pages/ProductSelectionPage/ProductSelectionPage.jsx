import React from 'react';
import Breadcrumb from './Components/Breadcrumb';
import Sidebar from './Components/Sidebar';
import ProductList from './Components/ProductList';
import SearchAndFilter from './Components/SearchAndFilter';
import { HeaderAndFooter, HeaderAndFooterContainer } from '../../components/Layouts/HeaderAndFooter'; // Import correto

const ProductSelectionPage = () => {
  return (
    // Usa o HeaderAndFooter para envolver toda a página
    <HeaderAndFooter>
      {/* Conteúdo principal */}
      <HeaderAndFooterContainer className="flex p-12 lg:p-24 flex-col gap-4">
        <div className="relative bg-white shadow min-h-screen">
          {/* Breadcrumb */}
          <Breadcrumb />

          {/* Main Content */}
          <div className="container mx-auto flex flex-col lg:flex-row py-10 space-y-10 lg:space-y-0 lg:space-x-10">
            {/* Sidebar */}
            <Sidebar />

            {/* Product Listings */}
            <main className="w-full lg:w-3/4">
              <SearchAndFilter />
              <ProductList />
            </main>
          </div>
        </div>
      </HeaderAndFooterContainer>
    </HeaderAndFooter>
  );
};

export default ProductSelectionPage;
