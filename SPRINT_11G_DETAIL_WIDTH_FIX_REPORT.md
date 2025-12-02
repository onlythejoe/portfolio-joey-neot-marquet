# Sprint 11G — Detail Width Fix

- Objectif : corriger la rétraction des pages détail (desktop + mobile) du sprint précédent, sans toucher au menu, scroll-snap, halos, JS, previews, ni à la structure HTML.
- Actions :
  - Détail desktop élargi : `max-width: clamp(75%, 85%, 92%)`, paddings `clamp(4vw, 6vw, 8vw)` / `clamp(3vw, 5vw, 7vw)`.
  - Détail mobile élargi : `max-width: clamp(90%, 96vw, 100%)`, paddings `clamp(2vw, 3vw, 4vw)` (appliqués aux sections/containers/views et classes `.ea-detail/.ea-section-detail`).
  - Blocs/stack détail : full width, overflow-x hidden conservé.
- Résultat attendu : pages détail nettement plus larges et lisibles, aucune overflow horizontale, overviews inchangées.
