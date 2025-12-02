# Sprint 9 — Responsive Fixes

- Audit : typographies fixes sans clamp, grilles auto-fit non forcées en 1 colonne, padding généreux en mobile, tags/CTA pouvant déborder, min-height 100vh risquée.
- Corrections CSS :
  - Typo fluide et CPL : clamp pour titres/leads/paragraphe/labels, max-width sur stacks (82ch).
  - Grilles : `ux-grid-3` force 1 colonne dès `--ea-bp-lg`, `ux-grid-2/3` 1 colonne sous `--ea-bp-md`; gaps resserrés mobile.
  - Spacing : padding sections mobiles réduit; highlights/quotes/notes padding ajusté mobile; stacks gaps réduits mobile.
  - Tags/CTA : tags clamp + nowrap + wrap container; CTA max-width 100%, text-align center; overflow-x caché globalement.
  - Hauteur : sections/containers min-height auto en mobile pour éviter coupe avec scroll-snap.
- Livrables : SPRINT_9_RESPONSIVE_AUDIT.md, SPRINT_9_RESPONSIVE_ISSUES.json, SPRINT_9_CSS_MAP.md, SPRINT_9_RESPONSIVE_DIFF.patch.
- Tests : non (CSS statique).
