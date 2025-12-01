**Portée**
- Audit complet EA Lite Portfolio : architecture, CSS/tokens, UX layer/patterns, pages, JS/loader/router, perf, accessibilité, DA/éditorial, roadmap.

**Constats majeurs**
- Architecture très linéaire (HTML partiels + fetch sections) mais sans couche d’orchestration : double import CSS (head.html + index), CSS de page fantômes (contact.css manquant), placeholders (about/index, expertises/index), pas de build ni de gestion d’erreurs réseau.
- Design System fragmenté : tokens partiels, variables dupliquées (theme.css vs ea.tokens.css), deux couches layout concurrentes (`core/layout.css` vs `ui/layout/ea.layout.css`), composants EA (`ea-card`, `ea-badge`, etc.) redéfinis dans l’UX Layer (`ux-card`, `ux-badge`) → dette de cohérence.
- UX Layer riche en primitives mais peu de responsive et pas de z-index scale utilisé; absence de `prefers-reduced-motion`; resets/typo non importée (Inter non chargée).
- Pages : structure répétitive preview/detail, beaucoup de texte long sans respiration, hiérarchie Hn peu maîtrisée (h2 partout, h1 unique seulement en home/hero), sections placeholder, une page contact hors pattern (pas de preview/detail, pas de `ea-view`).
- JS : loader/composer simples mais sans abort ni cache, fetchs séquentiels, pas de gestion d’échec (404 silencieux), progress-nav et menu dépendent du scroll container ; SEO minimal (titre uniquement).
- Perf : 12 fichiers CSS chargés sur toutes les pages (dont 5 vides + 1 manquant), aucun bundling/minification, pas de font loading, pas de lazy des sections (fetch série), DOM profond en mode detail sans garde mémoire.
- Accessibilité : contrastes OK sur fond noir mais pas de focus visibles custom, pas d’aria/roles pour toggles open/back, menu invisible <50px scroll (aucun skip), titres désordonnés, liens externes sans `rel` sécurisé.
- DA/Éditorial : ton premium cohérent mais textes très denses, répétitions entre sections (EA Lite expliqué plusieurs fois), manque de micro-rythme (lists, pulls, stats), aucune imagerie/placeholder réelle pour slots gallery.

**Opportunités prioritaires**
- Unifier le Design System (tokens → layer → patterns → composants) et supprimer les doublons EA/UX.
- Corriger les assets manquants et la cascade CSS (ordre imports, suppression des feuilles vides).
- Renforcer le router/loader (cache, abort, gestion erreurs, SEO/meta dynamiques).
- Structurer les pages : hiérarchie Hn stable, respirations (listes, highlights courts), pages placeholder à remplir, Contact alignée sur le pattern.
- Mettre en place un plan de perf (bundle CSS/JS, lazy sections, font loading) et un socle a11y (focus, aria, `prefers-reduced-motion`).
