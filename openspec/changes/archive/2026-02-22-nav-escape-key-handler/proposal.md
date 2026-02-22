## Why

The mobile navigation menu declares `role="dialog"` and `aria-modal` but provides no keyboard dismiss mechanism. Users expect Escape to close modal dialogs — this is standard behavior per WAI-ARIA dialog pattern guidelines. Without it, keyboard and screen reader users have a degraded experience.

## What Changes

- Add an `Escape` key event listener that closes the mobile menu when open
- Move focus to the close button when the mobile menu opens
- Return focus to the hamburger button when the mobile menu closes

## Capabilities

### New Capabilities
- `keyboard-dismiss`: Close mobile nav dialog via Escape key with proper focus management

### Modified Capabilities

## Impact

- `libs/shared/ui/src/lib/nav/nav.tsx`: Add `useEffect` and `useRef` hooks for keyboard event handling and focus management
