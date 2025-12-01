**Architecture & Organisation**
- Stack statique vanilla : `index.html` + slots injectés depuis `layout/*.html` et `components/*.html` via `composer-global.js`; sections fetchées dynamiquement selon `config/pages.json`.
- Redondances : `layout/head.html` réimporte `ea.master.css` (déjà dans `index.html`), `core/layout.css` et `ui/layout/ea.layout.css` définissent tous deux `.ea-container/.ea-section/.ea-view` avec des valeurs différentes.
- Pages CSS importées en dur dans `index.html` (`home.css`, `about.css`, `expertises.css`, `portfolio.css`, `launch-lab.css`, `contact.css`) mais seulement 5 existent et sont vides; `contact.css` absent → 404 réseau à chaque chargement.
- Placeholders non raccords : `pages/about/index.html`, `pages/expertises/index.html` vides; absence de `pages/expertises/web-premium.html` alors que l’IDE l’attend; page contact ne suit pas le pattern preview/detail.

**CSS / Tokens / UX Layer**
- Tokens : palette simple, échelles de tailles/espaces/radius, z-layers définis mais rarement utilisés. `theme.css` définit aussi `--ea-max`/`--ea-pad` → collision silencieuse avec `ea.tokens.css`.
- Imports : `ea.master.css` (reset/theme/layout/menu/sections) puis tokens, puis UX layer/patterns, puis pages. L’ordre rend les tokens plus spécifiques, mais la couche layout déjà appliquée → incohérence potentielle.
- Doublons : composants EA (`ea-card`, `ea-badge`, `ea-accordion`, `ea-timeline`) recodés en UX (`ux-card`, `ux-badge`, `ux-accordion`, `ux-timeline`). Entretient deux API pour le même besoin.
- Responsive minimal : seul le menu a des media queries; les sections/containers n’adaptent pas la hauteur 100vh en mobile (risque de scroll cassé), grilles utilisent `auto-fit` sans breakpoints contextuels, pas de stratégie typographique fluide.
- Motion : aucune prise en compte de `prefers-reduced-motion`; une seule animation (`ea-fade-in`), pas d’échelle de timings malgré tokens présents.
- Z-index : tokens définis mais non appliqués; le menu fixe n’emploie pas d’échelle.
- Page CSS vides → dette : pas de stylage spécifique, tout repose sur primitives.

**JS / Loader / Router**
- `loader.js` : résout page/section via query params; injecte les slots puis compose la page; dispatch `ea-page-loaded`.
- `composer.js` : fetch séquentiel des sections (pas de cache, pas d’abort, pas de parallélisation). En cas d’erreur → section “Missing”. `history.pushState` utilisé pour open/back mais pas de gestion d’état concurrent (clics rapides/popstate).
- `config-cache.js` : cache mémoire basique mais pas d’expiration; aucune gestion d’échec réseau (retourne `{}` silencieux).
- `progress-nav.js` : calcule l’active via `getBoundingClientRect` sur chaque scroll; pas de `ResizeObserver` ni de throttling.
- `scroll-engine.js` : affiche le menu après 50px de scroll; pas de debounce; dépend du scroll container interne.
- `menu.js` : active lien courant via query param; ajoute classe tactile `ea-pressed` globalement sans nettoyage sur navigation.
- `seo.js` : ne gère que le titre; pas de meta description/OG/lang alternates; pas de canonical.

**Performance**
- 955 lignes CSS importées en 12 fichiers non minifiés; 5 feuilles vides + 1 manquante → requêtes inutiles. Tout est chargé même si certaines pages ne sont pas visitées.
- 400 lignes JS ES modules non bundlés; fetch multiples (slots + sections) en série sur chaque navigation/refresh; pas de cache pour sections déjà visitées.
- Pas de gestion des fontes (Inter non chargée) : fallback system → rendu variable; aucune preconnect/prefetch.
- Slots head/body injectés côté body (non critique mais inutile); duplication du master CSS.
- Layout en 100vh + scroll interne peut générer reflows fréquents; progress-nav calcule sur chaque scroll sans throttle.

**Accessibilité technique**
- Focus : pas de styles focus custom; menu invisible avant scroll >50px → navigation clavier initiale impossible vers les autres pages.
- ARIA : aucun rôle ou `aria-expanded` sur open/back; nav n’a pas de `aria-label`; liens externes sans `rel="noopener"`.
- Hiérarchie Hn : h1 uniquement dans `home/hero`; le reste en h2/h3 non reliés aux pages → SEO/a11y affaiblis.
- `prefers-reduced-motion` ignoré; scroll-snap forcé même sur mobile → peut nuire aux lecteurs d’écran/gestes.

**Risques techniques**
- Incohérence de layout entre modules (double définition `.ea-container/.ea-section`).
- Erreurs silencieuses (fetch fail) non remontées; absence de timeout/abort → potentiels clignotements ou états partiels.
- CSS manquant (contact.css) et feuilles vides → perception de finition faible, requêtes 404 répétées.
- Manque de responsive/viewport handling pour sections 100vh → risques de contenu coupé sur mobile petit.
