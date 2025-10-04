"use client";

interface NavigationProps {
  className?: string;
}

export function Navigation({ className }: NavigationProps) {
  return (
    <nav className={className}>
      <a href="#browse" className="hover:text-orange-500 transition-colors font-medium">
        Browse Food
      </a>
      <a href="#restaurants" className="hover:text-orange-500 transition-colors font-medium">
        Restaurants
      </a>
      <a href="#about" className="hover:text-orange-500 transition-colors font-medium">
        About Us
      </a>
      <a href="#contact" className="hover:text-orange-500 transition-colors font-medium">
        Contact
      </a>
    </nav>
  );
}