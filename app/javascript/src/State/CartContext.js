import React, { createContext, useContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const generateUniqueId = () => {
    // Function to generate a unique identifier
    // You can use any method or library to generate unique identifiers
    return Math.random().toString(36).substring(2, 15);
  };

  const addToCart = (productId) => {
    const newItem = {
      id: generateUniqueId(), // Generate a unique identifier for the item
      productId: productId,
    };

    setCartItems((prevCartItems) => [...prevCartItems, newItem]);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};
