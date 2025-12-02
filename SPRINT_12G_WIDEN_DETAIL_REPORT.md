# Sprint 12.G — Widen Detail Everywhere

- Objectif : élargir réellement les pages détail desktop/mobile tout en laissant les overviews et systèmes critiques intacts.
- Actions :
  - Détail desktop/mode detail : largeur unifiée `clamp(82%, 88%, 96%)`, padding latéral `clamp(3vw, 5vw, 6vw)` appliqués à section/container/view et classes `.ea-detail/.ea-section-detail`; overflow rendu visible pour ne plus tronquer les animations.
  - Détail mobile : largeur portée à `clamp(94%, 98vw, 100%)`, padding `clamp(1.5vw, 2.5vw, 4vw)` (sections/containers/views/detail classes).
  - Inner blocks detail : padding minimal `clamp(1vw, 1.5vw, 2vw)`, width/max-width 100%, overflow visible; grilles plus souples (`minmax(min(52vw, 94%), 1fr)`, gap `clamp(2vw, 3vw, 4vw)`).
  - Left-axis assoupli en mode detail via `--ea-left-offset: clamp(2vw, 3vw, 4vw)` (sans toucher overview).
- Résultat attendu : détail nettement plus large et respirant, animations contact non tronquées, aucun impact sur overview/menu/scroll-snap/halos/router/typos.
