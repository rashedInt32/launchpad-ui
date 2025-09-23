"use client";
import { useState } from "react";
import { useGsapAnimation } from "@/hooks/useGsapAnimation";

export const SaasTestimonial = () => {
  const testimonials = [
    {
      quote:
        "Working with this product has been a game-changer for my business. The intuitive interface and powerful features have streamlined our workflow and boosted productivity. I highly recommend it!",
      name: "Alex Johnson",
      title: "CEO of Innovate Solutions",
      image: "https://placehold.co/100x100/1e40af/ffffff?text=AJ",
    },
    {
      quote:
        "The support team is incredible! They were fast, knowledgeable, and genuinely cared about solving my issue. It's rare to find such high-quality service these days.",
      name: "Maria Rodriguez",
      title: "Marketing Director at Creative Co.",
      image: "https://placehold.co/100x100/8b5cf6/ffffff?text=MR",
    },
    {
      quote:
        "I was skeptical at first, but this platform has exceeded all my expectations. It's easy to use, incredibly reliable, and has become an essential tool in my daily work.",
      name: "Chris Evans",
      title: "Lead Developer at Tech Hub",
      image: "https://placehold.co/100x100/f59e0b/ffffff?text=CE",
    },
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonialRef = useGsapAnimation({
    preset: 'slideUp',
    delay: 0.1
  });

  const handleNext = () => {
    setCurrentTestimonial((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1,
    );
  };

  const handlePrev = () => {
    setCurrentTestimonial((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1,
    );
  };

  return (
    <div className="flex items-center justify-center  bg-gray-50 p-4 py-20 font-inter">
      <div
        ref={testimonialRef}
        className="relative w-full max-w-5xl bg-white shadow-md rounded-2xl p-6 md:p-10 flex flex-col items-center"
      >
        <div className="relative w-full overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="w-full flex-shrink-0 text-center flex flex-col items-center"
              >
                <p className="text-gray-700 text-lg md:text-xl italic font-light leading-relaxed">
                  &quote{testimonial.quote}&quote
                </p>

                <div className="mt-8 flex flex-col items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={80}
                    height={80}
                    className="w-16 h-16 rounded-full border-4 border-white shadow-lg"
                  />
                  <p className="mt-4 font-semibold text-lg text-gray-900">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-gray-500">{testimonial.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-4 right-4 md:bottom-8 md:right-8 flex space-x-4">
          <button
            onClick={handlePrev}
            className="p-3 bg-gray-200 text-gray-700 rounded-full shadow-md hover:bg-gray-300 transition-colors"
            aria-label="Previous testimonial"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              ></path>
            </svg>
          </button>
          <button
            onClick={handleNext}
            className="p-3 bg-gray-200 text-gray-700 rounded-full shadow-md hover:bg-gray-300 transition-colors"
            aria-label="Next testimonial"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};
