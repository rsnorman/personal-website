## Context

The `Nav` component in `libs/shared/ui/src/lib/nav/nav.tsx` renders a mobile menu with `role="dialog"` and `aria-modal`. Currently it only supports mouse/touch interaction — no keyboard dismiss or focus management.

## Goals / Non-Goals

**Goals:**
- Escape key closes the mobile menu
- Focus moves to close button on open, returns to hamburger on close
- Clean event listener lifecycle

**Non-Goals:**
- Full focus trap (tab cycling within dialog) — valuable but out of scope for this change
- Desktop keyboard navigation changes

## Decisions

### Use `useEffect` with `mobileOpen` dependency for Escape listener

Add/remove a `keydown` listener based on `mobileOpen` state. The effect cleanup naturally handles both close and unmount cases.

Alternative considered: a single always-attached listener that checks `mobileOpen` — rejected because it adds unnecessary event processing when the menu is closed.

### Use `useRef` for hamburger and close button focus targets

Store refs to both buttons. On open, focus the close button via `closeRef.current?.focus()`. On close (via Escape), focus the hamburger via `hamburgerRef.current?.focus()`. The existing `onClick` close handler will also gain focus restoration.

## Risks / Trade-offs

- [No focus trap] → Users can tab out of the dialog. Acceptable for now; a follow-up change can add a focus trap.
- [Ref timing] → The close button must be rendered before we focus it. Since `mobileOpen` controls both visibility and the effect, React's commit phase ensures the button is in the DOM when the effect runs.
