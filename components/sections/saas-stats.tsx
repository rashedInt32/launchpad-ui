"use client";

import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { useGsapStaggerAnimation } from "@/hooks/useGsapAnimation";
import { gsap } from "gsap";

interface StatItem {
  value: number;
  label: string;
  suffix: string;
  description: string;
}

const stats: StatItem[] = [
  {
    value: 50000,
    label: "Active Users",
    suffix: "+",
    description: "Trusted by businesses worldwide"
  },
  {
    value: 99.9,
    label: "Uptime",
    suffix: "%",
    description: "Reliable service you can count on"
  },
  {
    value: 150,
    label: "Countries",
    suffix: "+",
    description: "Global presence and support"
  },
  {
    value: 24,
    label: "Support",
    suffix: "/7",
    description: "Round-the-clock customer care"
  }
];

export const SaasStats = () => {
  const [animatedValues, setAnimatedValues] = useState<number[]>([0, 0, 0, 0]);
  const [counterStarted, setCounterStarted] = useState(false);

  const startCounterAnimation = () => {
    if (counterStarted) return; // Prevent multiple animations
    setCounterStarted(true);

    stats.forEach((stat, index) => {
      const obj = { count: 0 };
      gsap.fromTo(obj,
        { count: 0 },
        {
          count: stat.value,
          duration: 2,
          ease: 'power2.out',
          onUpdate: () => {
            const currentValue = Math.round(obj.count * 10) / 10;
            setAnimatedValues(prev => {
              const newValues = [...prev];
              newValues[index] = currentValue;
              return newValues;
            });
          }
        }
      );
    });
  };

  const titleRef = useGsapStaggerAnimation({ preset: 'fadeInUp' });
  const statsRef = useGsapStaggerAnimation({
    preset: 'fadeInUp',
    delay: 0.2
  });

  useEffect(() => {
    // Start counter animation after GSAP animation completes
    const timer = setTimeout(() => {
      startCounterAnimation();
    }, 1000); // Wait for GSAP fade-in to complete

    return () => {
      clearTimeout(timer);
      // Clean up any remaining GSAP animations
      gsap.killTweensOf('*');
    };
  }, []);

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div ref={titleRef} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
            Trusted by Thousands
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join thousands of satisfied customers who have transformed their workflow with our platform.
          </p>
        </div>

        <div ref={statsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="text-center bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-100"
            >
              <CardContent className="pt-6">
                <div className="text-4xl md:text-5xl font-bold text-[var(--accent)] mb-2">
                  {animatedValues[index].toLocaleString()}
                  <span className="text-2xl md:text-3xl">{stat.suffix}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {stat.label}
                </h3>
                <p className="text-sm text-gray-600">
                  {stat.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-8 text-sm text-gray-500">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>Real-time updates</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span>Live data</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              <span>Growing daily</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};