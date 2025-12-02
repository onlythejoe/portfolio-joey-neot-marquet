# CSS Map — Responsive cibles (Sprint 9)

- Typo clamp & CPL : assets/css/ui/ux-layer.css (classes .ux-title/.ux-lead/.ux-paragraph/.ux-subtitle/.ux-label), appliquer clamp() et max-width 70–80ch.
- Grilles : assets/css/ui/ux-layer.css (.ux-grid-2/.ux-grid-3) et assets/css/ui/ux-patterns.css (ux-grid-2/3 usages), ajouter breakpoints forcés 1 colonne sous --ea-bp-md et --ea-bp-lg.
- Spacing/padding : assets/css/master/sections.master.css (section padding, view height), assets/css/ui/ux-layer.css (.ux-stack gap, .ux-highlight padding), ajuster versions mobiles.
- Tags/CTA : assets/css/ui/ux-layer.css (.ux-tag) et éventuellement CTA wrappers pour wrap/size ; assets/css/ui/components/ea.badges.css si needed (non touché ici).
- Overflow : assets/css/core/reset/theme (via tokens import) ou master to set body/ea-root overflow-x hidden.
- Scroll/height : assets/css/master/sections.master.css (min-height 100vh -> auto mobile), ensure snap off on mobile already; reinforce min-height auto for small screens.
