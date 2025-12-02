# Audit V2 — Halos Layer

- Couche graphique globale ajoutée : `#ea-halos` (fixed, pointer-events:none, z-index bas) insérée dans `#ea-root` avant `#ea-layout`.
- Data-driven : palettes par page via `assets/data/halos.datamap.json` (fallback par défaut), chargées par `assets/js/core/halos.js`.
- CSS : `assets/css/ui/halos.css` (3 halos, blur élevé, opacité faible, drift lent 32–46s, PRM-safe).
- Lifecycle : écoute `ea-page-loaded` (loader) + init DOMContentLoaded pour assurer la palette active sur preview/détail ; transitions 0.6s.
- Intégration : aucune modification du scroll-snap, du menu ou des sections ; isolation et contain pour éviter les fuites de blur.
