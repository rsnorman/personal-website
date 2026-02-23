'use client';

import type { SpotifyTimeRange } from '@personal-website/shared-util';
import styles from './time-range-toggle.module.css';

const OPTIONS: { value: SpotifyTimeRange; label: string }[] = [
  { value: 'short_term', label: '4wk' },
  { value: 'medium_term', label: '6mo' },
  { value: 'long_term', label: 'all time' },
];

export interface TimeRangeToggleProps {
  active: SpotifyTimeRange;
  onChange: (range: SpotifyTimeRange) => void;
}

export function TimeRangeToggle({ active, onChange }: TimeRangeToggleProps) {
  return (
    <div className={styles.toggle} role="group" aria-label="Time range">
      {OPTIONS.map((opt) => (
        <button
          key={opt.value}
          className={`${styles.option} ${active === opt.value ? styles.optionActive : ''}`}
          onClick={() => onChange(opt.value)}
          aria-pressed={active === opt.value}
        >
          {opt.label}
        </button>
      ))}
    </div>
  );
}
