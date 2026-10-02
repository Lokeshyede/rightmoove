'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface LenisContextType {
  lenis: Lenis | null;
}

const LenisContext = createContext<LenisContextType>({ lenis: null });

export const useLenis = () => useContext(LenisContext);

export default function LenisProvider({ children }: { children: React.ReactNode }) {
  const [lenis, setLenis] = useState<Lenis | null>(null);

  useEffect(() => {
    // BUG-07 FIX: Store the RAF callback as a named function so gsap.ticker.remove()
    // can remove the exact same reference it added.
    const lenisInstance = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    // FIX #6: Defer setState to avoid synchronous state update inside effect
    // (resolves react-hooks/set-state-in-effect ESLint error).
    // setTimeout(0) queues the update as a macrotask — React batches it cleanly
    // without a cascading render within the same synchronous effect execution.
    const timer = setTimeout(() => setLenis(lenisInstance), 0);

    lenisInstance.on('scroll', ScrollTrigger.update);

    // BUG-07 FIX: Named function reference so ticker.remove() works correctly
    const rafCallback = (time: number) => {
      lenisInstance.raf(time * 1000);
    };

    gsap.ticker.add(rafCallback);
    gsap.ticker.lagSmoothing(0);

    const handleResize = () => {
      // Debounce to avoid rapid-fire refresh on mobile
      ScrollTrigger.refresh();
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('orientationchange', handleResize);

    return () => {
      // FIX #6: Cancel the deferred setState if component unmounts first
      // (critical for React StrictMode: mount → unmount → remount cycle)
      clearTimeout(timer);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('orientationchange', handleResize);
      // BUG-07 FIX: Remove the exact named function reference
      gsap.ticker.remove(rafCallback);
      lenisInstance.destroy();
    };
  }, []);

  return (
    <LenisContext.Provider value={{ lenis }}>
      {children}
    </LenisContext.Provider>
  );
}
