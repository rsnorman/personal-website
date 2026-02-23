import type { CSSProperties } from 'react';
import styles from './skeleton.module.css';

function SkeletonRow({ style }: { style?: CSSProperties }) {
  return (
    <div className={styles.row} style={style}>
      <div className={`${styles.bone} ${styles.rank}`} />
      <div className={`${styles.bone} ${styles.image}`} />
      <div className={styles.textGroup}>
        <div className={`${styles.bone} ${styles.textLong}`} />
        <div className={`${styles.bone} ${styles.textShort}`} />
      </div>
    </div>
  );
}

export function SpotifySkeleton() {
  return (
    <div className={styles.list} aria-busy="true" aria-label="Loading">
      {Array.from({ length: 5 }, (_, i) => (
        <SkeletonRow
          key={i}
          style={{ '--delay': `${i * 0.12}s` } as CSSProperties}
        />
      ))}
    </div>
  );
}
