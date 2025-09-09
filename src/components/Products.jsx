
import React, { useState, useEffect, useContext} from "react";
import { FiHeart, FiShoppingCart, FiX } from "react-icons/fi";
import { CartContext } from "../components/CartContext";
import { supabase } from "../supabaseClient.jsx";



import product from '../assets/img1.jpg'
import product1 from '../assets/img2.jpeg'
import product2 from '../assets/img3.jpg'
import product3 from '../assets/img4.jpg'
import product4 from '../assets/img5.jpg'
import product5 from '../assets/img6.jpg'
import product6 from '../assets/img7.jpg'
import product7 from '../assets/img8.jpg'
const Products = () => {

    const [currentSlide, setCurrentSlide] = useState(0);
    const [productsPerPage, setProductsPerPage] = useState(4);
    const [selectedProduct, setSelectedProduct] = useState(null);

     const { addToCart } = useContext(CartContext);


    const products =[
        {id:1, name:'Woody Elegance', price: 999, rating: 4.8, image: product, discount:5},
        {id:2, name:'Floral Bliss', price: 899, rating: 4.6, image: product1, discount:10},
        {id:3, name:'Amber Warmth', price: 1199, rating: 4.7, image: product2, discount:15},
        {id:4, name:'Fresh Aqua', price: 699, rating: 4.5, image: product3, discount:10},
        {id:5, name:'Citrus Zest', price: 799, rating: 4.6, image: product4, discount:5},
        {id:6, name:'Oriental Spice', price: 849, rating: 4.4, image: product5, discount:15},
        {id:7, name:'Herbal Essence', price: 949, rating: 4.7, image: product6, discount:5},
        {id:8, name:'Fruity Charm', price: 799, rating: 4.6, image: product7, discount:10},
];
useEffect(() =>{
    const handleResize = () => {
        if(window.innerWidth < 640){
            setProductsPerPage(1);
        }else if(window.innerWidth < 768){
            setProductsPerPage(2);
        }else if(window.innerWidth < 1024){
            setProductsPerPage(3);
        }else {
            setProductsPerPage(4);
        }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
    
}, []);

const totalSlides = Math.ceil(products.length/ productsPerPage);

const nextSlide = () => {
    setCurrentSlide((prev)=> (prev === totalSlides -1 ? 0 : prev +1));
};
const prevSlide = ()=> {
    setCurrentSlide((prev) => (prev === 0? totalSlides -1: prev -1));
};


const visibleProducts = products.slice(
    currentSlide*productsPerPage,
    (currentSlide+1) * productsPerPage

)

return (
    <section id="products" className="py-16 scroll-mt-20 bg-gradient-to-b from-amber-50 to-white">
  <div className="container mx-auto px-4">
    {/* Header */}
    <div className="text-center mb-12">
      <h2 className="text-4xl sm:text-5xl font-bold text-amber-950 mb-4">
        ✨ Featured Fragrances ✨
      </h2>
      <p className="text-gray-600 max-w-2xl mx-auto text-lg">
        Discover our best-selling perfumes crafted with elegance, luxury, and timeless charm. 
        Handpicked just for you.
      </p>
    </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {visibleProducts.map((item) => {
            const discountedPrice = (
              item.price -
              (item.price * item.discount) / 100
            ).toFixed(2);

            return (
              <div
                key={item.id}
                className="relative bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden group transform hover:scale-105"
              >
                {/* Wishlist + Discount Badge */}
                <div className="absolute top-3 left-3 bg-white p-2 rounded-full shadow cursor-pointer hover:bg-pink-50">
                  
                  <FiHeart className="w-5 h-5 text-gray-500 group-hover:text-pink-600" />
                </div>
                {item.discount > 0 && (
                  <span className="absolute top-3 right-3 bg-pink-600 text-white text-xs px-2 py-1 rounded-full">
                    -{item.discount}%
                  </span>
                )}

                {/* Image */}
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-110"
                  onClick={() => setSelectedProduct(item)} // Open modal
                />

                {/* Info */}
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
                  <span className="text-yellow-500">⭐ {item.rating}</span>

                  {/* Price */}
                  <div className="mt-2">
                    <span className="text-pink-600 font-bold text-lg">₹{discountedPrice}</span>
                    <span className="line-through text-gray-400 ml-2">₹{item.price}</span>
                  </div>

                  {/* Add to Cart */}
                   
                  <button
                  onClick={() => addToCart(item)}
                  className="mt-4 w-full flex items-center justify-center gap-2 bg-pink-600 text-white py-2 rounded-lg font-medium hover:bg-pink-700 transition">
                    <FiShoppingCart className="w-4 h-4" />
                    Add to Cart
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Dots Pagination */}
        <div className="flex justify-center mt-10 space-x-3">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                currentSlide === index ? "bg-pink-600 scale-110" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Quick View Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
          <div className="bg-white rounded-xl shadow-lg max-w-lg w-full p-6 relative">
            {/* Close */}
            <button
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
              onClick={() => setSelectedProduct(null)}
            >
              <FiX className="w-6 h-6" />
            </button>

            {/* Content */}
            <img
              src={selectedProduct.image}
              alt={selectedProduct.name}
              className="w-full h-72 object-cover rounded-lg"
            />
            <h3 className="text-2xl font-bold mt-4">{selectedProduct.name}</h3>
            <p className="text-gray-600 mt-2">{selectedProduct.description}</p>
            <div className="flex items-center gap-2 mt-2">
              <span className="text-yellow-500">⭐ {selectedProduct.rating}</span>
            </div>
            <div className="mt-3">
              <span className="text-pink-600 font-bold text-xl">
                ₹
                {(
                  selectedProduct.price -
                  (selectedProduct.price * selectedProduct.discount) / 100
                ).toFixed(2)}
              </span>
              <span className="line-through text-gray-400 ml-2">
                ₹{selectedProduct.price}
              </span>
            </div>

            {/* Add to Cart */}
            
            <button 
            onClick={() => addToCart(item)}
            className="mt-6 w-full flex items-center justify-center gap-2 bg-pink-600 text-white py-3 rounded-lg font-medium hover:bg-pink-700 transition">
              <FiShoppingCart className="w-5 h-5" />

              Add to Cart
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Products