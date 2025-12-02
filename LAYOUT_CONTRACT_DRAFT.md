# Layout Contract Draft (Sprint 12 — draft, no code applied)

## Overview (Preview)
- Desktop: preserve current sidebar grid; content max-width derived from `var(--ea-content-wide)` minus left-offset; keep left-axis anchor. Pad inline via offset + pad token; no additional shrink.
- Mobile: target effective width `clamp(85%, 92vw, 98%)` with symmetric vw padding (≈2–6vw). Snap remains active unless detail mode disables it.
- Blocks/grids: single-column below md breakpoint; gaps in vw; avoid ancestor double-padding.

## Detail
- Desktop: target max-width ≈ `clamp(78%, 86%, 92%)` (centered), paddings `clamp(3vw, 5vw, 7vw)` L/R. Respect left-axis by ensuring offset is additive but not subtractive of width.
- Mobile: target max-width ≈ `clamp(90%, 96vw, 100%)`, paddings `clamp(2vw, 4vw, 6vw)`; maintain safe-edges without touching screen bounds.
- Containers/views/blocks must share the same width contract (single source) to avoid compounded narrowing.

## Margins / Respiration
- Vertical: use token-driven dvh clamps; avoid stacking padding from section + container + block. One vertical padding source per layer.
- Horizontal: single padding source per mode (overview/detail) applied at section/container level; inner blocks keep width:100% and minimal internal padding.

## Grids / Stacks
- Grids: `repeat(auto-fit, minmax(min(48–50vw, 90–95%), 1fr))`, vw gaps; ensure parent width allows at least one column without overflow.
- Stacks/blocks: width 100%, max-width 100% in detail; align-items start; overflow-x hidden only where necessary for layout, not on root wrappers.

## Text Width
- Max text width: `clamp(85%, 92vw, 100%)` on lead/paragraph; line-height clamp ~1.3–1.6. Avoid additional max-width on containers that would double-restrict.

## Overflow Avoidance
- Remove/avoid global overflow-x hidden on root when not required; prefer width/padding fixes. Allow overflow visible on animated pills/tags containers while guarding parent widths. Ensure calc(offset + width) never exceeds 100%.
