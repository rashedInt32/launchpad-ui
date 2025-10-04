"use client";

import * as React from "react";
import type { CartItem } from "@/lib/types/food";

interface CartContextType {
  cartItems: Record<number, number>;
  addToCart: (itemId: number, quantity?: number) => void;
  removeFromCart: (itemId: number) => void;
  updateQuantity: (itemId: number, quantity: number) => void;
  clearCart: () => void;
  getTotalItems: () => number;
  getTotalPrice: (items: CartItem[]) => number;
}

const CartContext = React.createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cartItems, setCartItems] = React.useState<Record<number, number>>({});

  const addToCart = React.useCallback((itemId: number, quantity: number = 1) => {
    setCartItems(prev => ({
      ...prev,
      [itemId]: (prev[itemId] || 0) + quantity
    }));
  }, []);

  const removeFromCart = React.useCallback((itemId: number) => {
    setCartItems(prev => {
      const newCart = { ...prev };
      delete newCart[itemId];
      return newCart;
    });
  }, []);

  const updateQuantity = React.useCallback((itemId: number, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(itemId);
    } else {
      setCartItems(prev => ({
        ...prev,
        [itemId]: quantity
      }));
    }
  }, [removeFromCart]);

  const clearCart = React.useCallback(() => {
    setCartItems({});
  }, []);

  const getTotalItems = React.useCallback(() => {
    return Object.values(cartItems).reduce((sum, qty) => sum + qty, 0);
  }, [cartItems]);

  const getTotalPrice = React.useCallback((items: CartItem[]) => {
    return items.reduce((sum, item) => {
      const quantity = cartItems[item.id] || 0;
      return sum + (item.price * quantity);
    }, 0);
  }, [cartItems]);

  const value = React.useMemo(() => ({
    cartItems,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getTotalItems,
    getTotalPrice
  }), [cartItems, addToCart, removeFromCart, updateQuantity, clearCart, getTotalItems, getTotalPrice]);

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = React.useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}