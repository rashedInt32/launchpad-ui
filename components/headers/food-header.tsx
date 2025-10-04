"use client";

import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { useGsapAnimation } from "@/hooks/useGsapAnimation";
import { ShoppingCart, User } from "lucide-react";
import { Navigation } from "./navigation";
import { MobileMenu } from "./mobile-menu";
import { CartSidebar } from "./cart-sidebar";
import { useCart } from "@/contexts/CartContext";

export function FoodHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const { getTotalItems } = useCart();
  const totalItems = getTotalItems();

  const headerRef = useGsapAnimation({
    preset: "fadeInDown",
    delay: 0.1,
    triggerOnMount: true,
  });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 0);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        ref={headerRef}
        className="py-2 fixed top-0 left-0 z-50 w-full mx-auto"
      >
        <div
          className={`mx-auto flex items-center justify-between transition-all duration-500 ease-in-out transform ${
            scrolled
              ? "px-6 md:px-8 py-3 bg-white/95 backdrop-blur-lg shadow-lg border-b border-orange-100 max-w-7xl rounded-2xl mx-4"
              : "px-4 md:px-10 py-4 max-w-full border-transparent"
          }`}
        >
          <div className="flex items-center space-x-2">
            <div className="text-2xl">🍕</div>
            <div className="text-xl font-bold text-orange-500">
              FoodDelivery
            </div>
          </div>

          <Navigation className="hidden md:flex space-x-8" />

          <div className="flex items-center gap-4">
            <button
              onClick={() => setCartOpen(true)}
              className="relative p-2 hover:bg-orange-50 rounded-full transition-colors"
            >
              <ShoppingCart className="w-6 h-6 text-gray-700" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>

            <button className="hidden md:flex items-center gap-2 p-2 hover:bg-orange-50 rounded-full transition-colors">
              <User className="w-6 h-6 text-gray-700" />
            </button>

            <MobileMenu
              isOpen={mobileMenuOpen}
              onToggle={() => setMobileMenuOpen(!mobileMenuOpen)}
            />

            <Button className="hidden md:flex bg-orange-500 hover:bg-orange-600 rounded-full px-6">
              Order Now
            </Button>
          </div>
        </div>
      </header>

      <CartSidebar isOpen={cartOpen} onClose={() => setCartOpen(false)} />
    </>
  );
}

