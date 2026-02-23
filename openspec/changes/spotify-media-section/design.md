## Context

The personal website is a pure static Next.js 15 site on Nx 22, deployed to Vercel. All content is hardcoded TypeScript — no API routes, no external integrations, no environment variables. The site uses an industrial CRT aesthetic (dark background, monospace fonts, glitch effects, teal accent).

Adding Spotify listening data is the site's first external integration. It introduces API routes, server-side secrets, and a third-party dependency — a meaningful architectural shift that should be done cleanly to set the pattern for future media sources.

## Goals / Non-Goals

**Goals:**
- Display the user's Spotify top 10 tracks and top 10 artists with time range selection
- Extract dominant color from album art server-side to drive per-row glow effects
- Cache API responses to minimize Spotify calls and keep response times fast
- Build the `/media` page with a category tab structure that accommodates future media types (books, movies, games, vinyl)
- Maintain the existing CRT/industrial aesthetic throughout

**Non-Goals:**
- No "now playing" or real-time listening data
- No Spotify playback controls or embedded player
- No visitor-facing OAuth — only the site owner's data is shown
- No books, movies, games, or vinyl content in this change (structure only)
- No audio preview playback — rows link out to Spotify

## Decisions

### 1. Spotify auth via long-lived refresh token

**Choice**: Store `SPOTIFY_CLIENT_ID`, `SPOTIFY_CLIENT_SECRET`, and `SPOTIFY_REFRESH_TOKEN` as Vercel environment variables. The API route exchanges the refresh token for a short-lived access token on each request (or cache window).

**Alternatives considered**:
- Full OAuth flow with database-stored tokens: Overkill — only one user (the site owner) needs to authenticate, and that happens once offline
- Client-side token: Exposes secrets in the browser

**Rationale**: The refresh token never expires (unless revoked). One-time manual auth via Spotify's developer console, then the server handles token refresh transparently.

### 2. Two API routes: `/api/spotify/top-tracks` and `/api/spotify/top-artists`

**Choice**: Separate Next.js Route Handlers under `apps/web/app/api/spotify/`.

**Alternatives considered**:
- Single combined endpoint: Couples two independent resources; harder to cache independently
- Server Components with direct fetch: Ties data fetching to page rendering; no reuse for future clients

**Rationale**: Clean separation, independently cacheable, each route has a single responsibility. Both accept a `range` query param (`short_term` | `medium_term` | `long_term`).

### 3. Server-side color extraction with `node-vibrant`

**Choice**: Extract the Vibrant swatch from each album/artist image in the API route, returning `dominantColor` as a hex string in the response payload.

**Alternatives considered**:
- Client-side canvas extraction: CORS issues with Spotify CDN images; flash of unstyled glow; canvas API is imprecise
- Pre-computed color lookup table: Not feasible — top tracks change over time

**Rationale**: `node-vibrant` is purpose-built for palette extraction (Node port of Android's Palette API). Server-side means the client receives colors ready to use with no layout shift. The Vibrant swatch provides saturated colors that read well as glows against the `#0a0a0a` background. Falls back to DarkVibrant → Muted if Vibrant is unavailable.

### 4. In-memory cache with 1-hour TTL

**Choice**: Cache the full transformed response (tracks/artists + extracted colors) in a module-level `Map` with a 1-hour TTL, keyed by `${endpoint}:${timeRange}`.

**Alternatives considered**:
- Next.js `fetch` revalidate (ISR): Works for page-level data but awkward for Route Handlers returning transformed data
- Vercel KV / Redis: External dependency for a simple cache — overkill
- No cache: Color extraction for 10 images adds 1-2s per request

**Rationale**: Module-level cache persists across requests within a single serverless function instance. On cold starts, the first request pays the full cost (~1-2s), then subsequent requests within the TTL return instantly. Spotify aggregates don't change frequently, so 1 hour is appropriate.

### 5. CSS-only glitch effect on album art hover

**Choice**: Use CSS pseudo-elements with `mix-blend-mode` for RGB-split on hover, plus a `box-shadow` glow using the dominant color from the API response.

**Alternatives considered**:
- `react-powerglitch` on images: Heavy — re-renders glitch canvas on every hover; designed for text, not images
- Canvas-based glitch: Complex, not performant for 20 items on screen

**Rationale**: CSS-only is lightweight, GPU-accelerated, and doesn't require additional JavaScript execution per row. The glitch intensity should be subtle (2-3px offset) and respect `prefers-reduced-motion`.

### 6. Media page category tabs — music active, others as placeholders

**Choice**: Render category tabs (music, books, movies, games, vinyl) with only music functional. Other tabs show a minimal "coming soon" state.

**Rationale**: Establishes the tab structure and component architecture now so future media types slot in without restructuring the page.

## Risks / Trade-offs

- **Spotify refresh token expiry**: Tokens can be revoked if the user changes their Spotify password or removes the app. → Mitigation: API routes return graceful error state; page shows fallback UI rather than crashing.
- **Rate limiting**: Spotify allows ~180 requests/minute per app. → Mitigation: 1-hour cache means at most 6 unique requests per hour (2 endpoints × 3 time ranges).
- **Cold start latency**: First request after function recycle takes 1-2s for color extraction. → Mitigation: Acceptable for a personal site; the client shows a loading skeleton.
- **`node-vibrant` bundle size**: Adds to serverless function size. → Mitigation: Only used in API routes (server-side), not shipped to the client.
- **Album art CORS for future features**: If we ever want client-side image processing, Spotify CDN images may need proxying. → Not a concern now since extraction is server-side.
