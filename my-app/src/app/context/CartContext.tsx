"use client";
import { createContext, ReactNode, useContext, useState } from "react";

type CartContextType = {
  itemsIds: string[];
  addItems: (id: string) => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [itemsIds, setItemIds] = useState<string[]>([]);

  const addItems = (id: string) => {
    setItemIds((prevId) => (prevId.includes(id) ? prevId : [...prevId, id]));
  };

  return (
    <CartContext.Provider value={{ itemsIds, addItems }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within CartProvider");
  }
  return context;
};
