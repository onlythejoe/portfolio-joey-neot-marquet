# Halo Tech Map (DOM + CSS + JS)

- **Placement DOM cible**
  - Body actuellement : skip-link → `#ea-root` → slots → `#ea-layout` → footer. Ajouter `div#ea-halo-layer` (ou équivalent) juste après `#ea-body-start-slot` et avant `#ea-layout` pour se placer entre le fond et tout l’UX. `position:fixed; inset:0; pointer-events:none;` pour couvrir le viewport y compris en mode détail.
  - Contenu halos : 3 éléments (ex : `.ea-halo`), générés côté JS, floutés via CSS (blur/box-shadow + mix-blend si besoin). Aucune dépendance Canvas requise.

- **CSS / layering**
  - Fonds : body `background: var(--ea-bg,#000)`. Aucun autre layer global → halo-layer peut utiliser `z-index:var(--ea-layer-base,1)` pendant que menu reste à 1000 et skip-link à 2000. Prévoir `contain: paint; isolation:isolate;` pour empêcher le blur de “manger” le menu.
  - Scroll container : `#ea-page-content` gère `scroll-snap`. Les halos étant fixed et `pointer-events:none`, ils ne doivent pas altérer le flux ou le snap.
  - Responsive : mobile (< var(--ea-bp-md)) désactive le progress-nav et réduit les paddings ; halo-layer reste full-viewport, pas de recalcul structurel.
  - PRM : `@media (prefers-reduced-motion: reduce)` → couper transitions/animations des halos et figer les positions.

- **JS / lifecycle hooks**
  - Page load : écouter `window` sur `ea-page-loaded` (EVENTS.pageLoaded) pour : (1) lire `detail.page`/`detail.section`, (2) récupérer la palette (pages.json ou map JS), (3) recalculer positions/targets des 3 halos, (4) lancer crossfade couleur.
  - Navigation arrière : `popstate` déclenche `load()` → `ea-page-loaded` rejoué → même hook pour remettre la palette.
  - Preview → detail : aucune event dédiée. Points d’ancrage possibles :
    - Attacher des listeners sur `[data-section-trigger="open"]` / `[data-section-trigger="back"]` pour émettre un custom event `ea-section-mode-change` (payload `{page, section, mode:'detail'|'preview'}`) utilisé par le halo manager.
    - Alternative sans mutation du core : MutationObserver sur `body.classList` (`ea-mode-detail`) ou `#ea-page-content` (`ea-content--detail`).
  - Progress-nav / scroll-engine : consomment `ea-page-loaded` et le scroll du conteneur. Halos ne doivent pas ajouter d’écouteurs scroll lourds (calculer positions une fois par page, animations via CSS).

- **Données palette**
  - Source recommandée : extension de `config/pages.json` (ajout `palette`) ou map JS `const HALO_PALETTES = { home:{colors:[...]}, ... }`. Trois couleurs minimum ; prévoir fallback global si page inconnue.
  - Exposition CSS : injecter `--ea-halo-1/2/3` sur `#ea-halo-layer` ou `:root` pour permettre un theming pur CSS si besoin.

- **Animation / transitions**
  - Micro-mouvements via CSS variables (scale/translate/blur) animés avec durées `--ea-dur-slow` ou >1.5s, ease douce (`--ea-ease-emph`). Crossfade couleur via `opacity` sur 2 sets de halos ou via transition sur `background-color`.
  - En PRM, basculer en statique (`animation:none`, `transition:none`).

