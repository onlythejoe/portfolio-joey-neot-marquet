# Sprint 11D — Final Spacing & Breathing Pass

- Objectif : ajuster uniquement les espacements (horizontaux/verticaux) pour retrouver un rendu premium, sans toucher au moteur (scroll-snap, menu, router, halos) ni à l’axe gauche calibré.
- Actions :
  - Tokens ajoutés : `--ea-detail-padding-inline`, `--ea-axis-desktop-gap`, `--ea-section-pad-top/bottom` pour piloter padding detail, gap desktop vs progress-nav, et respiration verticale.
  - Detail view : padding inline appliqué aux sections/containers/ux blocks en mode detail, alignement gauche conservé, conteneur recentré visuellement.
  - Preview/desktop : offset gauche augmenté au-dessus de `--ea-bp-lg` pour éloigner le contenu du progress-nav sans toucher au scroll-snap.
  - Vertical : padding top/bottom harmonisé via nouveaux tokens sur sections et vues.
- Fichiers touchés : tokens, sections.master, ux-layer, plan sprint mis à jour.
- QA à faire : vérifier sur desktop que le détail est respirant mais toujours aligné, et sur mobile/tablette que les paddings verticaux restent cohérents sans overflow.
