# Router / Loader v2 (Sprint 3)

- **Loader** (`assets/js/core/loader.js`) : AbortController par navigation, composition protégée (try/catch), évite les états partiels, dispatch analytics hook (`ea-analytics`) et `pageLoaded` détaillé.
- **Composer** (`assets/js/composer/composer.js`) : cache mémoire des sections, fetch parallèle, Abort-safe (cache nettoyé si abort), fallback user-friendly en cas d’erreur/section manquante.
- **Progress nav** (`assets/js/core/progress-nav.js`) : throttling via rAF, ResizeObserver pour recalculer les points actifs, teardown propre.
- **Scroll engine** (`assets/js/core/scroll-engine.js`) : seuil menu adaptatif mobile/desktop.
- **Menu** (`assets/js/core/menu.js`) : persistance de la page courante via sessionStorage (fallback si query vide).
- **SEO** (`assets/js/core/seo.js`) : titre + description + balises OG/Twitter, fallback robuste.
- **Compat** : aucune modification du routing/pages.json ou de la structure EA Lite; tous les hooks JS restent côté shell.
