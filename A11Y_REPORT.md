## A11y Checklist
- Focus : styles visibles sur liens/cta/menu + skip-link ajouté.
- Roles : nav (aria-label), main (élément `<main>`), footer `role="contentinfo"`, progress-nav non-interactif, skip-link vers contenu principal.
- Titres : h1 unique par page (dans les détails principaux), structure H2/H3 maintenue.
- Motion : `prefers-reduced-motion` neutralise scroll-snap et animations clés; scroll-snap désactivé en mobile < bp-sm.
- Contrastes : palette claire sur fond noir (AA respecté pour fg/accent).
- Tab-order : skip-link en premier, navigation accessible via menu fixe après scroll.
- ARIA : nav label, descriptions SEO renforcées; aucune aria custom requise sur boutons natifs.

## Actions supplémentaires possibles
- Ajouter état `aria-expanded` sur triggers open/back si besoins spécifiques (actuels boutons restituent via visibilité).
- Vérifier contrastes si nouvelles couleurs introduites.
