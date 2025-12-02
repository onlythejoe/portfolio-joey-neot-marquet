# Audit Responsive (Sprint 9)

Pages analysées : home/*, about/*, expertises/*, portfolio/*, vision/*, contact/contact.html. CSS analysés : assets/css/tokens/ea.tokens.css, assets/css/master/*.css, assets/css/ui/*.css (incl. components).

## Problèmes repérés
- Typographie non fluide : tailles fixes (ux-title/lead/paragraph/labels) sans clamp → risque de titres trop grands ou trop petits sur mobile/tablette.
- Largeur de texte : aucune contrainte CPL (70–80ch) ni max-width sur preview/détail → blocs peuvent s’étirer en desktop large et devenir pénibles à lire.
- Grilles : `.ux-grid-2/3` basées sur auto-fit minmax 16rem sans break spécifique → en viewport moyen, des demi-colonnes peuvent persister ; manque de repli forcé en 1 colonne sous les breakpoints.
- Padding/spacing : sections et highlights utilisent variables fixes ; sous mobile, certains padding restent élevés et les tags/CTA peuvent s’empiler serrés.
- Tags/CTA : `.ux-tag` taille fixe, pas de wrap explicite ; risque de dépassement horizontal si tags nombreux.
- Overflows : pas de `overflow-x:hidden` global ; éventuels débordements (long mots/tags) peuvent générer un scroll horizontal.
- Scroll/height : `ea-view`/sections utilisent 100vh par défaut ; sur mobile, des ajustements existent mais peuvent laisser des restes de min-height selon le contenu dense (risque de coupe avec scroll-snap si contenu dépasse).

## CSS à surveiller
- assets/css/tokens/ea.tokens.css : échelles de typo/espaces fixes, pas de clamp.
- assets/css/master/sections.master.css : scroll-snap, min-height 100vh, padding larges ; repli mobile partiel.
- assets/css/master/ea.master.css : layout grid, skip-link z-index.
- assets/css/ui/ux-layer.css : définitions des titres/paragraphe/stack/grid/tags sans variantes responsive.
- assets/css/ui/ux-patterns.css : grilles basées sur auto-fit, pas de repli dédié.
- assets/css/ui/components/* : tags/badges/cards accordions sans clamp ni ajustement mobile.
