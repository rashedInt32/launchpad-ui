"use client";

import { Button } from "@/components/ui/button";
import { X, Plus, Minus } from "lucide-react";
import { cartItems } from "@/lib/data/food-data";
import { useCart } from "@/contexts/CartContext";

interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CartSidebar({ isOpen, onClose }: CartSidebarProps) {
  const { cartItems: cart, updateQuantity, getTotalItems, getTotalPrice } = useCart();

  const cartItemsWithQuantity = cartItems.filter(item => cart[item.id] > 0);
  const totalItems = getTotalItems();
  const totalPrice = getTotalPrice(cartItems);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div className="absolute inset-0 bg-black bg-opacity-50" onClick={onClose} />
      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-xl">
        <div className="flex h-full flex-col">
          <div className="flex items-center justify-between p-4 border-b">
            <h2 className="text-lg font-semibold">Your Cart ({totalItems})</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4">
            {cartItemsWithQuantity.length === 0 ? (
              <div className="text-center text-gray-500 mt-8">
                Your cart is empty
              </div>
            ) : (
              cartItemsWithQuantity.map((item) => (
                <div key={item.id} className="flex items-center gap-3 py-3 border-b border-gray-100">
                  <div className="text-2xl">{item.image}</div>
                  <div className="flex-1">
                    <h3 className="font-medium text-sm">{item.name}</h3>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-orange-500 font-semibold">${item.price}</span>
                      <div className="flex items-center gap-2 ml-auto">
                        <button 
                          onClick={() => updateQuantity(item.id, cart[item.id] - 1)}
                          className="w-6 h-6 rounded-full border border-gray-300 flex items-center justify-center text-sm"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-sm">{cart[item.id]}</span>
                        <button 
                          onClick={() => updateQuantity(item.id, cart[item.id] + 1)}
                          className="w-6 h-6 rounded-full border border-gray-300 flex items-center justify-center text-sm"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {totalItems > 0 && (
            <div className="p-4 border-t bg-gray-50">
              <div className="flex items-center justify-between mb-4">
                <span className="text-lg font-semibold">Total: ${totalPrice.toFixed(2)}</span>
              </div>
              <Button className="w-full bg-orange-500 hover:bg-orange-600 rounded-full">
                Checkout
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}