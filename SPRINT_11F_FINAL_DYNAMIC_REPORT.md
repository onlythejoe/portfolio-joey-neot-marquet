# Sprint 11F — Dynamic Responsive Final Fix

- Objectif : finaliser l’élargissement fluide des détails (desktop+mobile) et de l’overview mobile, centrer/assainir le footer, éviter tout overflow, sans toucher au menu/scroll-snap/halos/router ni au desktop overview.
- Détail : max-width desktop `clamp(65%, 72%, 80%)` avec paddings `clamp(6vw, 8vw, 10vw)` / `clamp(4vw, 6vw, 8vw)` ; mobile `clamp(80%, 92vw, 98%)` avec paddings `clamp(2vw, 4vw, 6vw)` appliqués aux sections/containers/views et classes `.ea-detail/.ea-section-detail`.
- Overview mobile : max-width `clamp(85%, 92vw, 98%)` et paddings `clamp(2vw, 4vw, 6vw)`.
- Grilles : colonnes dynamiques `repeat(auto-fit, minmax(min(48vw, 90%), 1fr)))`, gap `clamp(3vw, 4vw, 6vw)`, overflow-x hidden généralisé (root/sections/blocks/grids).
- Contact/pastilles : conteneur tags en flex wrap avec gap vw, overflow visible, transform-origin center pour ne plus tronquer les animations.
- Quotes : barre verticale supprimée, carte soft (fond léger, radius/padding en vw).
