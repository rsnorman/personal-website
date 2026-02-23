'use client';

import { useEffect, useState } from 'react';
import type {
  SpotifyTimeRange,
  SpotifyTrack,
  SpotifyArtist,
} from '@personal-website/shared-util';

interface SpotifyData {
  tracks: SpotifyTrack[];
  artists: SpotifyArtist[];
  loading: boolean;
  error: string | null;
}

export function useSpotifyData(timeRange: SpotifyTimeRange): SpotifyData {
  const [tracks, setTracks] = useState<SpotifyTrack[]>([]);
  const [artists, setArtists] = useState<SpotifyArtist[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    setError(null);

    Promise.all([
      fetch(`/api/spotify/top-tracks?range=${timeRange}`).then((r) => {
        if (!r.ok) throw new Error('Failed to load tracks');
        return r.json();
      }),
      fetch(`/api/spotify/top-artists?range=${timeRange}`).then((r) => {
        if (!r.ok) throw new Error('Failed to load artists');
        return r.json();
      }),
    ])
      .then(([tracksData, artistsData]) => {
        if (cancelled) return;
        setTracks(tracksData.tracks);
        setArtists(artistsData.artists);
        setLoading(false);
      })
      .catch((err) => {
        if (cancelled) return;
        setError(err.message);
        setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [timeRange]);

  return { tracks, artists, loading, error };
}
