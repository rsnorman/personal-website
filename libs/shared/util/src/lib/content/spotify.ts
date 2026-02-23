export type SpotifyTimeRange = 'short_term' | 'medium_term' | 'long_term';

export const VALID_RANGES: SpotifyTimeRange[] = [
  'short_term',
  'medium_term',
  'long_term',
];

export interface SpotifyTrack {
  rank: number;
  name: string;
  artist: string;
  album: string;
  albumArt: string;
  dominantColor: string;
  spotifyUrl: string;
}

export interface SpotifyArtist {
  rank: number;
  name: string;
  genres: string[];
  image: string;
  dominantColor: string;
  spotifyUrl: string;
}

export interface SpotifyTopTracksResponse {
  tracks: SpotifyTrack[];
  timeRange: SpotifyTimeRange;
  cachedAt: string;
}

export interface SpotifyTopArtistsResponse {
  artists: SpotifyArtist[];
  timeRange: SpotifyTimeRange;
  cachedAt: string;
}
