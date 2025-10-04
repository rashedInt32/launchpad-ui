"use client";

import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

interface MobileMenuProps {
  isOpen: boolean;
  onToggle: () => void;
}

export function MobileMenu({ isOpen, onToggle }: MobileMenuProps) {
  return (
    <>
      <button
        onClick={onToggle}
        className="md:hidden p-2 hover:bg-orange-50 rounded-full transition-colors"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-lg shadow-lg border-t border-orange-100 mx-4 rounded-b-2xl">
          <nav className="flex flex-col p-4 space-y-4">
            <a href="#browse" className="hover:text-orange-500 transition-colors font-medium py-2">
              Browse Food
            </a>
            <a href="#restaurants" className="hover:text-orange-500 transition-colors font-medium py-2">
              Restaurants
            </a>
            <a href="#about" className="hover:text-orange-500 transition-colors font-medium py-2">
              About Us
            </a>
            <a href="#contact" className="hover:text-orange-500 transition-colors font-medium py-2">
              Contact
            </a>
            <Button className="bg-orange-500 hover:bg-orange-600 rounded-full mt-4">
              Order Now
            </Button>
          </nav>
        </div>
      )}
    </>
  );
}