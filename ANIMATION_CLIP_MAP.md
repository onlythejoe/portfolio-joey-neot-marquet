# Animation Clip Map

## Elements Affected
- Contact/Tags: `.ux-tags` declares `overflow: visible !important` and `transform-origin: center`, but ancestor `.ux-block`, `.ux-stack`, `.ea-section`, root overflow guards hide overflow-x, clipping animated pills/hover glows.
- CTAs / Buttons: `.ux-cta` hover/active transforms can be clipped by parent overflow hidden (blocks/stacks/sections).
- Timeline/Grids: overflow hidden on `.ux-grid-2/3` (ea.master also) may clip card hover/box-shadows.

## Responsible Parents
- Global: `html, body, #ea-root, .ea-section, .ux-stack, .ux-block, .ux-grid-2, .ux-grid-3 { overflow-x:hidden; }` in `assets/css/master/ea.master.css`.
- Detail wrappers: `.ea-content--detail .ea-section`, `.ea-section > .ea-container`, `.ea-content--detail .ux-stack/.ux-block` all set overflow-x hidden.

## Clip Reasons
- Safety overflow set to mask horizontal scroll instead of fixing width/padding, leading to hidden hover states.
- Combined padding/width clamps shrink inner space; when transforms extend beyond, overflow hidden cuts them. 
