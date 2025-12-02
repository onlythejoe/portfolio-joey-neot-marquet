## Sprint 14 — UX Layer Polish

### Scope
- UX layer only (blocks, stacks, cards, quotes, notes, highlights, case-study, patterns, tags/pills, CTA, UX grids). No layout/master/sections touched.

### Changes
- Padding/background contract: `clamp(2vw, 3vw, 4vw)` + light glassmorphism (rgba surface, subtle border, blur, rounded clamp radius) applied to blocks, cards, notes, quotes, highlights, case-study, generic `.ux-pattern`.
- Gaps unified: stacks, blocks, cards, grids, tags now use `gap: clamp(1.5vw, 2.5vw, 3.5vw)`.
- CTA polish: padding `clamp(1vw, 1.4vw, 1.8vw) clamp(2vw, 3vw, 4vw)`, rounded clamp radius, consistent thin border, overflow visible; hover offsets converted to vw.
- Tags/Pills: pill padding/radius in vw clamps, gaps tightened to `clamp(1.5vw, 2.5vw, 3.5vw)`, overflow kept visible and wrap-safe.
- Quotes refreshed as cards (no side bar) with coherent padding/background/border.
- Overflow safety: blocks/cards/stacks/tags/CTA/grids now default to `overflow: visible` to avoid animation clipping; UX grids keep layout but allow overflow.
- Mobile polish (≤ var(--ea-bp-md)): key UX components forced to `max-width: 100%` with `padding: clamp(3vw, 4vw, 5vw)`.
- Case-study pattern updated with new padding/background/border/radius (ux-patterns.css).

### Files
- assets/css/ui/ux-layer.css
- assets/css/ui/ux-patterns.css
- SPRINT_PLAN.md

### Expected outcome
- Consistent breathing and visual coherence across UX primitives.
- No CTA/tag/pill clipping; contact animations remain visible inside grids/blocks.
- Mobile UX has generous padding without altering section/container layout.
