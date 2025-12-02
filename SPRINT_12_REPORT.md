# Sprint 12 — Foundation Reset (Read-only phase)

- Scope: audit + contract + patch plan, followed by minimal CSS patch (layout widths/paddings/overflow) with systems untouched (menu/scroll-snap/halos/router/HTML/typography).
- Findings (high level):
  - Detail widths defined in multiple places with conflicting clamps; compounded padding and left-offset narrow content, especially near breakpoints.
  - Overview mobile relies on clamp widths plus offset/padding, leading to occasional shrink; grids depend on parent width and can overflow before being hidden.
  - Global overflow-x hidden masks issues and clips animations (tags/CTAs), while inner blocks also hide overflow.
  - Breakpoints differ between master and ux-layer grid rules, causing jumps; mixed padding sources stack vertically/horizontally.
- Deliverables produced:
  - `LAYOUT_CONTRACT_DRAFT.md`
  - `CSS_CONFLICT_MAP.md`
  - `RESPONSIVE_BREAK_MAP.md`
  - `ANIMATION_CLIP_MAP.md`
  - `OVERVIEW_DETAIL_COMPARE.md`
  - `SPRINT_12_PATCH_PROPOSAL.md`
- Patch applied: unified detail/overview width contracts, eased paddings, reduced global overflow clipping, and softened detail block padding using vw/% clamps only.
