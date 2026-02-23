## 1. Spotify Auth & API Utilities

- [x] 1.1 Install `node-vibrant` dependency
- [x] 1.2 Create Spotify auth utility (`apps/web/app/api/spotify/lib/auth.ts`) that exchanges refresh token for access token using `SPOTIFY_CLIENT_ID`, `SPOTIFY_CLIENT_SECRET`, `SPOTIFY_REFRESH_TOKEN` env vars
- [x] 1.3 Create in-memory cache utility (`apps/web/app/api/spotify/lib/cache.ts`) with 1-hour TTL, keyed by endpoint + time range
- [x] 1.4 Create color extraction utility (`apps/web/app/api/spotify/lib/color.ts`) using `node-vibrant` — extract Vibrant swatch, fall back to DarkVibrant → Muted → `#5a8f8f`

## 2. Spotify API Routes

- [x] 2.1 Create `GET /api/spotify/top-tracks` Route Handler — accepts `range` query param (`short_term` | `medium_term` | `long_term`, default `short_term`), validates input, fetches top 10 tracks, extracts dominant colors, caches response, returns shaped JSON
- [x] 2.2 Create `GET /api/spotify/top-artists` Route Handler — same pattern as top-tracks but for artists, returning `rank`, `name`, `genres`, `image`, `dominantColor`, `spotifyUrl`
- [x] 2.3 Add shared types for API response shapes (`SpotifyTrack`, `SpotifyArtist`, time range union type) in shared util lib

## 3. Media Page Structure

- [x] 3.1 Add `{ label: 'Media', href: '/media', decorator: '~' }` to `navItems` array in `apps/web/app/layout.tsx`
- [x] 3.2 Create `/media` page route (`apps/web/app/media/page.tsx`) with metadata export and GlitchText heading
- [x] 3.3 Create `MediaCategoryTabs` component with tabs for music, books, movies, games, vinyl — music active, others showing "coming soon"

## 4. Music Section Components

- [x] 4.1 Create `TimeRangeToggle` component — three options (4wk, 6mo, all time) with teal active state styling
- [x] 4.2 Create `TrackList` component — renders 10 tracks in hybrid layout (album art thumbnail, rank, name, artist, album) with Spotify link-out
- [x] 4.3 Create `ArtistList` component — renders 10 artists in hybrid layout (artist image, rank, name, genres) with Spotify link-out
- [x] 4.4 Create `MediaImage` component for album art / artist images with CSS-only RGB-split glitch effect and dominant-color `box-shadow` glow on hover, respecting `prefers-reduced-motion`

## 5. Data Fetching & State

- [x] 5.1 Create `useSpotifyTopTracks` and `useSpotifyTopArtists` hooks (or a combined `useSpotifyData` hook) that fetch from the API routes with the selected time range
- [x] 5.2 Create loading skeleton components for track and artist rows
- [x] 5.3 Create error state component for failed Spotify fetches

## 6. Styling

- [x] 6.1 Create CSS module for media page layout, category tabs, and time range toggle
- [x] 6.2 Create CSS module for track/artist list rows — hybrid layout, hover states, glow effects
- [x] 6.3 Create CSS for album art glitch effect — pseudo-elements with `mix-blend-mode` for RGB-split, `prefers-reduced-motion` media query to disable
