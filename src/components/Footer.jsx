import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-amber-950 text-gray-300 py-12">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* Brand Info */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">Essence</h2>
          <p className="text-sm leading-relaxed mb-4">
            Discover timeless fragrances crafted to inspire elegance, passion, and memories.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-pink-500">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-pink-500">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-pink-500">
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:text-pink-500">Home</a></li>
            <li><a href="/shop" className="hover:text-pink-500">Shop</a></li>
            <li><a href="/new" className="hover:text-pink-500">New Arrivals</a></li>
            <li><a href="/best" className="hover:text-pink-500">Best Sellers</a></li>
            <li><a href="/gifts" className="hover:text-pink-500">Gift Sets</a></li>
          </ul>
        </div>

        {/* Customer Services */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Customer Services</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/contact" className="hover:text-pink-500">Contact Us</a></li>
            <li><a href="/faqs" className="hover:text-pink-500">FAQs</a></li>
            <li><a href="/shipping" className="hover:text-pink-500">Shipping Policy</a></li>
            <li><a href="/returns" className="hover:text-pink-500">Returns & Exchange</a></li>
            <li><a href="/privacy" className="hover:text-pink-500">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Newsletter</h3>
          <p className="text-sm mb-4">
            Subscribe to get special offers, free giveaways, and exclusive deals.
          </p>
          <form className="flex">
            <input
              type="email"
              placeholder="Your email address"
              className="w-full px-4 py-2 rounded-l-md focus:outline-none text-black"
            />
            <button
              type="submit"
              className="bg-pink-600 px-4 py-2 rounded-r-md text-white hover:bg-pink-700"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="text-center text-sm text-gray-400 mt-10 border-t border-gray-700 pt-6">
        © {new Date().getFullYear()} Essence. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
