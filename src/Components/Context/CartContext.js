import React, { createContext, useState, useEffect } from "react";

export const CartContext = createContext([]);

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  const isInCart = (id) => items.find((e) => e.item.id === id) !== undefined;

  const clear = () => {
    setItems([]);
  };

  const cartSize = () => items.reduce((acc, cur) => cur.quantity + acc, 0);

  const removeItem = (id) => {
    setItems(items.filter((e) => e.item.id !== id));
  };

  const addItem = (item, quantity) => {
    if (isInCart(item.id)) {
      setItems(
        items.map((i) => {
          if (i.item.id === item.id) i.quantity = i.quantity + quantity;
          return i;
        })
      );
    } else {
      setItems([...items, { item, quantity }]);
    }
  };

  useEffect(() => {}, [items]);

  return (
    <CartContext.Provider
      value={{ items, addItem, isInCart, removeItem, clear, cartSize }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
