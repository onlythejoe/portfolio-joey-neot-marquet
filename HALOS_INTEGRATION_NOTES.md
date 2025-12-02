# Halos Dynamic Background Layer — Notes d’intégration

- **DOM & layering** : `#ea-halos` vit dans `#ea-root`, juste après `#ea-body-start-slot` et avant `#ea-layout`. `position:fixed; inset:0; pointer-events:none; isolation:isolate;` avec `z-index: var(--ea-layer-base,1)` pour rester sous le menu/sections.
- **CSS** : `assets/css/ui/halos.css` crée 3 `.ea-halo` (blur ~120px, opacité ~0.22–0.4). Couleurs via `--halo-1/2/3`, tailles via `--halo-size`, blur via `--halo-blur`, anim drift 32–46s. PRM coupe les animations.
- **Données** : palettes dans `assets/data/halos.datamap.json` (`default` + `pages[]`). Chaque entrée : `{ "page": "home", "colors": ["#...","#...","#..."], "intensity": 1 }`. `detailColors` est accepté en fallback mais preview/détail partagent la même palette.
- **JS** : `assets/js/core/halos.js` charge la datamap (fetch + cache), choisit la palette en fonction du `?page`, applique les variables + positions semi-aléatoires, écoute `ea-page-loaded` (dispatch par `loader.js`) et initialise aussi au DOMContentLoaded.
- **Transitions** : changement de page → transition 0.6s sur `background-color/transform` des halos. Première peinture fade-in via `#ea-halos.is-ready`.
- **PRM** : media query coupe les animations; transitions réduites. Pas de rAF/interval ; tout en CSS.
- **Safety** : aucune modification du flux ou du scroll-snap ; `pointer-events:none`; blur limité à 3 layers ; positions clampées pour éviter le bleed sur mobile.
