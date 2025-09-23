import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

// Animation preset configurations - Optimized for speed
export const animationPresets = {
  fadeIn: {
    from: { opacity: 0 },
    to: { opacity: 1, duration: 0.6, ease: 'power2.out' }
  },
  fadeInUp: {
    from: { opacity: 0, y: 30 },
    to: { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }
  },
  fadeInDown: {
    from: { opacity: 0, y: -30 },
    to: { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }
  },
  fadeInLeft: {
    from: { opacity: 0, x: -30 },
    to: { opacity: 1, x: 0, duration: 0.6, ease: 'power2.out' }
  },
  fadeInRight: {
    from: { opacity: 0, x: 30 },
    to: { opacity: 1, x: 0, duration: 0.6, ease: 'power2.out' }
  },
  slideUp: {
    from: { y: 50, opacity: 0 },
    to: { y: 0, opacity: 1, duration: 0.7, ease: 'power3.out' }
  },
  slideDown: {
    from: { y: -50, opacity: 0 },
    to: { y: 0, opacity: 1, duration: 0.7, ease: 'power3.out' }
  },
  scaleIn: {
    from: { scale: 0.9, opacity: 0 },
    to: { scale: 1, opacity: 1, duration: 0.6, ease: 'power2.out' }
  },
  staggerFadeIn: {
    from: { opacity: 0, y: 20 },
    to: { opacity: 1, y: 0, duration: 0.5, stagger: 0.08, ease: 'power2.out' }
  },
  bounceIn: {
    from: { scale: 0.8, opacity: 0 },
    to: { scale: 1, opacity: 1, duration: 0.6, ease: 'power2.out' }
  }
} as const;

export type AnimationPreset = keyof typeof animationPresets;

// Custom animation configuration
export interface AnimationConfig {
  preset?: AnimationPreset;
  from?: gsap.TweenVars;
  to?: gsap.TweenVars;
  duration?: number;
  delay?: number;
  trigger?: string | HTMLElement;
  start?: string;
  end?: string;
  scrub?: boolean | number;
  pin?: boolean;
  markers?: boolean;
  once?: boolean;
}

// Default intersection observer options - Conservative triggering to avoid conflicts
export const defaultIntersectionOptions: IntersectionObserverInit = {
  threshold: 0.1,
  rootMargin: '0px 0px 0px 0px'
};

// Utility to create GSAP timeline with ScrollTrigger
export const createScrollAnimation = (
  element: HTMLElement,
  config: AnimationConfig
) => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: config.trigger || element,
      start: config.start || 'top 80%',
      end: config.end || 'bottom 20%',
      scrub: config.scrub || false,
      pin: config.pin || false,
      markers: config.markers || false,
      once: config.once !== false, // Default to true for performance
    }
  });

  // Apply animation based on preset or custom config
  if (config.preset) {
    const preset = animationPresets[config.preset];
    tl.fromTo(element, preset.from, {
      ...preset.to,
      delay: config.delay || 0,
      duration: config.duration || preset.to.duration
    });
  } else if (config.from && config.to) {
    tl.fromTo(element, config.from, {
      ...config.to,
      delay: config.delay || 0,
      duration: config.duration || config.to.duration || 1
    });
  }

  return tl;
};

// Utility to create simple GSAP animation (no ScrollTrigger)
export const createSimpleAnimation = (
  element: HTMLElement,
  config: AnimationConfig
) => {
  if (config.preset) {
    const preset = animationPresets[config.preset];
    return gsap.fromTo(element, preset.from, {
      ...preset.to,
      delay: config.delay || 0,
      duration: config.duration || preset.to.duration
    });
  } else if (config.from && config.to) {
    return gsap.fromTo(element, config.from, {
      ...config.to,
      delay: config.delay || 0,
      duration: config.duration || config.to.duration || 1
    });
  }
};