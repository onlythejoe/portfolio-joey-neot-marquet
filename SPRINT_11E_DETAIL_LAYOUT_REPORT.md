# Sprint 11E — Detail Layout Rework

- Objectif : élargir les pages détail desktop, alléger les marges mobile, recentrer les blocs tout en conservant l’alignement gauche et sans toucher aux previews/scroll/menu/halos/router.
- Actions :
  - Tokens ajoutés : `--ea-detail-max-width`, `--ea-detail-pad-mobile` pour piloter largeur max et padding inline spécifique aux détails.
  - Mode détail : sections/containers/views/stacks/blocks reçoivent `max-width` élargi, `margin-inline:auto` et padding inline dédié; desktop conserve l’axe gauche avec l’offset existant.
  - Mobile : padding inline des détails resserré via `--ea-detail-pad-mobile`.
  - Bouton Overview/Back : isolé via block inline-flex, margin-bottom cohérent, `max-width: fit-content` pour ne plus contraindre la grille.
- Livrables : DETAIL_LAYOUT_ISSUES.json, DETAIL_LAYOUT_DIFF.patch, plan sprint mis à jour.
