import * as React from "react";

export interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

export interface FeaturedFood {
  id: number;
  name: string;
  image: string;
  rating: number;
  deliveryTime: string;
  price: number;
}

export interface Restaurant {
  id: number;
  name: string;
  cuisine: string;
  image: string;
  rating: number;
  reviews: number;
  deliveryTime: string;
  deliveryFee: number;
  featured: boolean;
  address: string;
}

export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  popular: boolean;
}

export interface MenuCategory {
  name: string;
  items: MenuItem[];
}

export interface RestaurantMenu {
  categories: MenuCategory[];
}

export interface Stat {
  id: number;
  icon: React.ComponentType<{ className?: string; size?: number; }>;
  number: string;
  label: string;
  color: string;
}

export interface Testimonial {
  id: number;
  name: string;
  location: string;
  avatar: string;
  rating: number;
  review: string;
  orderCount: number;
}

export interface AppStore {
  id: number;
  name: string;
  icon: string;
  url: string;
  description: string;
}

export interface AppFeature {
  icon: React.ComponentType<{ className?: string; size?: number; }>;
  title: string;
  description: string;
}

export interface FooterLinks {
  company: { name: string; href: string }[];
  support: { name: string; href: string }[];
  legal: { name: string; href: string }[];
}

export interface SocialLink {
  name: string;
  icon: string;
  href: string;
  color: string;
}

export interface ContactInfo {
  icon: React.ComponentType<{ className?: string; size?: number; }>;
  text: string;
  href: string;
}

export interface FeatureCard {
  icon: string;
  title: string;
  description: string;
}
