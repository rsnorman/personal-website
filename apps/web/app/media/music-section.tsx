'use client';

import { useState } from 'react';
import type { SpotifyTimeRange } from '@personal-website/shared-util';
import {
  TimeRangeToggle,
  TrackList,
  ArtistList,
} from '@personal-website/shared-ui';
import { useSpotifyData } from './use-spotify-data';
import { SpotifySkeleton } from './spotify-skeleton';
import { SpotifyError } from './spotify-error';
import styles from './media.module.css';

export function MusicSection() {
  const [timeRange, setTimeRange] = useState<SpotifyTimeRange>('short_term');
  const { tracks, artists, loading, error } = useSpotifyData(timeRange);

  return (
    <div>
      <TimeRangeToggle active={timeRange} onChange={setTimeRange} />

      {error ? (
        <SpotifyError message={error} />
      ) : (
        <>
          <div className={styles.section}>
            <h3 className={styles.sectionHeading}>{'> top tracks'}</h3>
            {loading ? <SpotifySkeleton /> : <TrackList tracks={tracks} />}
          </div>

          <div className={styles.section}>
            <h3 className={styles.sectionHeading}>{'> top artists'}</h3>
            {loading ? <SpotifySkeleton /> : <ArtistList artists={artists} />}
          </div>
        </>
      )}
    </div>
  );
}
