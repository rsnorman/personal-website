## 1. Replace Shimmer with Glitch Keyframes

- [x] 1.1 Remove the `@keyframes shimmer` animation and shimmer-related background properties from `skeleton.module.css`
- [x] 1.2 Add `@keyframes glitch` with irregularly spaced steps combining `translateX` jitter (1–3px), `opacity` flicker (0.6–1.0), and `box-shadow` RGB-split offsets
- [x] 1.3 Apply the `glitch` animation to `.bone` with appropriate duration and `infinite` iteration

## 2. Staggered Row Delays

- [x] 2.1 Update `SpotifySkeleton` in `spotify-skeleton.tsx` to pass `style={{ '--delay': '${i * 0.12}s' }}` to each `SkeletonRow`
- [x] 2.2 Accept and forward the `style` prop in `SkeletonRow` to its root `.row` element
- [x] 2.3 Use `animation-delay: var(--delay, 0s)` on `.bone` in the CSS so each row's glitch starts at a different time

## 3. Scanline Overlay

- [x] 3.1 Add a `::after` pseudo-element on `.list` with `repeating-linear-gradient` to create horizontal scanlines
- [x] 3.2 Set scanline overlay opacity to 0.03–0.05 and ensure it covers the full skeleton area with `pointer-events: none`

## 4. Accessibility

- [x] 4.1 Update the `prefers-reduced-motion: reduce` media query to disable the glitch animation and scanline overlay, rendering bones as static blocks

## 5. Verification

- [ ] 5.1 Visually verify the glitch skeleton on `/media` during loading (both tracks and artists sections)
- [ ] 5.2 Verify skeleton layout dimensions match the original (rank, image, text bones unchanged)
- [ ] 5.3 Verify `prefers-reduced-motion` disables all animation
