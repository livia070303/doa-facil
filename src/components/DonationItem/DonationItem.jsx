// DonationItem.jsx
import React from 'react';

const DonationItem = ({ image, title, description }) => {
  return (
    <div className="bg-white p-4 rounded shadow-md">
      <img src={image} alt={title} className="w-full h-auto object-cover rounded" />
      <h3 className="mt-2 text-lg font-semibold">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default DonationItem;
