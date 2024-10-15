import React, { useState } from 'react';

function NavbarFilters({ onCategoryChange }) {
  const categories = ['Fruits', 'Vegetables', 'Dairy', 'Grains'];
  const [activeCategory, setActiveCategory] = useState(categories[0]); // Default active category

  const handleCategoryChange = (category) => {
    setActiveCategory(category); // Set active category
    onCategoryChange(category); // Notify parent component
  };

  return (
    <nav className="p-4">
      <h2 className="text-xl font-semibold">Select Category</h2>
      <div className="flex space-x-4">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => handleCategoryChange(category)}
            className={`rounded px-4 py-2 transition-colors duration-200 ${
              activeCategory === category
                ? 'bg-blue-600 text-white'
                : 'bg-blue-500 text-white hover:bg-blue-600'
            }`}
            aria-pressed={activeCategory === category} // ARIA attribute for accessibility
          >
            {category}
          </button>
        ))}
      </div>
    </nav>
  );
}

export default NavbarFilters;
