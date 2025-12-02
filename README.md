# EA Lite — Electronic Artefacts Vanilla Web Framework
Micro-framework maison en HTML/CSS/JS vanilla pour des expériences premium, légères et immersives.

## Résumé express
EA Lite est la motorisation propriétaire d’Electronic Artefacts (EA) : un socle front ultra-léger, sans dépendance, qui orchestre pages modulaires, transitions douces, halos dynamiques et design system tokenisé. Le portfolio actuel est la démo vivante du framework.

## Points forts
- Router et loader custom (History API + fetch) pour composer les pages à la volée.
- Sections preview/detail avec état contrôlé, scroll magnétique et navigation de progression.
- Système Halos : fonds dynamiques multi-couches, palettes par page, animations maîtrisées.
- Design system tokenisé (CSS custom properties) + UX Layer responsive 100% en clamp/vw/vh.
- Aucune dépendance externe, stack 100% vanilla, prête à servir en statique.
- SEO minimal automatique piloté par `config/pages.json`.

## Carte du projet
```
/index.html                 # point d’entrée + slots injectés
/config/pages.json          # routing & métadonnées pages
/layout/                    # fragments globaux (head, menu, footer…)
/assets/css/                # tokens, core, master, UI, pages
/assets/js/
  /core/                    # router/loader, halos, scroll-engine, seo, bus
  /composer/                # composition des sections
  /utils/                   # (réservé évolutions)
/components/                # fragments HTML injectables
/pages/                     # sections HTML (preview/detail) par page
```

## Flow runtime : router + loader
1. `index.html` charge `halos.js` puis `loader.js` (modules ES natifs).
2. Le loader résout `?page` et `?section`, injecte les composants globaux, puis compose la page via `composer.js`.
3. `composer.js` lit `config/pages.json`, fetch chaque section HTML (`/pages/{page}/{section}.html`) avec cache mémoire + AbortController.
4. Le router pousse l’état dans l’URL (History API) pour les ouvertures/retours de sections, puis émet l’événement `ea-page-loaded` (SEO, halos, progress-nav, menu, scroll-engine se branchent dessus).
5. En cas d’erreur, fallback UI embarqué pour éviter les écrans vides.

## Halos : moteur de fonds vivants
- Données : `assets/data/halos.datamap.json` décrit palettes et intensités par page.
- Rendu : 3 halos (`#ea-halos .ea-halo`) générés dynamiquement, positions aléatoires contrôlées, variables CSS (`--halo-*`) pour couleurs/blur/taille/opacité.
- Comportement : animation drift douce, transition de palette à chaque `ea-page-loaded`, respect de `prefers-reduced-motion`.
- Intégration : couche fixe isolée sous le layout (`#ea-root`), aucune dépendance externe.

## Design system & UX Layer
- Tokens (`assets/css/tokens/ea.tokens.css`) : couleurs, typographies, espacement, rayons, ombres, vitesses, breakpoints, layers.
- Master (`assets/css/master/*.css`) : reset, thème, layout en sidebar, scroll-snap vertical, progress dots, gestion du mode detail.
- UX Layer (`assets/css/ui/ux-layer.css`) : primitives typographiques, blocks, highlights, CTA, tags.
- UX Patterns (`assets/css/ui/ux-patterns.css`) : compositions prêtes à l’emploi pour les sections (timelines, cards, metrics, accordions…).
- Pages (`assets/css/pages/*.css`) : styles spécifiques par écran, découplés du core.
- Responsive natif : tout en `clamp()`, `vw`, `vh` pour une fluidité 0 breakpoints cachés.

## UX moteur
- Scroll Engine : magnétisme via `scroll-snap`, détection de seuil pour l’affichage menu (desktop/mobile), navigation de progression synchronisée.
- Menu : activation automatique du lien courant, feedback tactile, stockage léger du dernier contexte.
- Preview vs Detail : classes `ea-section--open/hidden` + `ea-content--detail` pour switcher d’une vue mosaïque à une vue article pleine largeur.
- SEO : titre/meta dynamiques (Open Graph + Twitter) pilotés par `pages.json`.

## Philosophie EA
- Minimal, contrôlé, sans superflu : aucune dépendance, juste le standard web.
- Modularité haute : sections indépendantes, composants injectés, data-driven via JSON.
- Latence basse : fetch sélectif, cache mémoire, abort sur navigation rapide.
- Marque avant tout : l’esthétique est un élément du runtime (Halos, tokens, UX Layer).

## Utilisation
1) Servir en statique (requis pour les fetch) :  
   `python -m http.server 8000` puis ouvrir `http://localhost:8000/?page=home`
2) Naviguer : le router lit `?page` et `?section`; use `history.pushState` pour rester SSR-less.
3) Ajouter une page :
   - Créer `/pages/{slug}/` et les sections HTML (ex. `hero.html`, `intro.html`).
   - Ajouter les clés dans `config/pages.json` (`title`, `sections`).
   - Optionnel : ajouter une palette dans `assets/data/halos.datamap.json`.
   - Styliser via `assets/css/pages/{slug}.css`.
4) Ajouter un composant global : placer le fragment dans `/components/`, référencer dans `composer-global.js` si nécessaire.

## Pourquoi c’est différent
- Zéro dépendance, zéro build : maîtrise totale du runtime, aucune couche opaque.
- Architecture slot/partial : pages composées en fragments HTML, config-driven.
- Esthétique pilotée par le moteur : halos, tokens, UX Layer font partie du pipeline, pas des accessoires.
- Expérience mobile-first fluide : mesures fluides, scroll-snap, animations mesurées.

## Destiné à
- Créatifs techniques, directeurs artistiques, ingénieurs front cherchant une base premium.
- Projets vitrines haut de gamme, démonstrateurs internes, futures releases EA publiques.

## Roadmap (EA lite)
- Transition manager pour l’ouverture/fermeture des sections (Phase 4, cf. TODO composer).
- Unification des events custom avec le bus interne pour la cohésion module/module.
- Hooks analytics + instrumentation micro-perf sur le loader.
- Palette Halos enrichie (détection automatique des modes détail vs preview).
- Guides de contribution + checklists QA (accessibilité, perf, motion).

## Vision EA
Electronic Artefacts construit des moteurs créatifs où le design est une capacité technique. EA Lite est la couche vanilla qui permet de montrer, tester et itérer rapidement des expériences premium avant industrialisation.

## Licence
EA Lite est un framework propriétaire Electronic Artefacts. Usage interne et démonstration uniquement, redistribution ou dérivés soumis à autorisation écrite d’Electronic Artefacts.
