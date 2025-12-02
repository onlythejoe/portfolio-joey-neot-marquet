# Risques Halos + mitigations

- **Scroll-snap / flux** : un conteneur mal positionné pourrait modifier le flux. Mitigation : `position:fixed; inset:0; pointer-events:none; z-index` sous l’UX, aucun impact sur `#ea-page-content`.
- **Performance blur** : 3 gros flous peuvent coûter cher sur mobile. Mitigation : limiter la taille max, utiliser `will-change:transform`, `filter:blur()` modéré, désactiver animations en PRM.
- **Layering menu/progress-nav** : halos au-dessus du menu (z=1000) ou du skip-link (2000) nuiraient à la lisibilité. Mitigation : z-index < menu, isolation pour éviter le bleed du blur sur la bulle menu.
- **Transitions preview/détail** : pas d’événement dédié actuellement ; risque d’absence de crossfade au passage detail. Mitigation : écouter `[data-section-trigger]` ou observer les classes `.ea-mode-detail` / `.ea-content--detail` pour déclencher le changement de palette.
- **Routing/back** : navigation par `popstate` relance le loader ; si le halo manager ne se resynchronise pas, palette obsolète. Mitigation : hook sur `ea-page-loaded` + réinitialisation safe à chaque load.
- **Compat PRM / motion sickness** : animations visibles malgré PRM. Mitigation : media query `prefers-reduced-motion` pour désactiver transitions/animations et figer les halos.
- **Responsive / overflow** : sur petits écrans, halos trop concentrés. Mitigation : positions recalculées par viewport size et clamps (`min/max`) pour éviter les hotspots.

