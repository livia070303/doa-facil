import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { MostSearchedItems } from './MostSearchedItems';
import { mostRecentsDonations } from '../../../services/donationServices';

export function ProductList() {
  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    const fetchDonationsData = async () => {
      try {
        const limitItens = 4;
        const data = await mostRecentsDonations(limitItens);
        setProducts(data?.donations);
      } catch (error) {
        console.error('Erro ao buscar doações:', error);
      }
    };

    fetchDonationsData();
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"> {/* gap reduzido para aproximar os itens */}
      {products.map((product) => (
        <Link to={`/product/${product._id}`} key={product._id}>
          <MostSearchedItems
            imgSrc={product?.image?.[0]}
            title={product.productName}
          />
        </Link>
      ))}
    </div>
  );
}
