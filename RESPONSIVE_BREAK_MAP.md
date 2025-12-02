# Responsive Break Map

## Compression Zones
- Detail desktop: multiple max-width clamps (75–85–92%) plus left-offset + axis gap + inner padding reduce usable width; compounded by block padding in ux-layer.
- Detail mobile: section/container/view widths (80–98%) plus paddings and block padding; small viewports risk double padding reducing text column.
- Overview mobile: section and container clamps (85–98%) plus per-block padding; if axis offset persists, width may shrink further.

## Over-Expansion / Overflow Risks
- Grids with min columns `min(48vw,90%)` can overflow if parent width is clamped but global overflow hidden hides the issue; animations in tags may extend beyond container but clipped by ancestor overflow hidden.

## Padding Doubling
- Horizontal: sections.master padding + container padding + ux-block padding in detail mode. Mobile overrides add another layer.
- Vertical: section pad top/bottom + view pad + block pad; inconsistent across breakpoints leading to tall stacks on mobile.

## Clamp Conflicts
- Desktop detail clamps differ between base and desktop media (75–85–92 vs same but applied differently); mobile overrides to 90–100% only on `.ea-detail/.ea-section-detail`, leaving `.ea-content--detail .ea-section` at 80–98% inside media → competing width values.
- Grids collapse rules in ux-layer vs sections container widths; simultaneous rules at md/lg thresholds cause layout jumps.

## Animation Clipping
- Global overflow-x hidden on root/sections/stacks/blocks/grids; tags set overflow visible but ancestors clip hover/transform.

## Likely Breakpoints with Issues
- Near `--ea-bp-md` (~56rem): overview switches to mobile sizing, but grids also collapse; compounded paddings narrow content.
- Below `--ea-bp-sm` (~40rem): accumulated padding + min column widths risk overflow/clipping; detail mobile columns constrained. 
