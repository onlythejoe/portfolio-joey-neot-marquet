# CSS Conflict Map (ea.master.css / sections.master.css / ux-layer.css)

## Width/Container Conflicts
- Detail width defined in multiple places: `.ea-content--detail .ea-section`, `.ea-content--detail .ea-container`, `.ea-content--detail .ea-view`, `.ea-detail/.ea-section-detail` (sections.master). Values differ per breakpoint, causing compounded narrowing.
- Root overflow guard (`ea.master.css`: html, body, #ea-root, .ea-section, .ux-stack, .ux-block, .ux-grid-2/3 { overflow-x:hidden; }) conflicts with needs for animated tags (ux-layer sets overflow visible on .ux-tags).
- Left offset + axis gap + container min calc in sections.master can reduce available width below intended clamp when combined with new wider clamps.

## Padding Duplication
- Horizontal padding applied at: `.ea-section`, `.ea-container`, `.ea-content--detail .ea-section/.ea-container/.ea-view`, `.ea-detail/.ea-section-detail`; ux-layer blocks/stacks add additional vw padding. Results in inconsistent breathing and effective content width loss.
- Vertical padding from section token + view padding + block padding stacks, yielding tall spacing variance across devices.

## Breakpoint Inconsistencies
- sections.master uses `@max-bp-md` (56rem) and `@min-bp-lg` (72rem); ux-layer collapses grids at `max(var(--ea-bp-lg))` and `max(calc(var(--ea-bp-md) - 0.02px))`. Overlapping ranges create small windows where multiple grid rules compete.

## Grids vs Containers
- ux-layer grids use `min(48vw,90%)` columns with vw gaps; containers in sections.master may be clamped narrower, forcing overflow-hidden rather than preventing overflow.

## Units Mix
- ux-layer still contains rem-based padding in highlights/cta/buttons; conflicts with vw-only strategy and produces scale mismatch on mobile.

## Overflow Sources
- Global overflow hidden masks issues but clips animations; blocks in detail set overflow hidden, while tags request visible overflow → hover/animations truncated by ancestor.
- Axis offset + container max-width calc can exceed 100% in small viewports when combined with inner padding, risking horizontal scroll. 
