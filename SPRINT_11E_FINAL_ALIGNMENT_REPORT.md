# Sprint 11E — Footer & Detail Final Alignment

- Objectif : centrer parfaitement le footer et élargir légèrement les pages détail (mobile + desktop) en restant 100% fluide, sans toucher aux systèmes (menu, scroll-snap, halos, JS).
- Actions :
  - Footer : centrage complet (text-align, justify/align center) avec padding/gap en vw pour un rendu responsive.
  - Détail : max-width élargi `clamp(75%, 88vw, 98%)`, padding latéral `clamp(2vw, 4vw, 6vw)` sur sections/containers/views, overflow-x protégé.
  - Blocs UX détail : padding resserré `clamp(3vw, 4vw, 5vw)`, full width, overflow-x hidden.
- Résultat attendu : footer parfaitement centré, détails plus confortables sur mobile et desktop, aucun débordement, previews et systèmes inchangés.
