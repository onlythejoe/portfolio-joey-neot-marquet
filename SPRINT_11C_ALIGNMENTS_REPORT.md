# Sprint 11C — Alignements & Layout Grid Fix

- Objectif : aligner tous les contenus sur un axe gauche unique calé sur la sidebar (progress-nav) sans toucher au moteur (scroll-snap, menu, router, halos).
- Actions clés :
  - Token d’offset ajouté (`--ea-progress-nav-width`, `--ea-content-offset-left`) pour calculer la marge gauche commune.
  - Sections/containers/previews/détails : padding gauche sur l’offset, align-items/text-align forcés en start, largeurs bornées pour éviter tout débordement.
  - UX Layer : stacks, grilles, blocks, tags, CTA, timelines, accordions réalignés (padding start sur offset, justify-items/start, marges auto retirées).
- Résultat : préviews et détails parfaitement alignés à gauche, pastilles/CTA sur le même axe, grilles et blocs cohérents avec la largeur du progress-nav.
- À vérifier : rendu iOS + très petits viewports pour confirmer qu’aucun wrap inattendu ne décale l’axe; contrôler le drop cap des grilles 3→2→1.
