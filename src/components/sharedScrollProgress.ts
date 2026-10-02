/**
 * sharedScrollProgress.ts
 * Module-level scroll progress singleton.
 * Written by MainExperience's ScrollTrigger onUpdate.
 * Read by VisualEnvironment's RAF loop.
 * NO new ScrollTrigger, NO new Lenis. Just a shared mutable value.
 */
let _progress = 0;

export const setScrollProgress = (p: number): void => {
  _progress = p;
};

export const getScrollProgress = (): number => _progress;
