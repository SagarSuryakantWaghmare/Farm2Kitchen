import React from 'react';
import ProductCard from './ProductCard';

function ProductsChange({ selectedFilters, selectedCategory }) {
  // Sample products data
  const products = [
    { id: 1, name: "Fresh Farm Cow’s Milk", ourPrice: 6, marketPrice: 8, image: "../assets/Veg4.jpg", category: "Milk", rating: 4, reviews: 10, farmer: "Farm A" },
    { id: 2, name: "Creamy Butter", ourPrice: 13, marketPrice: 15, image: "../assets/Veg4.jpg", category: "Butter", rating: 5, reviews: 5, farmer: "Farm B" },
    { id: 3, name: "Chicken Eggs", ourPrice: 18, marketPrice: 20, image: "../assets/Veg4.jpg", category: "Eggs", rating: 3, reviews: 8, farmer: "Farm C" },
    // ... other products
  ];

  // Filter products based on selected category and filters
  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
    const matchesFilters = selectedFilters.length === 0 || selectedFilters.includes(product.category);

    return matchesCategory && matchesFilters;
  });

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {filteredProducts.length > 0 ? (
        filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product} // Pass the entire product object
          />
        ))
      ) : (
        <p className="col-span-full text-center">No products found</p>
      )}
    </div>
  );
}

export default ProductsChange;