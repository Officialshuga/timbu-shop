import React, { createContext, useState, useContext } from 'react';

export const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product, quantity) => {
    const existingProduct = cart.find(item => item.id === product.id);
    if (existingProduct) {
      setCart(cart.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + quantity }
          : item
      ));
    } else {
      setCart([...cart, { ...product, quantity }]);
    }
  };

  const cartCount = cart.reduce((count, item) => count + item.quantity, 0);
  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
  };
  const total = cart.reduce((sum, item) => sum + item.newPrice * item.quantity, 0);

  return (
    <CartContext.Provider value={{ cart, addToCart, total, cartCount, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
