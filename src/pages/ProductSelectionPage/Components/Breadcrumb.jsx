import React from 'react';

const Breadcrumb = () => {
  return (
    <nav className="bg-gray-100 py-4">
      <div className="container mx-auto flex space-x-2 items-center">
        <span className="text-sm text-gray-500">Home</span>
        <span className="text-sm text-gray-500">Shop</span>
        <span className="text-sm text-gray-500">Shop Grid</span>
        <span className="text-sm text-blue-600 font-semibold">Electronics Devices</span>
      </div>
    </nav>
  );
};

export default Breadcrumb;
