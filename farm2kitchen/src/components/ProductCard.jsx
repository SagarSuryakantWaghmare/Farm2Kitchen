import React from "react";

function ProductCard({ product }) {
  return (
    <div className="border rounded-lg p-4 m-2 shadow-md hover:shadow-lg transition-shadow duration-200 bg-white">
      <img
        src={product.image}
        alt={product.name || "Product Image"}
        className="w-full h-48 object-cover rounded-md mb-4" // Increased height for the image
      />
      <h3 className="text-lg font-semibold mt-2 text-gray-800">
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
      <p className="text-gray-600 mt-2">Farmer: {product.farmer || "Unknown"}</p> {/* Display farmer's name */}
    </div>
  );
}

export default ProductCard;
