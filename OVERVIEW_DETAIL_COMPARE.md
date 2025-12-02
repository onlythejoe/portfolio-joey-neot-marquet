# Overview vs Detail Compare

## Overview
- Desktop: `.ea-section` width 100%, container `min(var(--ea-content-wide), calc(100% - offset))`; padding left offset + pad-right token. Snap active. Overflow-x hidden from root. Grids: 3→2 columns at lg breakpoint (ux-layer), 1 col at md.
- Mobile: `#ea-page-content:not(.ea-content--detail) .ea-section` max-width `clamp(85%, 92vw, 98%)`, padding 2–6vw; container mirrors same. Blocks inherit ux-layer widths (max `var(--ea-content-max)`), may double-padding.
- Issues: combined offset + clamp can narrow; double padding (section + block) reduces usable width; overflow hidden may clip animations; grids rely on parent width—risk of overflow masked.

## Detail
- Desktop: `.ea-content--detail .ea-section` max-width `clamp(75%, 85%, 92%)`, paddings 4–8vw L / 3–7vw R; `.ea-container`, `.ea-view`, `.ea-detail/.ea-section-detail` mirror same width/padding; left-axis offset applied at lg breakpoint.
- Mobile: `.ea-detail/.ea-section-detail` max-width `clamp(90%, 96vw, 100%)`, padding 2–4vw; `.ea-content--detail .ea-section` at 80–98% with 2–6vw padding; containers/views match. Multiple width declarations overlap.
- Issues: competing width values between base and mobile media for detail; multiple layers (section/container/view/detail class) applying width/padding cause compression; overflow hidden on ancestors clips animated elements.

## Common Rules
- Overflow-x hidden on many layers; grids/stacks/blocks share 100% width but inherit parent clamps.
- Text max-width clamps (lead/paragraph) more generous, but container clamps may dominate.
