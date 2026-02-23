'use client';

import { useEffect, useRef, useCallback } from 'react';
import { useReducedMotion } from 'motion/react';
import styles from './row-glitch.module.css';

export interface UseRowGlitchOptions {
  minInterval?: number;
  maxInterval?: number;
}

export function useRowGlitch({
  minInterval = 3000,
  maxInterval = 8000,
}: UseRowGlitchOptions = {}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout>>(undefined);
  const prefersReducedMotion = useRef(false);

  const glitchRandomRow = useCallback(() => {
    const container = containerRef.current;
    if (!container || prefersReducedMotion.current) return;

    const rows = container.children;
    if (rows.length === 0) return;

    const index = Math.floor(Math.random() * rows.length);
    const row = rows[index] as HTMLElement;

    row.classList.add(styles.glitching);
    row.addEventListener(
      'animationend',
      () => row.classList.remove(styles.glitching),
      { once: true }
    );
  }, []);

  const scheduleNext = useCallback(() => {
    const delay = minInterval + Math.random() * (maxInterval - minInterval);
    timerRef.current = setTimeout(() => {
      glitchRandomRow();
      scheduleNext();
    }, delay);
  }, [minInterval, maxInterval, glitchRandomRow]);

  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    prefersReducedMotion.current = !!shouldReduceMotion;
  }, [shouldReduceMotion]);

  useEffect(() => {
    scheduleNext();

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [scheduleNext]);

  return containerRef;
}
