
import React, { useState } from "react";
import { FiShoppingCart, FiHeart } from "react-icons/fi";

// Import images
import product from "../assets/img1.jpg";
import product1 from "../assets/img2.jpeg";
import product2 from "../assets/img3.jpg";
import product3 from "../assets/img4.jpg";
import product4 from "../assets/img5.jpg";
import product5 from "../assets/img6.jpg";
import product6 from "../assets/img7.jpg";
import product7 from "../assets/img8.jpg";

// Sample products with categories
const products = [
  { id: 1, name: "Woody Elegance", price: 999, rating: 4.8, category: "Men", discount: 5, image: product },
  { id: 2, name: "Floral Bliss", price: 899, rating: 4.6, category: "Women", discount: 10, image: product1 },
  { id: 3, name: "Amber Warmth", price: 1199, rating: 4.7, category: "Luxury", discount: 15, image: product2 },
  { id: 4, name: "Fresh Aqua", price: 699, rating: 4.5, category: "Unisex", discount: 10, image: product3 },
  { id: 5, name: "Citrus Zest", price: 799, rating: 4.6, category: "Women", discount: 5, image: product4 },
  { id: 6, name: "Oriental Spice", price: 849, rating: 4.4, category: "Arabic Oud", discount: 15, image: product5 },
  { id: 7, name: "Herbal Essence", price: 949, rating: 4.7, category: "Men", discount: 5, image: product6 },
  { id: 8, name: "Fruity Charm", price: 799, rating: 4.6, category: "Gift Sets", discount: 10, image: product7 },
];

const Listing = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [priceRange, setPriceRange] = useState([0, 2000]);
  const [minRating, setMinRating] = useState(0);

  // Filter logic
  const filteredProducts = products.filter((p) => {
    const matchesCategory =
      selectedCategory === "All" || p.category === selectedCategory;
    const matchesPrice = p.price >= priceRange[0] && p.price <= priceRange[1];
    const matchesRating = p.rating >= minRating;

    return matchesCategory && matchesPrice && matchesRating;
  });

  return (
    <section className="py-16 bg-gradient-to-b from-pink-50 to-white">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Sidebar Filters */}
        <aside className="bg-white p-6 rounded-xl shadow-md h-fit sticky top-20">
          <h3 className="text-xl font-bold mb-4 text-amber-950">Filters</h3>

          {/* Category Filter */}
          <div className="mb-6">
            <h4 className="font-semibold text-gray-700 mb-2">Category</h4>
            {["All", "Men", "Women", "Luxury", "Unisex", "Arabic Oud", "Gift Sets"].map(
              (cat) => (
                <label key={cat} className="block mb-1 cursor-pointer">
                  <input
                    type="radio"
                    name="category"
                    value={cat}
                    checked={selectedCategory === cat}
                    onChange={() => setSelectedCategory(cat)}
                    className="mr-2"
                  />
                  {cat}
                </label>
              )
            )}
          </div>

          {/* Price Filter */}
          <div className="mb-6">
            <h4 className="font-semibold text-gray-700 mb-2">Price Range</h4>
            <input
              type="range"
              min="0"
              max="2000"
              step="100"
              value={priceRange[1]}
              onChange={(e) => setPriceRange([0, Number(e.target.value)])}
              className="w-full"
            />
            <p className="text-sm text-gray-600 mt-1">
              Up to ₹{priceRange[1]}
            </p>
          </div>

          {/* Rating Filter */}
          <div className="mb-6">
            <h4 className="font-semibold text-gray-700 mb-2">Minimum Rating</h4>
            <select
              value={minRating}
              onChange={(e) => setMinRating(Number(e.target.value))}
              className="w-full border rounded-lg px-3 py-2"
            >
              <option value={0}>All Ratings</option>
              <option value={4}>4★ & above</option>
              <option value={4.5}>4.5★ & above</option>
            </select>
          </div>
        </aside>

        {/* Product Grid */}
        <div className="md:col-span-3">
          <h2 className="text-3xl font-bold mb-6 text-amber-950">
            Perfume Collection
          </h2>
          {filteredProducts.length === 0 ? (
            <p className="text-gray-500">No products match your filters.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden group"
                >
                  <div className="relative">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-56 w-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {item.discount > 0 && (
                      <span className="absolute top-3 right-3 bg-pink-600 text-white text-xs px-2 py-1 rounded-full">
                        -{item.discount}%
                      </span>
                    )}
                    <button className="absolute top-3 left-3 bg-white p-2 rounded-full shadow hover:bg-pink-50">
                      <FiHeart className="text-gray-500 hover:text-pink-600" />
                    </button>
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-800">
                      {item.name}
                    </h3>
                    <p className="text-yellow-500">⭐ {item.rating}</p>
                    <div className="mt-2">
                      <span className="text-pink-600 font-bold text-lg">
                        ₹
                        {(
                          item.price -
                          (item.price * item.discount) / 100
                        ).toFixed(2)}
                      </span>
                      <span className="line-through text-gray-400 ml-2">
                        ₹{item.price}
                      </span>
                    </div>
                    <button className="mt-4 w-full flex items-center justify-center gap-2 bg-pink-600 text-white py-2 rounded-lg font-medium hover:bg-pink-700 transition">
                      <FiShoppingCart className="w-4 h-4" /> Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Listing;
