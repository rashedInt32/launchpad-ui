"use client";

import { Button } from "@/components/ui/button";
import { RatingDisplay } from "@/components/ui/rating-display";
import { Clock, MapPin } from "lucide-react";
import type { Restaurant } from "@/lib/types/food";

interface RestaurantCardProps {
  restaurant: Restaurant;
  onViewMenu: (restaurantId: number) => void;
}

export function RestaurantCard({ restaurant, onViewMenu }: RestaurantCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer overflow-hidden border border-gray-100">
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
            <RatingDisplay rating={restaurant.rating} size="sm" />
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

        <Button 
          className="w-full bg-orange-500 hover:bg-orange-600 text-white rounded-xl group-hover:bg-orange-600 transition-colors"
          onClick={() => onViewMenu(restaurant.id)}
        >
          View Menu
        </Button>
      </div>
    </div>
  );
}