import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import Header from './components/Header'
import Hero from './components/Hero'
import Products from './components/Products'
import Categories from './components/Categories'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Listing from './components/Listing'

// Import auth pages
import Login from "./components/Login";
import Signup from "./components/Signup";

//Cart
import { CartProvider } from "./components/CartContext"; 
import Cart from "./components/Cart"; 



const Home=() => {
  return (
    <div>
      
      <Hero />
      <Products />
      <Categories />
      <About />
      <Contact />
      <Footer />
      
    </div>
    
  );
};

const App = () => {
  return (
    <CartProvider>
    <Router>
      {/* Header stays across all pages */}
      <Header />

      <Routes>
        {/* Home page */}
        <Route path="/" element={<Home />} />

        {/* Auth pages */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

         {/* Listing page */}
        <Route path="/listing" element={<Listing />} /> 

         <Route path="/cart" element={<Cart />} /> 
      </Routes>
    </Router>
    </CartProvider>
  );
};

export default App