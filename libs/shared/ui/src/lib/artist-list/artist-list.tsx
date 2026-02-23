import type { SpotifyArtist } from '@personal-website/shared-util';
import { MediaImage } from '../media-image/media-image';
import styles from './artist-list.module.css';

export interface ArtistListProps {
  artists: SpotifyArtist[];
}

export function ArtistList({ artists }: ArtistListProps) {
  return (
    <div className={styles.list}>
      {artists.map((artist) => (
        <a
          key={`${artist.rank}-${artist.name}`}
          href={artist.spotifyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.row}
          aria-label={`${artist.name} on Spotify (opens in new tab)`}
        >
          <span className={styles.rank}>
            {String(artist.rank).padStart(2, '0')}
          </span>
          <MediaImage
            src={artist.image}
            alt={artist.name}
            dominantColor={artist.dominantColor}
          />
          <div className={styles.info}>
            <div className={styles.name}>{artist.name}</div>
            <div className={styles.meta}>{artist.genres.join(', ')}</div>
          </div>
          <span className={styles.link} aria-hidden="true">
            {'↗'}
          </span>
        </a>
      ))}
    </div>
  );
}
