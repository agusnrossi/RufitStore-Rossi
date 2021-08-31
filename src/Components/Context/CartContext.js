import React, { createContext, useState, useEffect } from "react";

export const CartContext = createContext([]);

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  const isInCart = (id) => items.find((e) => e.item.id === id) !== undefined;

  const clear = () => {
    setItems([]);
  };

  const cartSize =
    items.lenght > 0 ? items.reduce((acc, cur) => acc + cur.quantity, 0) : 0;

  const getItem = (id) => items.findIndex((e) => e.item.id === id);

  const removeItems = (id, amount) => {
    if (getItem(id).quantity > amount) {
      setItems(
        items.map((e) => {
          if (e.item.id === id) e.quantity -= amount;
          return e;
        })
      );
    } else {
      removeItem(id);
    }
  };

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
