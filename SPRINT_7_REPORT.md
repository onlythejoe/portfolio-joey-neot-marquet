# Sprint 7 — Mobile (Responsiveness + Micro-Copy)

## Objectif
- Rendre l’expérience mobile lisible et stable sans toucher à la DA ni au scroll-snap desktop.
- Alléger les textes trop denses (préviews/intros) pour About, Vision, Expertises, Contact.

## Ajustements CSS
- `assets/css/ui/ux-layer.css` : typographies clampées et max-width pour limiter les longueurs de ligne, padding des blocs resserré sous `--ea-bp-md`, gaps adaptés pour les stacks et grids.
- `assets/css/master/sections.master.css` : sections alignées en haut sur mobile, padding clampé, conteneurs moins larges, scroll-snap neutralisé sous `--ea-bp-md`, vues en hauteur auto pour éviter les débordements.
- `assets/css/master/ea.master.css` : layout simplifié en une colonne et progress-nav masqué sous `--ea-bp-md` pour libérer l’espace mobile.

## Micro-copy allégée
- About (`pages/about/index.html`, `pages/about/bio.html`) : previews resserrées, intro et timeline condensées tout en gardant la voix hybride design × code.
- Vision (`pages/vision/manifeste.html`) : manifeste condensé (preview, lead, citations) pour tenir sur mobile sans perte de sens.
- Expertises (`pages/expertises/index.html`) : nouvelle preview courte et détail structuré (design system, architecture front, prototypage, pilotage produit).
- Contact (`pages/contact/contact.html`) : intro raccourcie pour tenir en deux lignes mobiles.

## Impact
- Lisibilité mobile améliorée (lignes maîtrisées, padding plus généreux, grilles repliées).
- Aucune animation modifiée, DA desktop et scroll-snap desktop conservés.
- Sections de détail plus aérées sur mobile, sans ajout d’éléments visibles nouveaux.
