# Sprint 11B — Responsive Perfect Polish

- Objet : polir la couche CSS sans toucher au moteur (menu, scroll-snap, router, halos), recentrer tous les contenus et corriger la bande noire iOS.
- Actions :
  - Tokens fluidifiés (typo, espaces, padding inline/block, grilles) + dvh partout (`body`, `#ea-root`, `#ea-layout`, `#ea-page-content`, `--ea-view-height`).
  - Recentrage robuste : `max-width` clampé + `margin-inline:auto` sur conteneurs, stacks, grilles, blocks, quotes, CTA/tags, patterns; padding-inline harmonisé.
  - Composants resserrés (cards, badges, accordéons, timeline, metrics) avec clamp et wrap-safe; grilles 3→2→1 conservées.
- Risques/QA : vérifier sur device iOS réel (safe-area et scroll-snap), passer un smoke responsive (mob/tab/desk) et contrôler l’absence d’overflow horizontal.
- Livrables : RESPONSIVE_FINAL_AUDIT.md, RESPONSIVE_FINAL_DIFF.patch (présent), mise à jour SPRINT_PLAN.md (Sprint 11B done).
