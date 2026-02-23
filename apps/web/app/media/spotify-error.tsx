import styles from './skeleton.module.css';

export function SpotifyError({ message }: { message: string }) {
  return (
    <div className={styles.error} role="alert">
      {'> '}{message}
    </div>
  );
}
