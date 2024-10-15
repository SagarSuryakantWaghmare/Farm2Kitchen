import React from 'react';
import ProductCard from './ProductCard';

function ProductsChange({ selectedFilters, selectedCategory }) {
  // Sample products data
  const products = [
    { id: 1, name: "Fresh Farm Cow’s Milk", price: 6, marketPrice: 8, image: "../assets/Veg4.jpg", category: "Milk" },
    { id: 2, name: "Creamy Butter", price: 13, marketPrice: 15, image: "../assets/Veg4.jpg", category: "Butter" },
    { id: 3, name: "Chicken Eggs", price: 18, marketPrice: 20, image: "../assets/Veg4.jpg", category: "Eggs" },
    // ... other products
  ];

  // Filter products based on selected category and filters
  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
    const matchesFilters = selectedFilters.length === 0 || selectedFilters.includes(product.category);

    return matchesCategory && matchesFilters;
  });

  return (
    <div className="products-container">
      {filteredProducts.length > 0 ? (
        filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            name={product.name}
            price={product.price}
            marketPrice={product.marketPrice}
            image={product.image}
          />
        ))
      ) : (
        <p>No products found</p>
      )}
    </div>
  );
}

export default ProductsChange;
