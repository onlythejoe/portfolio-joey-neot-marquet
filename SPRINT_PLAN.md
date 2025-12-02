**Sprint 1 — Stabilisation technique**
- Corriger imports CSS (contact.css manquant, doublon head/master), aligner une seule définition de layout `.ea-container/.ea-section/.ea-view`. [✔️ DONE — 2025-12-01]
- Créer une feuille contact.css minimale et remplir les feuilles pages vides ou arrêter leur import. [✔️ DONE — 2025-12-01]
- A11y rapide : focus styles visibles, `aria-label` nav, `rel="noopener"`, `prefers-reduced-motion` sur animations/scroll-snap. [✔️ DONE — 2025-12-01]
- SEO minimal : meta description dynamique par page, titre h1 par page, canonical statique. [✔️ DONE — 2025-12-01]

**Sprint 2 — Design System unifié**
- Fusion tokens/theme (échelle typographique, espaces, z-index, couleurs) et suppression des doublons EA vs UX components. [✔️ DONE — 2025-12-01]
- Structurer UX patterns : hero, manifesto, case-study, FAQ, contact → variantes responsives, CTA contextualisés. [✔️ DONE — 2025-12-01]
- Revoir responsive layout (abandon 100vh strict sur mobile, grilles fluides, padding adaptatif). [✔️ DONE — 2025-12-01]

**Sprint 3 — Router/Loader v2**
- Cache des sections fetchées, abortController sur navigation, chargement parallèle des sections, gestion d’erreurs user-friendly. [✔️ DONE — 2025-12-01]
- Progress-nav throttle + resize observer; menu state persistant; scroll engine compatible mobile. [✔️ DONE — 2025-12-01]
- Enrichir SEO (OG/Twitter, meta per page), analytics hooks optionnels. [✔️ DONE — 2025-12-01]

**Sprint 4 — Contenus & DA**
- Réécrire les pages clés (Home, Portfolio, Contact) avec preuves, visuels (ou placeholders réels) et microcopy claire. [✔️ DONE — 2025-12-01]
- Harmoniser hiérarchie Hn, raccourcir les blocs, utiliser listes/metrics/quotes parcimonieusement. [✔️ DONE — 2025-12-01]
- Activer un pipeline de build léger (Vite/Rollup) pour bundler/minifier CSS/JS, gérer les versions, préparer un hébergement.

**Sprint 5 — Perf & QA**
- Mesures Lighthouse (perf/a11y/best practices/SEO), bench bundle size, audit scroll-snap sur mobile. [✔️ DONE — 2025-12-01]
- Tests fonctionnels simples (open/back, popstate, navigation menu, fallback offline) + linters (stylelint/eslint minimal). [✔️ DONE — 2025-12-01]
- Ajuster animations (GPU-friendly, pas de layout thrash), lazy-load assets visuels quand ajoutés. [✔️ DONE — 2025-12-01]

**Sprint 6 — Halos Dynamic Background**
- Ajouter la couche `#ea-halos` (CSS+JS) sous l’UX, pilotée par palette par page, animations lentes PRM-safe. [✔️ DONE — 2025-12-05]
- Charger les palettes depuis `assets/data/halos.datamap.json`, transition douce sur `ea-page-loaded`, fallback par défaut. [✔️ DONE — 2025-12-05]
- Documentation d’intégration + rapport sprint. [✔️ DONE — 2025-12-05]

**Sprint 8 — Optimisation des previews**
- Réécrire et condenser toutes les previews (home, about, expertises, portfolio, vision) avec pattern UX unifié (tags, stack, leads courtes). [✔️ DONE — 2025-12-06]
- Renforcer lisibilité mobile (2–3 lignes max), hooks clairs, respect UX Layer sans toucher aux détails. [✔️ DONE — 2025-12-06]
- Produire audit + rewrites + diff + rapport Sprint 8. [✔️ DONE — 2025-12-06]

**Sprint 9 — Responsive global**
- Audit responsive complet (pages + CSS), cartographie des points à corriger. [✔️ DONE — 2025-12-06]
- Clamp typo, CPL limité, grilles repliées (ux-grid-2/3), padding/gaps mobiles réduits, tags/CTA wrap-safe, overflow-x hidden. [✔️ DONE — 2025-12-06]
- Rapports livrés (audit, issues, CSS map, diff, report). [✔️ DONE — 2025-12-06]

**Sprint 10 — Responsive ultra-polish**
- Audit v2 (typographies, grilles, alignement tags/CTA, paddings, overflow) et cartographie. [✔️ DONE — 2025-12-06]
- Ajustements CSS : CPL resserré, line-height mobile, grids 3→2 cols tablette puis 1 mobile, tags/CTA centrés et wrap, padding clampé, containers centrés, overflow-x protégé. [✔️ DONE — 2025-12-06]
- Livrables (audit/issue/map/report/diff) produits. [✔️ DONE — 2025-12-06]
