## Lighthouse & Perf (offline)
- Audit simulé (pas de run réseau) : risques identifiés → scroll-snap coûteux mobile (désactivé < bp-sm), animations réduites si prefers-reduced-motion, progress-nav throttle rAF, fetch parallèles avec AbortController.
- JS : évite reflows majeurs; listeners scroll en passive; throttle progress-nav; abort loader/composer; cache sections.
- GPU-friendly : ombres légères, pas d’effets lourds ajoutés; transitions limitées, motion réduite en mobile/réduit.
- Images : aucune image servie actuellement → pas de lazy nécessaire; prévoir `loading="lazy"` si assets ajoutés.
- CSS dead code : non nettoyé automatiquement; priorité donnée à stabilité.
- Recos non-appliquées faute de build : bundling/minification à traiter ultérieurement avec pipeline (hors scope sprint).

## Actions menées
- Désactivation du scroll-snap sur petits écrans; maintien prefers-reduced-motion.
- Skip-link pour améliorer navigation clavier.
- JSON-LD et meta SEO renforcés (impact SEO/perf perception).
- Lint configs ajoutées (ESLint/Stylelint) pour prévenir dérives futures.

## Points de vigilance
- Si médias ajoutés : utiliser `loading="lazy"` et tailles explicites.
- Quand pipeline sera en place : minifier CSS/JS, générer critical CSS, ajouter preconnect pour fonts.
