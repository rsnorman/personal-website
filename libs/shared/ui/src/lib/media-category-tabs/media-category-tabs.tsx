'use client';

import {
  CATEGORIES,
  type MediaCategory,
} from '@personal-website/shared-util';
import styles from './media-category-tabs.module.css';

export type { MediaCategory };

export interface MediaCategoryTabsProps {
  active: MediaCategory;
  onChange: (category: MediaCategory) => void;
}

export function MediaCategoryTabs({
  active,
  onChange,
}: MediaCategoryTabsProps) {
  return (
    <div className={styles.tabs} role="group" aria-label="Media categories">
      {CATEGORIES.map((cat) => (
        <button
          key={cat.id}
          aria-pressed={active === cat.id}
          className={`${styles.tab} ${active === cat.id ? styles.tabActive : ''}`}
          onClick={() => onChange(cat.id)}
        >
          {cat.label}
        </button>
      ))}
    </div>
  );
}
