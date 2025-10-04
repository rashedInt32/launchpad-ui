"use client";

import { Button } from "../ui/button";
import { useGsapSequenceAnimation } from "@/hooks/useGsapAnimation";
import { RatingDisplay } from "@/components/ui/rating-display";
import { Clock } from "lucide-react";
import { featuredFoods } from "@/lib/data/food-data";

export function FoodHero() {
  const heroRef = useGsapSequenceAnimation([
    { preset: "fadeInUp", delay: 0.0 },
    { preset: "fadeInUp", delay: 0.2 },
    { preset: "fadeInUp", delay: 0.4 },
    { preset: "scaleIn", delay: 0.6 },
  ]);

  return (
    <section
      ref={heroRef}
      className="pt-20 lg:pt-32 px-6 min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 via-white to-red-50"
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="space-y-6">
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
              Delicious food at your{" "}
              <span className="text-orange-500">door step</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-lg">
              Order from your favorite restaurants and get fresh, hot meals delivered 
              to your doorstep in minutes. Fast, reliable, and delicious.
            </p>
          </div>
          
          <div className="flex gap-4 flex-wrap">
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full">
              Order Now
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-3 rounded-full border-orange-200 hover:border-orange-300">
              Browse Menu
            </Button>
          </div>

          <div className="flex gap-8 pt-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-500">1052+</div>
              <div className="text-sm text-gray-600">Orders Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-500">9800+</div>
              <div className="text-sm text-gray-600">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-500">4.9</div>
              <div className="text-sm text-gray-600">Average Rating</div>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="grid grid-cols-2 gap-4">
            {featuredFoods.map((food, index) => (
              <div
                key={food.id}
                className={`bg-white rounded-2xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 ${
                  index === 0 ? "col-span-2" : ""
                }`}
              >
                <div className="aspect-square bg-gray-100 rounded-xl mb-3 relative overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-orange-200 to-red-200 flex items-center justify-center">
                    <span className="text-4xl">🍕</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold text-gray-800">{food.name}</h3>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <RatingDisplay rating={food.rating} size="sm" showNumber />
                    <Clock className="w-4 h-4 ml-2" />
                    <span>{food.deliveryTime} min</span>
                  </div>
                  <div className="text-lg font-bold text-orange-500">${food.price}</div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="absolute -top-4 -right-4 w-20 h-20 bg-orange-200 rounded-full opacity-60 animate-pulse"></div>
          <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-red-200 rounded-full opacity-40 animate-pulse delay-500"></div>
        </div>
      </div>
    </section>
  );
}