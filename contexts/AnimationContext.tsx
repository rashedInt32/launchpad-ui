'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface AnimationSettings {
  reducedMotion: boolean;
  animationDuration: number;
  staggerDelay: number;
  enableAnimations: boolean;
}

interface AnimationContextType {
  settings: AnimationSettings;
  updateSettings: (settings: Partial<AnimationSettings>) => void;
  isReducedMotion: boolean;
}

const defaultSettings: AnimationSettings = {
  reducedMotion: false,
  animationDuration: 1,
  staggerDelay: 0.1,
  enableAnimations: true,
};

const AnimationContext = createContext<AnimationContextType | undefined>(undefined);

interface AnimationProviderProps {
  children: ReactNode;
  initialSettings?: Partial<AnimationSettings>;
}

export const AnimationProvider: React.FC<AnimationProviderProps> = ({
  children,
  initialSettings = {}
}) => {
  const [settings, setSettings] = useState<AnimationSettings>({
    ...defaultSettings,
    ...initialSettings,
  });

  // Check for reduced motion preference
  React.useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handleChange = (e: MediaQueryListEvent) => {
      setSettings(prev => ({ ...prev, reducedMotion: e.matches }));
    };

    setSettings(prev => ({ ...prev, reducedMotion: mediaQuery.matches }));
    mediaQuery.addEventListener('change', handleChange);

    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const updateSettings = (newSettings: Partial<AnimationSettings>) => {
    setSettings(prev => ({ ...prev, ...newSettings }));
  };

  const isReducedMotion = settings.reducedMotion || !settings.enableAnimations;

  return (
    <AnimationContext.Provider value={{ settings, updateSettings, isReducedMotion }}>
      {children}
    </AnimationContext.Provider>
  );
};

export const useAnimationContext = (): AnimationContextType => {
  const context = useContext(AnimationContext);
  if (context === undefined) {
    throw new Error('useAnimationContext must be used within an AnimationProvider');
  }
  return context;
};

// Hook to get animation settings with defaults
export const useAnimationSettings = () => {
  const { settings } = useAnimationContext();
  return settings;
};

// Hook to conditionally apply animations based on user preferences
export const useConditionalAnimation = () => {
  const { isReducedMotion } = useAnimationContext();

  return {
    shouldAnimate: !isReducedMotion,
    getAnimationConfig: (config: any) => ({
      ...config,
      duration: isReducedMotion ? 0 : config.duration,
    }),
  };
};