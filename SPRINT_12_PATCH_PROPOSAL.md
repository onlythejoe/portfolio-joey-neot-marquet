# Sprint 12 — Patch Proposal (minimal, CSS only, no critical systems touched)

Focus: widen overview/detail, unify padding, remove overflow clipping, keep snap/menu/halos/router intact. Allowed units: vw/vh/%/clamp/calc with vw/vh/%.

Proposed minimal edits (6–12 items):

1) Single width contract per mode  
- Define shared custom properties (or single declarations) for detail width/padding (desktop/mobile) and overview mobile width/padding in one place (sections.master). Remove duplicate width rules on `.ea-detail/.ea-section-detail` if redundant with `.ea-content--detail .ea-section/.ea-container/.ea-view`.

2) Overview mobile width/padding  
- Set `.ea-section` + `.ea-section > .ea-container` (only when not detail) to `max-width: clamp(88%, 94vw, 98%)`, `padding-inline: clamp(2vw, 4vw, 6vw)`; avoid additional padding on inner blocks for overview.

3) Detail desktop width/padding  
- Set `.ea-content--detail .ea-section` (and its container/view) to `max-width: clamp(78%, 86%, 94%)`, `padding-inline: clamp(3vw, 5vw, 7vw)`; align `.ea-detail/.ea-section-detail` to the same values and remove extra width declarations.

4) Detail mobile width/padding  
- Under `max-bp-md`, set detail section/container/view to `max-width: clamp(92%, 98vw, 100%)`, `padding-inline: clamp(2vw, 3.5vw, 5vw)` to reduce compression and keep safe edges.

5) Padding deduplication  
- Ensure only one horizontal padding source per mode: keep it on section/container, remove/neutralize inner block padding in detail mode (ux-layer) or reduce to minimal `clamp(1.5vw, 2.5vw, 3.5vw)` while keeping `width:100%`.

6) Overflow strategy  
- Remove global overflow-x hidden on root/sections/stacks/grids in `ea.master.css`; keep overflow-x hidden only on specific problem children if needed. Allow `.ux-tags`/animated pills to breathe by ensuring their parent does not hide overflow while guarding widths to prevent scroll.

7) Grids  
- Standardize on `grid-template-columns: repeat(auto-fit, minmax(min(48vw, 92%), 1fr)))` and `gap: clamp(3vw, 4vw, 6vw)` for both overview/detail contexts; ensure parent widths align with width contract.

8) Vertical rhythm  
- Pick one vertical padding source (section) and reduce/neutralize view/block vertical padding to avoid stacked vertical gaps; keep dvh-based section spacing.

9) Animation clipping  
- For contact/tags containers, ensure closest ancestor with overflow hidden is relaxed to overflow visible while higher-level width/padding prevents scroll; keep overflow hidden on large wrappers only if validated.

10) Left-axis preservation with lighter gap  
- Maintain axis offset, but allow a slight reduction (e.g., `calc(offset - 1vw)` cap) if needed to reclaim space—without removing the axis.

Files to edit (phase 3): `assets/css/master/ea.master.css`, `assets/css/master/sections.master.css`, `assets/css/ui/ux-layer.css`. No JS/HTML changes. No rem/px/em/ch.
