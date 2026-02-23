## Why

The personal website currently has four static sections (home, experience, projects, education) with no dynamic content or external integrations. Adding a media section that surfaces Spotify listening activity introduces a living, personal dimension to the site — showing taste and personality beyond a resume. Spotify aggregates (top tracks/artists) are the first module, with books, movies, games, and vinyl planned as future additions.

## What Changes

- New `/media` route with `~` nav decorator, matching the site's terminal aesthetic
- Category tab system designed to grow (music first, books/movies/games/vinyl later)
- Spotify integration via Next.js API routes using refresh token auth (first external API integration on the site)
- Server-side dominant color extraction from album art using `node-vibrant` — each track/artist row glows in its album's primary color
- Time range toggle (4 weeks / 6 months / all time) for both top tracks and top artists
- Top 10 tracks and top 10 artists displayed in a hybrid list layout (small album art + text)
- CSS glitch + dominant-color glow effect on album art hover
- Response caching (1-3hr TTL) to minimize Spotify API calls

## Capabilities

### New Capabilities
- `spotify-integration`: Spotify OAuth refresh token auth, API route layer for fetching top tracks/artists, server-side color extraction, response caching
- `media-page`: /media route with category tabs, time range toggle, track/artist list components with album art, dominant-color glow effects, and link-out to Spotify

### Modified Capabilities
- `keyboard-dismiss`: Navigation needs a new `/media` entry with `~` decorator

## Impact

- **New dependencies**: `node-vibrant` for color extraction
- **New API routes**: `/api/spotify/top-tracks`, `/api/spotify/top-artists`
- **Environment variables**: `SPOTIFY_CLIENT_ID`, `SPOTIFY_CLIENT_SECRET`, `SPOTIFY_REFRESH_TOKEN`
- **Nav component**: New media link with `~` decorator
- **Shared content**: New media category definitions in shared util
- **Deployment**: Vercel environment variables needed for Spotify secrets
