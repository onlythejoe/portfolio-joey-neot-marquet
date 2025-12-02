## Sprint 13 — Detail Final Fix

### Scope
- Detail pages (desktop + mobile): single width/padding contract, padding stack removal, overflow release, grids forced to 1 column.
- Overview mobile: widened container/section.
- Systems untouched: menu, scroll-snap, halos, router/loader, HTML, tokens/breakpoints, overview desktop.

### Changes implemented
- Detail section contract: `max-width: clamp(80vw, 86vw, 90vw)` desktop, `clamp(94vw, 98vw, 100vw)` mobile; padding-inline clamp(3–5vw desktop, 2–4vw mobile); overflow visible.
- Removed descendant width/padding layers in detail: containers, views, detail wrappers now 100% width/max-width, no inline padding/margins, overflow visible.
- Unified padding removal in detail: UX blocks/stacks/tags/patterns/grids/cards/notes/etc. set to 0 inline padding, full width, overflow visible.
- Grids in detail: `.ux-grid-2/3` set to 1 column, gap clamp(2–4vw), overflow visible to protect animations.
- Overflow safeguards: detail mode releases overflow-x on `#ea-root` and `#ea-layout`; section/container/view/detail/tags/blocks/grids made visible.
- Overview mobile widening: sections + containers to `max-width: clamp(92vw, 96vw, 100vw)`, padding-inline clamp(2–4vw), centered.

### Files touched
- assets/css/master/sections.master.css
- assets/css/master/ea.master.css
- assets/css/ui/ux-layer.css
- SPRINT_PLAN.md

### Expected outcomes
- Detail desktop content uses 80–90% viewport with single padding layer; left axis applied once via section padding.
- Detail mobile near-full width (~94–100%); no horizontal scroll; readable text.
- Animations/pills/CTA un-clipped; grids no longer shrink width.
- Overview mobile wider without affecting desktop.

### Notes
- Scroll-snap and menu logic remain intact; tokens/breakpoints untouched.
