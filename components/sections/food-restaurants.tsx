"use client";

import { useState } from "react";
import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";
import { useGsapStaggerAnimation } from "@/hooks/useGsapAnimation";
import { Star, Clock, MapPin, Plus, Minus, ShoppingCart } from "lucide-react";

const restaurants = [
  {
    id: 1,
    name: "Mega Restaurant",
    cuisine: "Italian & Pizza",
    image: "🍕",
    rating: 4.8,
    reviews: 1250,
    deliveryTime: "25",
    deliveryFee: 2.99,
    featured: true,
    address: "Downtown Plaza"
  },
  {
    id: 2,
    name: "The Fast Food",
    cuisine: "Burgers & Fries",
    image: "🍔",
    rating: 4.6,
    reviews: 890,
    deliveryTime: "50",
    deliveryFee: 1.99,
    featured: false,
    address: "Main Street"
  },
  {
    id: 3,
    name: "Green Bakery",
    cuisine: "Healthy & Fresh",
    image: "🥗",
    rating: 4.9,
    reviews: 2100,
    deliveryTime: "45",
    deliveryFee: 3.49,
    featured: true,
    address: "Green Valley"
  },
  {
    id: 4,
    name: "Eat Frio",
    cuisine: "Mexican",
    image: "🌮",
    rating: 4.7,
    reviews: 675,
    deliveryTime: "25",
    deliveryFee: 2.49,
    featured: false,
    address: "Heritage District"
  },
  {
    id: 5,
    name: "Turkish Cuisine",
    cuisine: "Mediterranean",
    image: "🥙",
    rating: 4.5,
    reviews: 543,
    deliveryTime: "50",
    deliveryFee: 3.99,
    featured: false,
    address: "Old Town"
  },
  {
    id: 6,
    name: "Pizzario",
    cuisine: "Wood Fired Pizza",
    image: "🍕",
    rating: 4.8,
    reviews: 1890,
    deliveryTime: "45",
    deliveryFee: 2.99,
    featured: true,
    address: "City Center"
  }
];

const restaurantMenus = {
  1: {
    categories: [
      {
        name: "Pizza",
        items: [
          { id: 1, name: "Margherita Pizza", description: "Fresh tomatoes, mozzarella, basil", price: 18.99, image: "🍕", popular: true },
          { id: 2, name: "Pepperoni Pizza", description: "Pepperoni, mozzarella, tomato sauce", price: 22.99, image: "🍕", popular: false },
          { id: 3, name: "Quattro Stagioni", description: "Four seasons pizza with mixed toppings", price: 26.99, image: "🍕", popular: true }
        ]
      },
      {
        name: "Pasta",
        items: [
          { id: 4, name: "Spaghetti Carbonara", description: "Eggs, cheese, pancetta, black pepper", price: 16.99, image: "🍝", popular: true },
          { id: 5, name: "Penne Arrabbiata", description: "Spicy tomato sauce with garlic and chili", price: 14.99, image: "🍝", popular: false }
        ]
      }
    ]
  },
  2: {
    categories: [
      {
        name: "Burgers",
        items: [
          { id: 6, name: "Classic Burger", description: "Beef patty, lettuce, tomato, onion", price: 12.99, image: "🍔", popular: true },
          { id: 7, name: "Cheese Burger", description: "Beef patty with melted cheese", price: 14.99, image: "🍔", popular: true },
          { id: 8, name: "Bacon Burger", description: "Beef patty with crispy bacon", price: 16.99, image: "🍔", popular: false }
        ]
      },
      {
        name: "Sides",
        items: [
          { id: 9, name: "French Fries", description: "Golden crispy fries", price: 4.99, image: "🍟", popular: true },
          { id: 10, name: "Onion Rings", description: "Crispy battered onion rings", price: 5.99, image: "🧅", popular: false }
        ]
      }
    ]
  },
  3: {
    categories: [
      {
        name: "Salads",
        items: [
          { id: 11, name: "Caesar Salad", description: "Romaine lettuce, croutons, parmesan", price: 13.99, image: "🥗", popular: true },
          { id: 12, name: "Greek Salad", description: "Feta cheese, olives, tomatoes, cucumber", price: 15.99, image: "🥗", popular: true }
        ]
      },
      {
        name: "Smoothies",
        items: [
          { id: 13, name: "Green Smoothie", description: "Spinach, banana, apple, ginger", price: 7.99, image: "🥤", popular: true },
          { id: 14, name: "Berry Blast", description: "Mixed berries, yogurt, honey", price: 8.99, image: "🥤", popular: false }
        ]
      }
    ]
  },
  4: {
    categories: [
      {
        name: "Tacos",
        items: [
          { id: 15, name: "Carnitas Tacos", description: "Slow-cooked pork with cilantro and onion", price: 11.99, image: "🌮", popular: true },
          { id: 16, name: "Chicken Tacos", description: "Grilled chicken with fresh salsa", price: 10.99, image: "🌮", popular: true }
        ]
      },
      {
        name: "Burritos",
        items: [
          { id: 17, name: "Beef Burrito", description: "Seasoned beef, rice, beans, cheese", price: 13.99, image: "🌯", popular: false },
          { id: 18, name: "Veggie Burrito", description: "Black beans, rice, vegetables, guac", price: 12.99, image: "🌯", popular: true }
        ]
      }
    ]
  },
  5: {
    categories: [
      {
        name: "Kebabs",
        items: [
          { id: 19, name: "Chicken Kebab", description: "Grilled chicken with spices", price: 17.99, image: "🥙", popular: true },
          { id: 20, name: "Lamb Kebab", description: "Tender lamb with herbs", price: 22.99, image: "🥙", popular: true }
        ]
      },
      {
        name: "Sides",
        items: [
          { id: 21, name: "Hummus", description: "Creamy chickpea dip with pita", price: 6.99, image: "🧆", popular: false },
          { id: 22, name: "Baklava", description: "Sweet pastry with nuts and honey", price: 5.99, image: "🍯", popular: true }
        ]
      }
    ]
  },
  6: {
    categories: [
      {
        name: "Wood Fired Pizza",
        items: [
          { id: 23, name: "Neapolitan Pizza", description: "Traditional Italian with San Marzano tomatoes", price: 24.99, image: "🍕", popular: true },
          { id: 24, name: "Truffle Pizza", description: "White sauce, truffle oil, arugula", price: 32.99, image: "🍕", popular: true },
          { id: 25, name: "Prosciutto Pizza", description: "Prosciutto di Parma, mozzarella, arugula", price: 28.99, image: "🍕", popular: false }
        ]
      }
    ]
  }
};

export function FoodRestaurants() {
  const [selectedRestaurant, setSelectedRestaurant] = useState<number | null>(null);
  const [cartItems, setCartItems] = useState<{[key: number]: number}>({});
  
  const restaurantsRef = useGsapStaggerAnimation({
    preset: 'fadeInUp',
    stagger: 0.1,
    delay: 0.2,
    triggerOnMount: false
  });

  const updateCartItem = (itemId: number, quantity: number) => {
    setCartItems(prev => ({
      ...prev,
      [itemId]: Math.max(0, quantity)
    }));
  };

  const getTotalItems = () => {
    return Object.values(cartItems).reduce((sum, qty) => sum + qty, 0);
  };

  const getMenuForRestaurant = (restaurantId: number) => {
    return restaurantMenus[restaurantId as keyof typeof restaurantMenus] || { categories: [] };
  };

  return (
    <section id="restaurants" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
            Popular Restaurants
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover amazing restaurants near you with fast delivery and great food
          </p>
        </div>

        <div ref={restaurantsRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {restaurants.map((restaurant) => (
            <div
              key={restaurant.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer overflow-hidden border border-gray-100"
            >
              {restaurant.featured && (
                <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs font-medium px-3 py-1 inline-block">
                  FEATURED
                </div>
              )}
              
              <div className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="text-4xl bg-gray-50 p-3 rounded-xl group-hover:scale-110 transition-transform">
                    {restaurant.image}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-800 mb-1">
                      {restaurant.name}
                    </h3>
                    <p className="text-sm text-gray-600 mb-2">{restaurant.cuisine}</p>
                    <div className="flex items-center gap-1 text-sm text-gray-500">
                      <MapPin className="w-3 h-3" />
                      <span>{restaurant.address}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-medium text-sm">{restaurant.rating}</span>
                    <span className="text-xs text-gray-500">({restaurant.reviews})</span>
                  </div>
                  
                  <div className="flex items-center gap-3 text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{restaurant.deliveryTime} mins</span>
                    </div>
                    <div className="font-medium">
                      ${restaurant.deliveryFee} delivery
                    </div>
                  </div>
                </div>

                <Dialog>
                  <DialogTrigger asChild>
                    <Button 
                      className="w-full bg-orange-500 hover:bg-orange-600 text-white rounded-xl group-hover:bg-orange-600 transition-colors"
                      onClick={() => setSelectedRestaurant(restaurant.id)}
                    >
                      View Menu
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
                    <DialogHeader>
                      <DialogTitle className="flex items-center gap-3 text-2xl">
                        <span className="text-3xl">{restaurant.image}</span>
                        <div>
                          <div>{restaurant.name}</div>
                          <div className="text-sm font-normal text-gray-600">{restaurant.cuisine}</div>
                        </div>
                      </DialogTitle>
                    </DialogHeader>
                    
                    <div className="mt-6">
                      {selectedRestaurant === restaurant.id && (
                        <div className="space-y-8">
                          {getMenuForRestaurant(restaurant.id).categories.map((category, categoryIndex) => (
                            <div key={categoryIndex}>
                              <h3 className="text-xl font-semibold text-gray-800 mb-4 border-b border-gray-200 pb-2">
                                {category.name}
                              </h3>
                              <div className="grid gap-4">
                                {category.items.map((item) => (
                                  <div key={item.id} className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                                    <div className="text-3xl bg-white p-2 rounded-lg">{item.image}</div>
                                    <div className="flex-1">
                                      <div className="flex items-start justify-between">
                                        <div>
                                          <h4 className="font-semibold text-gray-800 flex items-center gap-2">
                                            {item.name}
                                            {item.popular && (
                                              <span className="bg-orange-500 text-white text-xs px-2 py-1 rounded-full">
                                                Popular
                                              </span>
                                            )}
                                          </h4>
                                          <p className="text-sm text-gray-600 mt-1">{item.description}</p>
                                          <div className="text-lg font-bold text-orange-500 mt-2">${item.price}</div>
                                        </div>
                                        <div className="flex items-center gap-2">
                                          {cartItems[item.id] > 0 ? (
                                            <div className="flex items-center gap-2">
                                              <button
                                                onClick={() => updateCartItem(item.id, cartItems[item.id] - 1)}
                                                className="w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center hover:bg-orange-600 transition-colors"
                                              >
                                                <Minus className="w-4 h-4" />
                                              </button>
                                              <span className="font-semibold min-w-[2ch] text-center">
                                                {cartItems[item.id]}
                                              </span>
                                              <button
                                                onClick={() => updateCartItem(item.id, cartItems[item.id] + 1)}
                                                className="w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center hover:bg-orange-600 transition-colors"
                                              >
                                                <Plus className="w-4 h-4" />
                                              </button>
                                            </div>
                                          ) : (
                                            <button
                                              onClick={() => updateCartItem(item.id, 1)}
                                              className="flex items-center gap-2 bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors"
                                            >
                                              <Plus className="w-4 h-4" />
                                              Add
                                            </button>
                                          )}
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          ))}
                          
                          {getTotalItems() > 0 && (
                            <div className="sticky bottom-0 bg-white border-t border-gray-200 p-4 mt-6">
                              <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white rounded-xl py-3 flex items-center justify-center gap-2">
                                <ShoppingCart className="w-5 h-5" />
                                Add {getTotalItems()} item{getTotalItems() > 1 ? 's' : ''} to cart
                              </Button>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg" 
            className="px-8 py-3 rounded-full border-orange-200 hover:border-orange-300 hover:bg-orange-50"
          >
            Browse More Restaurants
          </Button>
        </div>
      </div>
    </section>
  );
}