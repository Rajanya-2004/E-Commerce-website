import React, { createContext, useState, useEffect } from "react";
import { supabase } from "../supabaseClient.jsx";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [user, setUser] = useState(null);

  //  Load current user (Supabase v2)
  useEffect(() => {
    const loadUser = async () => {
      const { data } = await supabase.auth.getSession();
      if (data?.session?.user) setUser(data.session.user);
    };
    loadUser();

    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session?.user) setUser(session.user);
      else setUser(null);
    });

    return () => {
      listener.subscription.unsubscribe();
    };
  }, []);

  // Fetch cart when user changes
  useEffect(() => {
    const fetchCart = async () => {
      if (!user) {
        setCart([]);
        return;
      }

      const { data, error } = await supabase
        .from("cart")
        .select("item_id, qty, items(title, price, category)")
        .eq("user_id", user.id);

      if (error) console.error("Error fetching cart:", error);
      else {
        const cartItems = data.map((c) => ({
          id: c.item_id,
          title: c.items.title,
          price: c.items.price,
          category: c.items.category,
          quantity: c.qty,
        }));
        setCart(cartItems);
      }
    };

    fetchCart();
  }, [user]);

  // Add/remove/clear cart same as before...



  // 3️ Add to cart
  const addToCart = async (item) => {
    if (!user) {
      alert("Please login to add items to cart!");
      return;
    }

    const existing = cart.find((p) => p.id === item.id);
    if (existing) {
      // Increase quantity in Supabase
      await supabase
        .from("cart")
        .update({ qty: existing.quantity + 1 })
        .eq("user_id", user.id)
        .eq("item_id", item.id);
    } else {
      // Insert new item in Supabase
      await supabase.from("cart").insert([
        { user_id: user.id, item_id: item.id, qty: 1 },
      ]);
    }

    // Refresh cart
    setCart((prev) => {
      const exists = prev.find((p) => p.id === item.id);
      if (exists) {
        return prev.map((p) =>
          p.id === item.id ? { ...p, quantity: p.quantity + 1 } : p
        );
      } else {
        return [...prev, { ...item, quantity: 1 }];
      }
    });
  };

  // Remove from cart
  const removeFromCart = async (itemId) => {
    const existing = cart.find((p) => p.id === itemId);
    if (!existing || !user) return;

    if (existing.quantity > 1) {
      await supabase
        .from("cart")
        .update({ qty: existing.quantity - 1 })
        .eq("user_id", user.id)
        .eq("item_id", itemId);
    } else {
      await supabase
        .from("cart")
        .delete()
        .eq("user_id", user.id)
        .eq("item_id", itemId);
    }

    setCart((prev) =>
      prev.map((p) =>
        p.id === itemId
          ? { ...p, quantity: Math.max(p.quantity - 1, 0) }
          : p
      ).filter(p => p.quantity > 0)
    );
  };

  //  Clear cart completely
  const clearCart = async () => {
    if (user) {
      await supabase.from("cart").delete().eq("user_id", user.id);
    }
    setCart([]);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};
