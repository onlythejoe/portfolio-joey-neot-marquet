# Responsive Final Audit (Sprint 11B)

- Scope respecté : uniquement `assets/css/{core,master,ui}` (+ tokens), aucune modification du menu, scroll-snap, halos, router/loader.
- Centrage : `--ea-content-max`/`--ea-content-wide` + `margin-inline:auto` appliqués aux conteneurs (`.ea-container`, `.ea-section > .ea-container`), stacks/grids/patterns, blocks/quotes/CTA/tags; padding-inline commun `clamp(1rem, 4vw, 3rem)`.
- Fluidité : nouvelle échelle typo/leading en `clamp`, espaces/paddings/grids clampés; grilles 3→2→1 conservées avec `--ea-grid-col-min` fluide et gaps clampés.
- iOS bande noire : `body`, `#ea-root`, `#ea-layout`, `#ea-page-content`, `--ea-view-height` passés en `dvh` + `min-height:100dvh`, backgrounds cover/center, overflow-y auto sur wrappers; aucune touche au scroll engine.
- Densité mobile : gaps/paddings réduits via tokens, cards/badges/accordéons/timeline/metrics réajustés (clamp, wrap-safe, max-width centrés) pour éviter l’overflow horizontal.
- Points de vigilance QA : vérifier sur device iOS (safe-area + scroll-snap), contrôler l’alignement centré des blocs dans les pages longues, s’assurer que les CTA/badges restent lisibles en très petit viewport.
