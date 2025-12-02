# Sprint 11D — Dynamic Responsive (Detail + Overview Mobile)

- Objectif : fluidifier les pages détail et l’overview mobile sans toucher au menu, scroll-snap, halos, router, ni à l’axe gauche.
- Actions principales :
  - Conteneurs détail élargis et centrés (max-width clampé en vw/%), padding latéral clampé en vw, overflow-x protégé.
  - Mobile : paddings/detail resserrés en vw, sections overview mobiles plus larges avec padding en vw.
  - Typo (lead/paragraph) rendue fluide : max-width et line-height en clamp %/vw.
  - Grilles et blocs UX : colonnes dynamiques anti-overflow, padding vw, overflow-x hidden; boutons overview/back isolés précédemment maintenus.
- Résultat attendu : détail desktop plus confortable, détail/overview mobile moins compressés, aucun overflow horizontal, previews/desktop overview intactes.
