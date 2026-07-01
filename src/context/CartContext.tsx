import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext<any>(null);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // ADD ITEM OR INCREASE QTY
  const addToCart = item => {
    setCart(prev => {
      const exists = prev.find(p => p.id === item.id);

      if (exists) {
        return prev.map(p =>
          p.id === item.id ? { ...p, quantity: p.quantity + 1 } : p,
        );
      }

      return [...prev, { ...item, quantity: 1 }];
    });
  };

  // REMOVE ITEM
  const removeFromCart = id => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  // UPDATE QTY
  const updateCart = (id, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(id);
      return;
    }

    setCart(prev =>
      prev.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item,
      ),
    );
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, updateCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
