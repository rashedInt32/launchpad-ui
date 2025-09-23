"use client";

import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useGsapStaggerAnimation } from "@/hooks/useGsapAnimation";

const plans = [
  {
    plan: "Starter",
    price: "$0",
    features: [
      "Basic templates",
      "1 theme",
      "MIT License",
      "Community support",
    ],
    color: "bg-[var(--color-accent)]",
  },
  {
    plan: "Premium",
    price: "$29",
    features: [
      "All templates",
      "5+ themes",
      "Support & updates",
      "Commercial use",
    ],
    color: "bg-indigo-600",
  },
  {
    plan: "Enterprise",
    price: "$299",
    features: [
      "Custom design",
      "Private repo",
      "Dedicated support",
      "API access",
    ],
    color: "bg-lime-600",
  },
];

export function SaasPricing() {
  const titleRef = useGsapStaggerAnimation({ preset: 'fadeInUp' });
  const pricingRef = useGsapStaggerAnimation({
    preset: 'staggerFadeIn',
    delay: 0.2,
    stagger: 0.1
  });

  return (
    <section id="pricing" className="py-20 px-6 bg-white">
      <div ref={titleRef}>
        <h2 className="text-3xl font-heading font-bold text-center mb-12">
          Pricing
        </h2>
      </div>
      <div ref={pricingRef} className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {plans.map((p) => (
          <div
            key={p.plan}
            className=" rounded-xl shadow-sm bg-white overflow-hidden"
          >
            <div
              className={`py-8 px-10 bg-[var(--primary)] text-white} ${p.color}`}
            >
              <h3 className="text-xl font-semibold mb-6 text-white/80 ">
                {p.plan}
              </h3>
              <p className="text-5xl font-bold mb-4 text-white">
                {p.price} <span className="text-sm">/ Month</span>
              </p>
            </div>

            <ul className="space-y-4 text-gray-600 p-10">
              {p.features.map((f) => (
                <li key={f} className="flex items-start gap-3">
                  <CheckCircle
                    size={24}
                    className="text-[var(--color-accent)]"
                  />{" "}
                  {f}
                </li>
              ))}
            </ul>
            <div className="px-10 pb-8">
              <Button
                variant="outlineRounded"
                className="w-full cursor-pointer"
              >
                Choose Plan
              </Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
