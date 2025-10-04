"use client";

import { useGsapAnimation } from "@/hooks/useGsapAnimation";
import { StatCard } from "@/components/ui/stat-card";
import { FeatureCard } from "@/components/ui/feature-card";
import { stats, featureCards } from "@/lib/data/food-data";

export function FoodStats() {
  const statsRef = useGsapAnimation({
    preset: 'fadeInUp',
    delay: 0.2,
    triggerOnMount: false
  });

  return (
    <section ref={statsRef} className="py-16 bg-gradient-to-r from-orange-50 to-red-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
            Trusted by Food Lovers
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust us for their daily food delivery needs
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <StatCard key={stat.id} {...stat} />
          ))}
        </div>

        <div className="mt-16 bg-white rounded-3xl p-8 shadow-lg">
          <div className="grid md:grid-cols-3 gap-8">
            {featureCards.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}