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
  const elementRef = useRef<HTMLElement | null>(null);

  const setRef = (element: HTMLElement | null) => {
    // Clean up previous animation if element changed
    if (animationRef.current && elementRef.current && elementRef.current !== element) {
      animationRef.current.kill();
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

    // Use GSAP ScrollTrigger directly for more reliable scroll animations
    animationRef.current = createScrollAnimation(element, config);
  };

  useEffect(() => {
    return () => {
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
  const containerRef = useRef<HTMLElement | null>(null);

  const setRef = (container: HTMLElement | null) => {
    // Clean up previous animation if container changed
    if (animationRef.current && containerRef.current && containerRef.current !== container) {
      animationRef.current.kill();
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

    // Use GSAP ScrollTrigger directly for staggered animations
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
          start: config.start || 'top 80%',
          once: config.once !== false
        }
      }
    );
  };

  useEffect(() => {
    return () => {
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
  const containerRef = useRef<HTMLElement | null>(null);

  const setRef = (container: HTMLElement | null) => {
    // Clean up previous animation if container changed
    if (animationRef.current && containerRef.current && containerRef.current !== container) {
      animationRef.current.kill();
    }

    containerRef.current = container;

    if (!container) return;

    // Use GSAP ScrollTrigger directly for sequence animations
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: 'top 80%',
        once: true
      }
    });
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
  };

  useEffect(() => {
    return () => {
      if (animationRef.current) {
        animationRef.current.kill();
      }
    };
  }, []);

  return setRef;
};