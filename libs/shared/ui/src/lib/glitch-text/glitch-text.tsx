'use client';

import { useGlitch } from 'react-powerglitch';
import { useReducedMotion } from 'motion/react';
import styles from './glitch-text.module.css';

export interface GlitchTextProps {
  children: string;
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span';
  intensity?: 'subtle' | 'medium' | 'strong';
  continuous?: boolean;
  className?: string;
}

const intensityConfig = {
  subtle: {
    slice: { count: 3, velocity: 8 },
    timing: { duration: 2000, iterations: Infinity },
    glitchTimeSpan: { start: 0.7, end: 0.75 },
  },
  medium: {
    slice: { count: 6, velocity: 12 },
    timing: { duration: 3000, iterations: Infinity },
    glitchTimeSpan: { start: 0.5, end: 0.6 },
  },
  strong: {
    slice: { count: 10, velocity: 18 },
    timing: { duration: 2500, iterations: Infinity },
    glitchTimeSpan: { start: 0.3, end: 0.5 },
  },
};

export function GlitchText({
  children,
  as: Tag = 'span',
  intensity = 'subtle',
  continuous = false,
  className,
}: GlitchTextProps) {
  const shouldReduceMotion = useReducedMotion();

  const glitch = useGlitch({
    playMode: continuous ? 'always' : 'hover',
    ...intensityConfig[intensity],
  });

  if (shouldReduceMotion) {
    return <Tag className={className}>{children}</Tag>;
  }

  return (
    <Tag ref={glitch.ref} className={`${styles.glitchText} ${className ?? ''}`}>
      {children}
    </Tag>
  );
}
