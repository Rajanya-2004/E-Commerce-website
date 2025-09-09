import React from "react";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-gradient-to-b from-white to-amber-50">
      <div className="container mx-auto px-6">

        
        
        {/* Section Header */}
        <div className="text-center mb-12">
            
            <h2 className="text-4xl font-bold text-amber-950 mb-4">
                 Get in Touch
            </h2>
            <p className="text-gray-600 text-lg">
                    Have questions or need help? We'd love to hear from you.
            </p>
        </div>


        {/* Contact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-xl border border-gray-100">
            <h2 className="text-2xl font-serif font-semibold text-gray-900 mb-6 text-amber-950 mb-4">
              Send Us a Message
            </h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-pink-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Your Email
                </label>
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-pink-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Your Message
                </label>
                <textarea
                  rows="4"
                  placeholder="Tell us about your fragrance needs..."
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-pink-500 focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-pink-600 text-white py-3 rounded-lg font-medium hover:bg-pink-700 transition"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="bg-white p-8 rounded-lg shadow-xl border border-gray-100">
            <h2 className="text-2xl font-serif font-semibold text-gray-900 mb-6 text-amber-950 mb-4">
              Contact Information
            </h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <FiPhone className="text-pink-600 text-xl mt-1" />
                <div>
                  <p className="text-gray-800 font-medium">Phone</p>
                  <p className="text-gray-600">+1 (234) 567-8888</p>
                  <p className="text-sm text-gray-500">Mon-Fri: 9am-6pm</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <FiMail className="text-pink-600 text-xl mt-1" />
                <div>
                  <p className="text-gray-800 font-medium">Email</p>
                  <p className="text-gray-600">contact@perfume.com</p>
                  <p className="text-gray-600">support@perfume.com</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <FiMapPin className="text-pink-600 text-xl mt-1" />
                <div>
                  <p className="text-gray-800 font-medium">Our Boutique</p>
                  <p className="text-gray-600">123 Perfume Street</p>
                  <p className="text-gray-600">Paris, France 75001</p>
                </div>
              </div>
            </div>

            {/* Social Icons */}
            <div className="mt-6">
              <p className="text-gray-800 font-medium mb-2">Follow Us</p>
              <div className="flex gap-4">
                <a href="#" className="p-2 bg-pink-100 rounded-full hover:bg-pink-200">
                  <FaFacebookF className="text-pink-600" />
                </a>
                <a href="#" className="p-2 bg-pink-100 rounded-full hover:bg-pink-200">
                  <FaTwitter className="text-pink-600" />
                </a>
                <a href="#" className="p-2 bg-pink-100 rounded-full hover:bg-pink-200">
                  <FaInstagram className="text-pink-600" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
