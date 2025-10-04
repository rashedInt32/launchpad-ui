import { FoodHeader } from "@/components/headers/food-header";
import { FoodHero } from "@/components/heroes/food-hero";
import { FoodStats } from "@/components/sections/food-stats";
import { FoodRestaurants } from "@/components/sections/food-restaurants";
import { FoodTestimonials } from "@/components/testimonials/food-testimonials";
import { FoodAppDownload } from "@/components/sections/food-app-download";
import { FoodFooter } from "@/components/footers/food-footer";
import { AnimationProvider } from "@/contexts/AnimationContext";
import { CartProvider } from "@/contexts/CartContext";

export default function FoodDeliveryLanding() {
  return (
    <CartProvider>
      <AnimationProvider>
        <div className="min-h-screen bg-white">
          <FoodHeader />
          <FoodHero />
          <FoodStats />
          <FoodRestaurants />
          <FoodTestimonials />
          <FoodAppDownload />
          <FoodFooter />
        </div>
      </AnimationProvider>
    </CartProvider>
  );
}