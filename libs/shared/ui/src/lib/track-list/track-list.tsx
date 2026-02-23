'use client';

import type { SpotifyTrack } from '@personal-website/shared-util';
import { MediaImage } from '../media-image/media-image';
import { useRowGlitch } from '../row-glitch/use-row-glitch';
import styles from './track-list.module.css';

export interface TrackListProps {
  tracks: SpotifyTrack[];
}

export function TrackList({ tracks }: TrackListProps) {
  const listRef = useRowGlitch();

  return (
    <div ref={listRef} className={styles.list}>
      {tracks.map((track) => (
        <a
          key={`${track.rank}-${track.name}`}
          href={track.spotifyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.row}
          aria-label={`${track.name} by ${track.artist} on Spotify (opens in new tab)`}
        >
          <span className={styles.rank}>
            {String(track.rank).padStart(2, '0')}
          </span>
          <MediaImage
            src={track.albumArt}
            alt={`${track.album} album art`}
            dominantColor={track.dominantColor}
          />
          <div className={styles.info}>
            <div className={styles.name}>{track.name}</div>
            <div className={styles.meta}>
              {track.artist} — {track.album}
            </div>
          </div>
          <span className={styles.link} aria-hidden="true">
            {'↗'}
          </span>
        </a>
      ))}
    </div>
  );
}
