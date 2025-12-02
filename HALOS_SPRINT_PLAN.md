# Sprint Halos — plan d’implémentation

1) **Scoping & data** : définir le modèle de palette par page (JSON ou map JS), valider la liste des pages/sections à couvrir (config/pages.json). Ajouter les couleurs provisoires et le fallback global.
2) **Layering CSS** : créer `assets/css/ui/ea.halos.css` (ou équivalent) avec `#ea-halo-layer` fixed full-viewport, `pointer-events:none`, `isolation:isolate`, z-index bas. Définir les styles de base des 3 halos (rayon/blur/opacité) + PRM (animations coupées).
3) **Insertion DOM** : injecter le container halo dans `index.html` ou via le runtime global (composer-global) juste après `#ea-body-start-slot` et avant `#ea-layout`. Aucun impact sur les sections ou le menu.
4) **Palette plumbing (JS)** : créer un module `assets/js/core/halos-config.js` ou similaire qui expose `getPalette(page)` et éventuellement `getSectionPalette(page, section)`. Prévoir fallback.
5) **Halo manager (JS)** : module `assets/js/core/halos.js` qui :
   - écoute `ea-page-loaded` pour appliquer une nouvelle palette,
   - écoute les triggers preview/détail (`data-section-trigger` ou MutationObserver) pour adapter la palette si besoin,
   - génère/positionne 3 halos et applique un crossfade doux lors d’un changement de palette.
6) **Transitions & motion safety** : implémenter les animations lentes (translate/scale léger, blur micro-variation) et crossfade couleur. Respecter `prefers-reduced-motion` en désactivant ces effets.
7) **Intégration routing** : vérifier que les mises à jour de palette fonctionnent sur navigation menu + back (`popstate`) + reload. S’assurer que le halo-layer reste stable entre modes (preview/détail) sans shift visuel.
8) **QA rapide** : desktop snap vs détail, mobile (progress-nav masqué), PRM, performance (blur GPU), absence de capture des interactions. Ajouter une doc courte (README halos) si nécessaire.

