import React from "react";

function ProductCard({ product }) {
  return (
    <div className="border rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-200 bg-white w-full h-64 mx-auto"> {/* Fixed height for uniformity */}
      <img
        src={product.image}
        alt={product.name || "Product Image"}
        className="w-full h-32 object-cover rounded-md mb-4" // Fixed height for the image
      />
      <h3 className="text-lg font-semibold text-gray-800">
        {product.name || "Product Name"}
      </h3>
      <p className="text-green-600 font-bold mt-1">
        Your Price: AED {product.ourPrice || "N/A"}/kg
      </p>
      <p className="text-gray-500 line-through">
        Market Price: AED {product.marketPrice || "N/A"}/kg
      </p>
      <div className="flex items-center mt-2">
        <span className="text-yellow-500">
          {"⭐".repeat(product.rating || 0)}
        </span>
        <span className="ml-1 text-gray-500">
          ({product.reviews || 0} reviews)
        </span>
      </div>
      <p className="text-gray-600 mt-2">Farmer: {product.farmer || "Unknown"}</p>
    </div>
  );
}

const ProductGrid = ({ products }) => {
  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
