import React from 'react';

const TagList = () => {
  const tags = [
    'Game',
    'iPhone',
    'TV',
    'Dell',
    'PlayStation',
    // Add more tags
  ];

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-bold">Tags Populares</h2>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag, index) => (
          <span key={index} className="border border-gray-300 px-3 py-1 rounded-sm">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default TagList;
