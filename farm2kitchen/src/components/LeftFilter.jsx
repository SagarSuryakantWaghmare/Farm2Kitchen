// LeftSideFilters.jsx
import React from 'react';

function LeftFilter({ onFilterChange, selectedFilters = [] }) {
  const categories = ['Milk', 'Butter', 'Cheese', 'Eggs'];
  const reviews = ['⭐⭐⭐⭐ & up', '⭐⭐⭐ & up'];

  const handleCheckboxChange = (filter) => {
    onFilterChange(filter);
  };

  return (
    <div className="w-1/4 p-4 border-r">
      <h2 className="text-xl font-semibold">Filters</h2>
      
      {/* Category Filters */}
      <div className="mt-4">
        <h3 className="text-lg font-medium">Category</h3>
        {categories.map((category) => (
          <label className="block mt-2" key={category}>
            <input
              type="checkbox"
              className="mr-2"
              checked={selectedFilters.includes(category)} // Ensure selectedFilters is defined
              onChange={() => handleCheckboxChange(category)}
            />
            {category}
          </label>
        ))}
      </div>
      
      {/* Customer Reviews Filters */}
      <div className="mt-6">
        <h3 className="text-lg font-medium">Customer Reviews</h3>
        {reviews.map((review) => (
          <label className="block mt-2" key={review}>
            <input
              type="checkbox"
              className="mr-2"
              checked={selectedFilters.includes(review)} // Ensure selectedFilters is defined
              onChange={() => handleCheckboxChange(review)}
            />
            {review}
          </label>
        ))}
      </div>
    </div>
  );
}

export default LeftFilter;
