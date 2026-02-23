import { NextRequest, NextResponse } from 'next/server';
import type {
  SpotifyTimeRange,
  SpotifyTopArtistsResponse,
} from '@personal-website/shared-util';
import { VALID_RANGES } from '@personal-website/shared-util';
import { getAccessToken } from '../lib/auth';
import { getCached, setCache } from '../lib/cache';
import { extractDominantColor } from '../lib/color';

interface RawSpotifyImage {
  url: string;
  width: number;
  height: number;
}

interface RawSpotifyArtist {
  name: string;
  genres: string[];
  images: RawSpotifyImage[];
  external_urls: {
    spotify: string;
  };
}

export async function GET(request: NextRequest) {
  const range = (request.nextUrl.searchParams.get('range') ??
    'short_term') as SpotifyTimeRange;

  if (!VALID_RANGES.includes(range)) {
    return NextResponse.json(
      { error: 'Invalid range. Use short_term, medium_term, or long_term.' },
      { status: 400 }
    );
  }

  const cacheKey = `top-artists:${range}`;
  const cached = getCached<SpotifyTopArtistsResponse>(cacheKey);
  if (cached) {
    return NextResponse.json(cached);
  }

  try {
    const accessToken = await getAccessToken();

    const response = await fetch(
      `https://api.spotify.com/v1/me/top/artists?time_range=${range}&limit=10`,
      { headers: { Authorization: `Bearer ${accessToken}` } }
    );

    if (!response.ok) {
      return NextResponse.json(
        { error: 'Failed to fetch top artists from Spotify' },
        { status: response.status }
      );
    }

    const data = await response.json();

    const artists = await Promise.all(
      data.items.map(async (item: RawSpotifyArtist, index: number) => {
        const image =
          item.images.find((img) => img.width === 300)?.url ??
          item.images[1]?.url ??
          item.images[0]?.url ??
          '';

        const dominantColor = image
          ? await extractDominantColor(image)
          : '#5a8f8f';

        return {
          rank: index + 1,
          name: item.name,
          genres: (item.genres ?? []).slice(0, 3),
          image,
          dominantColor,
          spotifyUrl: item.external_urls.spotify,
        };
      })
    );

    const result: SpotifyTopArtistsResponse = {
      artists,
      timeRange: range,
      cachedAt: new Date().toISOString(),
    };

    setCache(cacheKey, result);
    return NextResponse.json(result);
  } catch (err) {
    const message = err instanceof Error ? err.message : '';
    if (message === 'Missing Spotify environment variables') {
      return NextResponse.json(
        { error: 'Spotify integration is not configured' },
        { status: 503 }
      );
    }
    if (message === 'Spotify authentication failed') {
      return NextResponse.json(
        { error: 'Spotify authentication failed' },
        { status: 401 }
      );
    }
    return NextResponse.json(
      { error: 'Failed to fetch Spotify data' },
      { status: 500 }
    );
  }
}
