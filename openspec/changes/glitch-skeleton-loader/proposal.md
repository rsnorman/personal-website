## Why

The current skeleton loader uses a generic shimmer/pulse animation that feels disconnected from the site's NIN-inspired glitch aesthetic. Replacing it with a glitch effect creates visual consistency across loading states and reinforces the overall design language.

## What Changes

- Replace the shimmer gradient animation on skeleton bones with a glitch effect (random horizontal shifts, opacity flicker, RGB channel splitting, and scanline artifacts)
- Maintain the same skeleton structure (rows, rank, image, text placeholders) — only the animation changes
- Continue to respect `prefers-reduced-motion` by disabling the glitch animation
- Keep the component reusable so it can serve as the skeleton loader anywhere in the app

## Capabilities

### New Capabilities

- `glitch-skeleton`: Glitch-styled skeleton loading animation that replaces the standard shimmer with glitch effects (horizontal displacement, opacity flicker, color channel splitting, optional scanline overlay)

### Modified Capabilities

_(none — the existing `keyboard-dismiss` spec is unrelated)_

## Impact

- **Files**: `apps/web/app/media/skeleton.module.css` (animation rewrite), `apps/web/app/media/spotify-skeleton.tsx` (possible minor markup changes for glitch layers)
- **Dependencies**: No new dependencies — pure CSS animation
- **Accessibility**: `prefers-reduced-motion` media query still disables animation
- **Risk**: Low — isolated to skeleton loader component, no API or data changes
