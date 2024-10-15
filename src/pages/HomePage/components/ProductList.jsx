import React from 'react';
import { Link } from 'react-router-dom';
import { MostSearchedItems } from './MostSearchedItems';

export function ProductList() {
  // Aqui você pode manter os produtos como uma lista de objetos para facilitar a manutenção
  const products = [
    {
      id: 1,
      imgSrc: "/jacket.png",
      title: 'Jaqueta de frio rosa',
      rating: 5,
      reviews: 65,
    },
    {
      id: 2,
      imgSrc: "/handbag.png",
      title: 'Bolsa de mão similar a Gucci',
      rating: 5,
      reviews: 65,
    },
    {
      id: 3,
      imgSrc: "/printer.png",
      title: 'Impressora HP multifuncional',
      rating: 5,
      reviews: 65,
    },
    {
      id: 4,
      imgSrc: "/book-shelf.png",
      title: 'Estante para livros pequena',
      rating: 5,
      reviews: 65,
    },
  ];

  return (
    <div className="flex flex-col items-center gap-4 lg:grid lg:grid-cols-4">
      {products.map((product) => (
        <Link to={`/product/${product.id}`} key={product.id}>
          <MostSearchedItems
            imgSrc={product.imgSrc}
            title={product.title}
            rating={product.rating}
            reviews={product.reviews}
          />
        </Link>
      ))}
    </div>
  );
}
