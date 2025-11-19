"use client"

import { createContext, useContext, useRef, useEffect, ReactNode } from 'react';
import Lenis from '@studio-freight/lenis';

const LenisContext = createContext<Lenis | null>(null);

export const useLenis = () => {
  const context = useContext(LenisContext);
  return context;
};

export function LenisProvider({ children }: { children: ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 2,        // Increased duration for more delay
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -8 * t)),
      orientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.2, // Slightly increased multiplier
      touchMultiplier: 3,
      infinite: false,
    });

    lenisRef.current = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <LenisContext.Provider value={lenisRef.current}>
      {children}
    </LenisContext.Provider>
  );
}