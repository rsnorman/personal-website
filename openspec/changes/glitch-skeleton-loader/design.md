## Context

The site uses a NIN *With Teeth*-inspired aesthetic — dark palette, glitch effects (react-powerglitch on the hero), monospace type, and industrial textures. The skeleton loader on `/media` currently uses a standard shimmer gradient that feels out of place. The loader lives in two files:

- `apps/web/app/media/spotify-skeleton.tsx` — renders 5 `SkeletonRow` components with rank, image, and text bone elements
- `apps/web/app/media/skeleton.module.css` — shimmer keyframe + bone sizing/layout

The component is used in `music-section.tsx` for both the tracks and artists lists.

## Goals / Non-Goals

**Goals:**
- Replace the shimmer animation with a glitch effect that matches the site's aesthetic
- Keep the same skeleton structure and layout so the loader still matches the content it replaces
- Respect `prefers-reduced-motion`
- Pure CSS solution — no new JS dependencies

**Non-Goals:**
- Redesigning the skeleton layout or row structure
- Adding glitch effects to other loading states outside the skeleton
- Using react-powerglitch (overkill for a CSS-only loader)

## Decisions

### 1. Pure CSS keyframe glitch vs. react-powerglitch

**Chosen**: Pure CSS keyframes

The existing glitch on the hero uses react-powerglitch which applies canvas-based distortion to rendered elements. For skeleton bones (simple rectangles), this is unnecessary overhead. CSS keyframes can produce convincing glitch artifacts with `clip-path`, `transform: translateX`, and opacity flicker — all GPU-composited.

### 2. Glitch effect composition

The glitch will layer three CSS techniques on the `.bone` elements:

| Technique | CSS Property | Purpose |
|---|---|---|
| Horizontal jitter | `transform: translateX()` | Random-feeling displacement via multi-step keyframe |
| Opacity flicker | `opacity` | Simulates signal dropout |
| Color channel shift | `box-shadow` with offset colored shadows | RGB split effect without extra DOM elements |

A single `@keyframes glitch` animation with irregular timing steps (not evenly spaced) creates the erratic feel. The bone base color stays `var(--color-surface)` with `var(--color-border)` for the shadow channels.

### 3. Staggered animation per row

Each `SkeletonRow` will receive a CSS custom property `--delay` via inline style to offset the animation start. This prevents all rows from glitching in unison, which would look mechanical rather than organic. The skeleton component will pass `style={{ '--delay': `${i * 0.12}s` }}` to each row.

### 4. Scanline overlay (optional, via pseudo-element)

A repeating-linear-gradient on `.list::after` can add subtle horizontal scanlines over the entire skeleton block. This is a single pseudo-element on the container — no extra DOM. Opacity kept low (~0.03–0.05) so it's atmospheric, not distracting.

## Risks / Trade-offs

- **Perceived performance**: A glitch effect may feel more "active" than shimmer, which could either improve or worsen perceived load time. Mitigation: keep the animation subtle — small translateX values (1–3px), brief flicker durations.
- **Motion sensitivity**: The glitch is inherently more visually intense than a shimmer. Mitigation: `prefers-reduced-motion: reduce` disables all animation (existing behavior preserved).
- **Browser compatibility**: `clip-path` and `box-shadow` animations are well-supported. No concerns for modern browsers.
