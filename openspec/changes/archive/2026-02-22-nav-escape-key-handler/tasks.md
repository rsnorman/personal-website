## 1. Add refs and imports

- [x] 1.1 Add `useEffect` and `useRef` to the React import in nav.tsx
- [x] 1.2 Create refs for the hamburger button (`hamburgerRef`) and close button (`closeRef`)
- [x] 1.3 Attach refs to the hamburger and close button elements

## 2. Escape key handler

- [x] 2.1 Add a `useEffect` that registers a `keydown` listener when `mobileOpen` is true
- [x] 2.2 In the listener, check for `key === 'Escape'` and call `setMobileOpen(false)`
- [x] 2.3 Return focus to hamburger button after closing via Escape
- [x] 2.4 Clean up the listener in the effect's cleanup function

## 3. Focus management on open

- [x] 3.1 Add a `useEffect` that focuses the close button when `mobileOpen` becomes true

## 4. Focus restoration on close button click

- [x] 4.1 Update the close button's `onClick` to also return focus to the hamburger button

## 5. Verify

- [x] 5.1 Run lint and type check to confirm no errors
