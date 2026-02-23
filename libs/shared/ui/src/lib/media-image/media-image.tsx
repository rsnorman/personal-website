'use client';

import Image from 'next/image';
import styles from './media-image.module.css';

export interface MediaImageProps {
  src: string;
  alt: string;
  dominantColor: string;
  className?: string;
}

export function MediaImage({
  src,
  alt,
  dominantColor,
  className,
}: MediaImageProps) {
  return (
    <div
      className={`${styles.wrapper} ${className ?? ''}`}
      data-glow-color={dominantColor}
      style={
        {
          '--glow-color': dominantColor,
        } as React.CSSProperties
      }
    >
      <Image
        src={src}
        alt={alt}
        width={48}
        height={48}
        className={styles.image}
        loading="lazy"
      />
      <div
        className={styles.glitchR}
        style={{ backgroundImage: `url(${src})` }}
        aria-hidden="true"
      />
      <div
        className={styles.glitchB}
        style={{ backgroundImage: `url(${src})` }}
        aria-hidden="true"
      />
    </div>
  );
}
