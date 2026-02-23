import styles from './skeleton.module.css';

function SkeletonRow() {
  return (
    <div className={styles.row}>
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
        <SkeletonRow key={i} />
      ))}
    </div>
  );
}
