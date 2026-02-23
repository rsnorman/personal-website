'use client';

import styles from './media-category-tabs.module.css';

const CATEGORIES = [
  { id: 'music', label: 'music' },
  { id: 'books', label: 'books' },
  { id: 'movies', label: 'movies' },
  { id: 'games', label: 'games' },
  { id: 'vinyl', label: 'vinyl' },
] as const;

export type MediaCategory = (typeof CATEGORIES)[number]['id'];

export interface MediaCategoryTabsProps {
  active: MediaCategory;
  onChange: (category: MediaCategory) => void;
}

export function MediaCategoryTabs({
  active,
  onChange,
}: MediaCategoryTabsProps) {
  return (
    <div className={styles.tabs} role="tablist" aria-label="Media categories">
      {CATEGORIES.map((cat) => (
        <button
          key={cat.id}
          role="tab"
          aria-selected={active === cat.id}
          className={`${styles.tab} ${active === cat.id ? styles.tabActive : ''}`}
          onClick={() => onChange(cat.id)}
        >
          {cat.label}
        </button>
      ))}
    </div>
  );
}
