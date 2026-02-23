'use client';

import { useState } from 'react';
import {
  MediaCategoryTabs,
  type MediaCategory,
} from '@personal-website/shared-ui';
import { MusicSection } from './music-section';
import styles from './media.module.css';

export function MediaContent() {
  const [category, setCategory] = useState<MediaCategory>('music');

  return (
    <div className={styles.content}>
      <MediaCategoryTabs active={category} onChange={setCategory} />
      {category === 'music' ? (
        <MusicSection />
      ) : (
        <p className={styles.comingSoon}>{'// coming soon'}</p>
      )}
    </div>
  );
}
