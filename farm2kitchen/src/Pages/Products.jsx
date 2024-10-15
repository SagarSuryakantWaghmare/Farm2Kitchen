// ProductPage.jsx
import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';
import { FaSearch } from 'react-icons/fa'; // Import search icon from react-icons
import Apple from '../assets/Apple.jpg'
import Banana from '../assets/Banana.jpg';
import Carrot from '../assets/Carrot.jpg';
const allProducts = [
  { id: 1, name: 'Apple', image: Apple, ourPrice: 750, marketPrice: 900, rating: 4, reviews: 20, category: 'Fruits', farmerName: 'Rajesh Kumar' },
  { id: 2, name: 'Banana', image: Banana, ourPrice: 600, marketPrice: 750, rating: 5, reviews: 15, category: 'Fruits', farmerName: 'Sita Devi' },
  { id: 3, name: 'Carrot', image: Carrot, ourPrice: 300, marketPrice: 450, rating: 4, reviews: 10, category: 'Vegetables', farmerName: 'Ramesh Yadav' },
  { id: 4, name: 'Milk', image: '/path/to/milk.jpg', ourPrice: 800, marketPrice: 950, rating: 3, reviews: 8, category: 'Dairy', farmerName: 'Anjali Singh' },
  { id: 5, name: 'Orange', image: '/path/to/orange.jpg', ourPrice: 700, marketPrice: 850, rating: 4, reviews: 22, category: 'Fruits', farmerName: 'Vikram Patel' },
  { id: 6, name: 'Broccoli', image: '/path/to/broccoli.jpg', ourPrice: 500, marketPrice: 650, rating: 4, reviews: 18, category: 'Vegetables', farmerName: 'Geeta Rani' },
  { id: 7, name: 'Cheese', image: '/path/to/cheese.jpg', ourPrice: 1000, marketPrice: 1200, rating: 5, reviews: 25, category: 'Dairy', farmerName: 'Amit Sharma' },
  { id: 8, name: 'Potato', image: '/path/to/potato.jpg', ourPrice: 250, marketPrice: 400, rating: 3, reviews: 5, category: 'Vegetables', farmerName: 'Karan Singh' },
  { id: 9, name: 'Grapes', image: '/path/to/grapes.jpg', ourPrice: 750, marketPrice: 950, rating: 4, reviews: 30, category: 'Fruits', farmerName: 'Pooja Mehta' },
  { id: 10, name: 'Yogurt', image: '/path/to/yogurt.jpg', ourPrice: 400, marketPrice: 600, rating: 4, reviews: 12, category: 'Dairy', farmerName: 'Sunil Sharma' },
  { id: 11, name: 'Cucumber', image: '/path/to/cucumber.jpg', ourPrice: 200, marketPrice: 350, rating: 4, reviews: 9, category: 'Vegetables', farmerName: 'Asha Rani' },
  { id: 12, name: 'Strawberry', image: '/path/to/strawberry.jpg', ourPrice: 800, marketPrice: 950, rating: 5, reviews: 16, category: 'Fruits', farmerName: 'Rajesh Kumar' },
  { id: 13, name: 'Lettuce', image: '/path/to/lettuce.jpg', ourPrice: 150, marketPrice: 300, rating: 3, reviews: 3, category: 'Vegetables', farmerName: 'Suman Devi' },
  { id: 14, name: 'Butter', image: '/path/to/butter.jpg', ourPrice: 900, marketPrice: 1100, rating: 4, reviews: 14, category: 'Dairy', farmerName: 'Amit Kumar' },
  { id: 15, name: 'Pineapple', image: '/path/to/pineapple.jpg', ourPrice: 850, marketPrice: 1000, rating: 5, reviews: 19, category: 'Fruits', farmerName: 'Nisha Singh' },
  { id: 16, name: 'Zucchini', image: '/path/to/zucchini.jpg', ourPrice: 300, marketPrice: 450, rating: 4, reviews: 8, category: 'Vegetables', farmerName: 'Kiran Yadav' },
  { id: 17, name: 'Eggs', image: '/path/to/eggs.jpg', ourPrice: 600, marketPrice: 750, rating: 5, reviews: 26, category: 'Dairy', farmerName: 'Deepak Sharma' },
  { id: 18, name: 'Watermelon', image: '/path/to/watermelon.jpg', ourPrice: 800, marketPrice: 950, rating: 4, reviews: 17, category: 'Fruits', farmerName: 'Vivek Mehta' },
  { id: 19, name: 'Spinach', image: '/path/to/spinach.jpg', ourPrice: 250, marketPrice: 350, rating: 3, reviews: 6, category: 'Vegetables', farmerName: 'Ravi Kumar' },
  { id: 20, name: 'Ice Cream', image: '/path/to/icecream.jpg', ourPrice: 1200, marketPrice: 1400, rating: 5, reviews: 21, category: 'Dairy', farmerName: 'Sanjay Rani' },
  { id: 21, name: 'Avocado', image: '/path/to/avocado.jpg', ourPrice: 900, marketPrice: 1100, rating: 4, reviews: 15, category: 'Fruits', farmerName: 'Manoj Singh' },
  { id: 22, name: 'Sweet Potato', image: '/path/to/sweetpotato.jpg', ourPrice: 350, marketPrice: 500, rating: 4, reviews: 10, category: 'Vegetables', farmerName: 'Rohan Yadav' },
  { id: 23, name: 'Cream', image: '/path/to/cream.jpg', ourPrice: 600, marketPrice: 800, rating: 5, reviews: 12, category: 'Dairy', farmerName: 'Rekha Devi' },
  { id: 24, name: 'Peach', image: '/path/to/peach.jpg', ourPrice: 700, marketPrice: 850, rating: 4, reviews: 22, category: 'Fruits', farmerName: 'Anil Kumar' },
  { id: 25, name: 'Radish', image: '/path/to/radish.jpg', ourPrice: 200, marketPrice: 300, rating: 3, reviews: 5, category: 'Vegetables', farmerName: 'Geeta Kumari' },
  { id: 26, name: 'Sour Cream', image: '/path/to/sourcream.jpg', ourPrice: 450, marketPrice: 600, rating: 4, reviews: 8, category: 'Dairy', farmerName: 'Vijay Singh' },
  { id: 27, name: 'Kiwifruit', image: '/path/to/kiwifruit.jpg', ourPrice: 750, marketPrice: 900, rating: 5, reviews: 18, category: 'Fruits', farmerName: 'Rita Sharma' },
  { id: 28, name: 'Cauliflower', image: '/path/to/cauliflower.jpg', ourPrice: 500, marketPrice: 650, rating: 4, reviews: 14, category: 'Vegetables', farmerName: 'Rahul Kumar' },
  { id: 29, name: 'Feta Cheese', image: '/path/to/fetacheese.jpg', ourPrice: 900, marketPrice: 1100, rating: 5, reviews: 21, category: 'Dairy', farmerName: 'Vivek Singh' },
  { id: 30, name: 'Blueberries', image: '/path/to/blueberries.jpg', ourPrice: 850, marketPrice: 1000, rating: 4, reviews: 20, category: 'Fruits', farmerName: 'Rani Kumari' },
  { id: 31, name: 'Onion', image: '/path/to/onion.jpg', ourPrice: 150, marketPrice: 250, rating: 3, reviews: 7, category: 'Vegetables', farmerName: 'Suraj Singh' },
  { id: 32, name: 'Sliced Cheese', image: '/path/to/slicedcheese.jpg', ourPrice: 900, marketPrice: 1100, rating: 4, reviews: 19, category: 'Dairy', farmerName: 'Nitin Yadav' },
  { id: 33, name: 'Mango', image: '/path/to/mango.jpg', ourPrice: 800, marketPrice: 950, rating: 5, reviews: 23, category: 'Fruits', farmerName: 'Priya Kumari' },
  { id: 34, name: 'Bell Pepper', image: '/path/to/bellpepper.jpg', ourPrice: 500, marketPrice: 650, rating: 4, reviews: 12, category: 'Vegetables', farmerName: 'Shyam Kumar' },
  { id: 35, name: 'Cream Cheese', image: '/path/to/creamcheese.jpg', ourPrice: 950, marketPrice: 1150, rating: 5, reviews: 17, category: 'Dairy', farmerName: 'Aarti Singh' },
  { id: 36, name: 'Cherry', image: '/path/to/cherry.jpg', ourPrice: 1000, marketPrice: 1200, rating: 4, reviews: 15, category: 'Fruits', farmerName: 'Raj Kumar' },
  { id: 37, name: 'Cabbage', image: '/path/to/cabbage.jpg', ourPrice: 300, marketPrice: 450, rating: 3, reviews: 6, category: 'Vegetables', farmerName: 'Pankaj Yadav' },
  { id: 38, name: 'Buttermilk', image: '/path/to/buttermilk.jpg', ourPrice: 500, marketPrice: 650, rating: 4, reviews: 10, category: 'Dairy', farmerName: 'Kamla Devi' },
  { id: 39, name: 'Pomegranate', image: '/path/to/pomegranate.jpg', ourPrice: 1200, marketPrice: 1400, rating: 5, reviews: 25, category: 'Fruits', farmerName: 'Ravi Kumar' },
  { id: 40, name: 'Asparagus', image: '/path/to/asparagus.jpg', ourPrice: 600, marketPrice: 800, rating: 3, reviews: 4, category: 'Vegetables', farmerName: 'Nisha Patel' },
  { id: 41, name: 'Almond Milk', image: '/path/to/almondmilk.jpg', ourPrice: 750, marketPrice: 900, rating: 5, reviews: 20, category: 'Dairy', farmerName: 'Ravi Mehta' },
  { id: 42, name: 'Blackberries', image: '/path/to/blackberries.jpg', ourPrice: 1150, marketPrice: 1300, rating: 4, reviews: 18, category: 'Fruits', farmerName: 'Anju Singh' },
  { id: 43, name: 'Turnip', image: '/path/to/turnip.jpg', ourPrice: 400, marketPrice: 600, rating: 3, reviews: 6, category: 'Vegetables', farmerName: 'Suresh Kumar' },
  { id: 44, name: 'Sour Yogurt', image: '/path/to/souryogurt.jpg', ourPrice: 600, marketPrice: 800, rating: 4, reviews: 13, category: 'Dairy', farmerName: 'Laxmi Devi' },
  { id: 45, name: 'Papaya', image: '/path/to/papaya.jpg', ourPrice: 700, marketPrice: 850, rating: 5, reviews: 21, category: 'Fruits', farmerName: 'Arvind Kumar' },
  { id: 46, name: 'Chard', image: '/path/to/chard.jpg', ourPrice: 250, marketPrice: 400, rating: 4, reviews: 8, category: 'Vegetables', farmerName: 'Geeta Singh' },
  { id: 47, name: 'Ricotta Cheese', image: '/path/to/ricottacheese.jpg', ourPrice: 850, marketPrice: 1050, rating: 5, reviews: 22, category: 'Dairy', farmerName: 'Nikhil Yadav' },
  { id: 48, name: 'Dragon Fruit', image: '/path/to/dragonfruit.jpg', ourPrice: 1500, marketPrice: 1700, rating: 4, reviews: 19, category: 'Fruits', farmerName: 'Meena Rani' },
  { id: 49, name: 'Celery', image: '/path/to/celery.jpg', ourPrice: 250, marketPrice: 400, rating: 3, reviews: 7, category: 'Vegetables', farmerName: 'Niraj Singh' },
  { id: 50, name: 'Whipped Cream', image: '/path/to/whippedcream.jpg', ourPrice: 750, marketPrice: 900, rating: 4, reviews: 10, category: 'Dairy', farmerName: 'Sandeep Kumar' },
];


function ProductPage() {
  const [filteredProducts, setFilteredProducts] = useState(allProducts); // Initially display all products
  const [activeCategory, setActiveCategory] = useState('All'); // Default active category
  const [searchTerm, setSearchTerm] = useState(''); // State for search input

  const handleCategoryChange = (category) => {
    setActiveCategory(category); // Update active category
    const newFilteredProducts = category === 'All' ? allProducts : allProducts.filter(product => product.category === category);
    setFilteredProducts(newFilteredProducts); // Filter products based on category
  };

  const handleSearchChange = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchTerm(value); // Update search term
    const newFilteredProducts = allProducts.filter(product => 
      product.name.toLowerCase().includes(value) || 
      product.category.toLowerCase().includes(value)
    );
    setFilteredProducts(newFilteredProducts); // Filter products based on search term
  };

  return (
    <div className="p-4 m-8 max-w-[1720px] mx-auto">
      <nav className="p-4 text-center "> {/* Centered the filters */}
        <h2 className="text-3xl font-semibold text-gray-800">Select Category</h2>
        <div className="flex justify-center space-x-4 mb-4 flex-wrap">
          {['All', 'Fruits', 'Vegetables', 'Dairy', 'Grains'].map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={`bg-green-500 text-white rounded px-4 py-2 transition-colors duration-200 hover:bg-green-600`}
              aria-pressed={activeCategory === category} // ARIA attribute for accessibility
            >
              {category}
            </button>
          ))}
        </div>
        <div className="relative mb-4 max-w-xs mx-auto"> {/* Center search bar */}
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-600" /> {/* Search icon */}
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearchChange}
            placeholder="Search products..."
            className="border rounded-lg px-10 py-2 w-full"
          />
        </div>
      </nav>
      
      <h2 className="text-2xl font-bold my-4">Products</h2>
      {filteredProducts.length === 0 ? ( // Check if no products are available
        <button className="bg-green-500 text-white rounded px-4 py-2">
          Product Not Available
        </button>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}

export default ProductPage;
