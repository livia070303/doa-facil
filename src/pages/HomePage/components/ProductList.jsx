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
    <div className="flex flex-col items-center gap-4 lg:grid lg:grid-cols-4">
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
