import React from 'react';

const ProductCard = ({ imageUrl, title, reviews, badge }) => {
    return (
        <div className="bg-white p-4 rounded border shadow-sm">
            <img src={imageUrl} alt={title} className="w-full mb-4" />
            <h3 className="text-gray-700 text-sm">{title}</h3>
            <div className="text-xs text-gray-500">({reviews} reviews)</div>
            {badge && (
                <div className={`bg-${badge.color}-500 text-white text-xs rounded px-2 py-1 inline-block mt-2`}>
                    {badge.label}
                </div>
            )}
        </div>
    );
};

export default ProductCard;
