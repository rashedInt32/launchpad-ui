'use client';

import { useEffect, useRef, RefObject } from 'react';
import { gsap } from 'gsap';
import { createScrollAnimation, createSimpleAnimation, AnimationConfig, defaultIntersectionOptions } from '@/lib/animations';

interface UseGsapAnimationOptions extends AnimationConfig {
  triggerOnMount?: boolean;
  intersectionOptions?: IntersectionObserverInit;
}

export const useGsapAnimation = (
  config: UseGsapAnimationOptions = {}
) => {
  const animationRef = useRef<gsap.core.Timeline | gsap.core.Tween | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const elementRef = useRef<HTMLElement | null>(null);

  const setRef = (element: HTMLElement | null) => {
    // Clean up previous observer if element changed
    if (observerRef.current && elementRef.current && elementRef.current !== element) {
      observerRef.current.unobserve(elementRef.current);
    }

    elementRef.current = element;

    if (!element) return;

    // If triggerOnMount is true, animate immediately on mount
    if (config.triggerOnMount) {
      const animation = createSimpleAnimation(element, config);
      if (animation) {
        animationRef.current = animation;
      }
      return;
    }

    // Clean up existing observer
    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    // Create new intersection observer for scroll-triggered animations
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Create animation when element comes into view
            animationRef.current = createScrollAnimation(element, config);

            // Stop observing after animation starts (unless it's a scrub animation)
            if (!config.scrub && observerRef.current) {
              observerRef.current.unobserve(element);
            }
          }
        });
      },
      config.intersectionOptions || defaultIntersectionOptions
    );

    observerRef.current.observe(element);
  };

  useEffect(() => {
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
      if (animationRef.current) {
        animationRef.current.kill();
      }
    };
  }, []);

  return setRef;
};

// Hook for staggered animations on multiple elements
export const useGsapStaggerAnimation = (
  config: UseGsapAnimationOptions & { stagger?: number } = {}
) => {
  const animationRef = useRef<gsap.core.Timeline | gsap.core.Tween | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const containerRef = useRef<HTMLElement | null>(null);

  const setRef = (container: HTMLElement | null) => {
    // Clean up previous observer if container changed
    if (observerRef.current && containerRef.current && containerRef.current !== container) {
      observerRef.current.unobserve(containerRef.current);
    }

    containerRef.current = container;

    if (!container) return;

    const children = Array.from(container.children) as HTMLElement[];

    if (config.triggerOnMount) {
      animationRef.current = gsap.fromTo(
        children,
        config.from || { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: config.duration || 0.5,
          stagger: config.stagger || 0.08,
          ease: 'power2.out',
          delay: config.delay || 0
        }
      );
      return;
    }

    // Clean up existing observer
    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    // Create new intersection observer
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animationRef.current = gsap.fromTo(
              children,
              config.from || { opacity: 0, y: 20 },
              {
                opacity: 1,
                y: 0,
                duration: config.duration || 0.5,
                stagger: config.stagger || 0.08,
                ease: 'power2.out',
                delay: config.delay || 0,
                scrollTrigger: {
                  trigger: container,
                  start: config.start || 'top 85%',
                  once: config.once !== false
                }
              }
            );
            if (observerRef.current) {
              observerRef.current.unobserve(container);
            }
          }
        });
      },
      config.intersectionOptions || defaultIntersectionOptions
    );

    observerRef.current.observe(container);
  };

  useEffect(() => {
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
      if (animationRef.current) {
        animationRef.current.kill();
      }
    };
  }, []);

  return setRef;
};

// Hook for sequential animations
export const useGsapSequenceAnimation = (
  configs: UseGsapAnimationOptions[]
) => {
  const animationRef = useRef<gsap.core.Timeline | gsap.core.Tween | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const containerRef = useRef<HTMLElement | null>(null);

  const setRef = (container: HTMLElement | null) => {
    // Clean up previous observer if container changed
    if (observerRef.current && containerRef.current && containerRef.current !== container) {
      observerRef.current.unobserve(containerRef.current);
    }

    containerRef.current = container;

    if (!container) return;

    // Clean up existing observer
    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    // Create new intersection observer
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const tl = gsap.timeline();
            animationRef.current = tl;

            configs.forEach((config, index) => {
              const element = container.children[index] as HTMLElement;
              if (element && config.preset) {
                const preset = require('@/lib/animations').animationPresets[config.preset];
                tl.fromTo(
                  element,
                  preset.from,
                  {
                    ...preset.to,
                    delay: config.delay || 0,
                    duration: config.duration || preset.to.duration
                  },
                  index > 0 ? '-=0.3' : 0 // Faster overlap for smoother sequence
                );
              }
            });

            if (observerRef.current) {
              observerRef.current.unobserve(container);
            }
          }
        });
      },
      defaultIntersectionOptions
    );

    observerRef.current.observe(container);
  };

  useEffect(() => {
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
      if (animationRef.current) {
        animationRef.current.kill();
      }
    };
  }, []);

  return setRef;
};