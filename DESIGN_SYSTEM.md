# Design System — EA Lite / UX Layer (Sprint 2)

## Structure des feuilles
- `assets/css/tokens/ea.tokens.css` : source unique des tokens (couleurs, typographies, espacements, rayons, breakpoints, z-index, durées). Aliases legacy conservés (`--ea-max`, `--ea-max-width`) pointent vers `--ea-layout-max`.
- `assets/css/core/reset.css` : reset basé sur les tokens (bg/fg/typo).
- `assets/css/core/theme.css` : shell léger (color-scheme dark, héritage bg/fg/typo).
- `assets/css/core/layout.css` : layout de base `.ea-container` (pad + largeur) utilisant les tokens unifiés.
- `assets/css/master/*.css` : shell EA (menu, sections, progress nav).
- `assets/css/ui/ux-layer.css` : primitives & blocks UX (titles, paragraphes, cards, badges, grids, accordions, timelines, cta).
- `assets/css/ui/ux-patterns.css` : patterns narratifs (hero-detail, manifesto, case-study, faq).
- `assets/css/pages/*.css` : feuilles pages (minimales, prêtes pour styles spécifiques).

## Principes de séparation
- `ea-*` : shell/framework (layout, navigation, progress nav, slots). Les définitions structurantes vivent dans `core/layout.css` et `master/sections.master.css`.
- `ux-*` : contenu/patterns (primitives, blocks, grids, patterns). Les alias `ea-*` existants pour cards/badges/accordion/timeline sont conservés mais pointent vers les styles UX.

## Tokens unifiés (extraits)
- Couleurs : `--ea-bg`, `--ea-fg`, `--ea-fg-soft`, `--ea-fg-dim`, `--ea-accent-1/2/3`, `--ea-surface-1/2/3`.
- Typo : `--ea-font-main`, `--ea-font-size-sm/md/lg/xl/xxl`, `--ea-leading-sm/md/lg`, `--ea-weight-regular/medium/semibold`.
- Layout : `--ea-layout-max` (canonical) + alias legacy `--ea-max`, `--ea-max-width`; `--ea-pad`, `--ea-section-vspace`, `--ea-view-height`, échelle d’espacement `--ea-space-*`, grid `--ea-grid-*`.
- Radius : `--ea-radius-xs/sm/md/lg/xl`.
- Motion : `--ea-dur-*`, `--ea-ease-*`.
- Breakpoints : `--ea-bp-sm/md/lg/xl` (rem-based, mobile-first).
- Z : `--ea-layer-base/overlay/modal`.

## Responsiveness
- Grids UX (`.ux-grid-2`, `.ux-grid-3`) et side-note se replient en 1 colonne < `--ea-bp-md`.
- Section padding et container width pilotés par `--ea-pad`, `--ea-layout-max`.
- `prefers-reduced-motion` neutralise scroll-snap/animations clés.

## Legacy / compatibilité
- Variables dépréciées : `--ea-max`, `--ea-max-width` conservent leur valeur via alias.
- Composants EA legacy (`.ea-card`, `.ea-badge`, `.ea-accordion`, `.ea-timeline-vertical`) restent stylés via l’UX layer partagé.
