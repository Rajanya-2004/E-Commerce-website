// src/pages/Cart.jsx
import React, { useContext } from "react";
import { CartContext } from "../components/CartContext";
import { supabase } from "../supabaseClient.jsx";


const Cart = () => {
  const { cart, removeFromCart } = useContext(CartContext);

  return (
    <section className="py-16 bg-gradient-to-b from-pink-50 to-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-amber-950 mb-6">Your Cart</h2>
        {cart.length === 0 ? (
          <p className="text-gray-500">Your cart is empty.</p>
        ) : (
          <div className="grid gap-6">
            {cart.map((item, index) => (
              <div key={index} className="flex items-center justify-between bg-white p-4 rounded-xl shadow-md">
                <div className="flex items-center gap-4">
                  <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-lg" />
                  <div>
                    <h3 className="font-semibold text-lg">{item.name}</h3>
                    <p className="text-pink-600 font-bold">₹{item.price}</p>
                  </div>
                </div>
                <button 
                  onClick={() => removeFromCart(index)} 
                  className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Cart;
