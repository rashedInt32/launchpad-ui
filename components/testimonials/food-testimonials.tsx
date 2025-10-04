"use client";

import { useGsapAnimation } from "@/hooks/useGsapAnimation";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "John Terry",
    location: "New York City",
    avatar: "👨‍💼",
    rating: 5,
    review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In gravida eu arcu a pharetra. Cras varius semper pharetra. Pellentesque sed feugiat nisi. Best food delivery service ever!",
    orderCount: 45
  },
  {
    id: 2,
    name: "Jessica D Miller", 
    location: "New York City",
    avatar: "👩‍💻",
    rating: 5,
    review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In gravida eu arcu a pharetra. Cras varius semper pharetra. Always fresh and on time delivery.",
    orderCount: 32
  },
  {
    id: 3,
    name: "David Muller",
    location: "New York City", 
    avatar: "👨‍🎨",
    rating: 5,
    review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, incididunt ut labore et dolore magna. Quis ipsum suspendisse ultrices gravida. Amazing variety of restaurants!",
    orderCount: 67
  },
  {
    id: 4,
    name: "Julia Tracker",
    location: "New York City",
    avatar: "👩‍🔬", 
    rating: 5,
    review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In gravida eu arcu a pharetra. Cras varius semper pharetra. Pellentesque sed feugiat nisi. Super convenient and reliable!",
    orderCount: 23
  }
];

export function FoodTestimonials() {
  const testimonialsRef = useGsapAnimation({
    preset: 'fadeInUp',
    delay: 0.2,
    triggerOnMount: false
  });

  return (
    <section ref={testimonialsRef} className="py-16 bg-gradient-to-br from-orange-50 to-red-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Real reviews from real customers who love our food delivery service
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="text-3xl bg-orange-100 p-2 rounded-full">
                  {testimonial.avatar}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">{testimonial.name}</h3>
                  <p className="text-sm text-gray-600">{testimonial.location}</p>
                  <div className="text-xs text-orange-500 font-medium">
                    {testimonial.orderCount} orders
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-1 mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <div className="relative">
                <Quote className="w-6 h-6 text-orange-200 absolute -top-2 -left-1" />
                <p className="text-sm text-gray-700 leading-relaxed pl-4">
                  {testimonial.review}
                </p>
              </div>

              <div className="mt-4 pt-4 border-t border-gray-100">
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>Verified Customer</span>
                  <span>✓ Verified</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-white rounded-3xl p-8 shadow-lg">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Star className="w-4 h-4 fill-current" />
              4.9 Average Rating
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">
              Join 50,000+ Happy Customers
            </h3>
            <p className="text-gray-600 mb-6">
              Experience the best food delivery service in your city
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-500 mb-1">98%</div>
                <div className="text-sm text-gray-600">Customer Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-500 mb-1">30min</div>
                <div className="text-sm text-gray-600">Average Delivery Time</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-500 mb-1">24/7</div>
                <div className="text-sm text-gray-600">Customer Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}