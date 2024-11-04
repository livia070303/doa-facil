// DonationItem.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const DonationItem = ({ image, title, description, id }) => {
  return (
    <div className="bg-white p-4 rounded shadow-md">
      <img src={image} alt={title} className="w-full h-auto object-cover rounded" />
      <h3 className="mt-2 text-lg font-semibold">{title}</h3>
      <p className="text-gray-600">{description}</p>
      {id ? <Link to={`/product/${id}`} key={id}>
        <div className="text-gray-700 text-sm mb-2">
          <div className={`bg-yellow-500 text-white text-xs rounded px-2 py-1 inline-block mt-2`}>
            + Detalhes
          </div>
        </div>
      </Link> : ''}
    </div>
  );
};

export default DonationItem;
