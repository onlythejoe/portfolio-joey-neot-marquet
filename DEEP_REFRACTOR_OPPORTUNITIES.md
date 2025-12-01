**Opportunités de refactor profond**
- Consolidation du Design System : fusion tokens/theme, suppression des composants EA redondants au profit d’une seule couche UX (cards/badges/accordion/timeline), rationalisation des variables (typo/spacing/z-index).
- Refactor layout : choisir une seule implémentation `.ea-container/.ea-section/.ea-view`, sortir du 100vh rigide, gérer mobile/landscape, introduire un système de grid unifié (gaps, columns, breakpoints).
- Router/loader : cache des sections, fetch parallèle, AbortController, gestion d’erreurs centralisée, transitions d’état, hooks lifecycle (beforeEnter/afterEnter) pour animations ou analytics.
- Accessibilité & SEO : hiérarchie Hn recalibrée, aria/roles sur triggers, focus styles, `prefers-reduced-motion`, meta description/OG par page, nav keyboard-first.
- Build & perf : mise en place d’un bundler (Vite/Rollup) pour concat/minifier CSS/JS, inlining critique CSS pour le shell, font loading optimisé (Inter ou alternative), lazy images/slots.
- Contenus & patterns : créer de vrais modules case study/contact/faq avec données structurées (JSON) consommées par des templates pour éviter la duplication de texte.
