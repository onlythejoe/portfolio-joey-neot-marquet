# Sprint 7 — Mobile responsive & micro-copy

Pages travaillées
- `assets/css/ui/ux-layer.css`, `assets/css/master/sections.master.css`, `assets/css/master/ea.master.css` : breakpoints mobile enrichis (typographies clampées, padding ajusté, grids resserrées) pour éviter les débordements et conserver l’alignement des sections.
- `pages/about/index.html`, `pages/about/bio.html` : previews et intros raccourcies, storytelling conservé mais plus lisible sur mobile.
- `pages/vision/manifeste.html` : manifeste condensé (preview + sections) pour tenir sur mobile sans perdre la voix.
- `pages/expertises/index.html` : nouvelle preview et détail concis (design system, architecture front, prototypage, pilotage produit).
- `pages/contact/contact.html` : intro raccourcie pour tenir en deux lignes mobile.

Principes respectés
- DA desktop intacte, scroll-snap préservé sur desktop, ajustements ciblés sous `--ea-bp-md`.
- Voix et ton conservés, pas d’animations modifiées, aucune structure desktop altérée.

# Sprint 4 — Contenus & DA

Pages travaillées
- `pages/home/hero.html` : preview et détail raccourcis, CTA contextualisé, ajout de blocs focus (spécialités, stack, livrables), narration EA Lite resserrée.
- `pages/home/intro.html` : synthèse des trois couches (Tech/DA/Pilotage), texte condensé, CTA clair.
- `pages/home/index.html` : aperçu du labo clarifié, highlight sur itération et preuves, ajout de blocs focus/livrables/qualité.
- `pages/portfolio/index.html` : storytelling EA Lite raccourci, axes architecture/fluidité/animations, usages et démo synthétiques.
- `pages/portfolio/project-001.html` : ajout rôle/portée/résultats + description courte.
- `pages/portfolio/project-002.html` : copy condensée (hero premium, menus orbitaux, glow, parallaxe, minimalisme), volet labo clarifié.
- `pages/portfolio/project-003.html` : copy raccourcie (glitch, fractales, densité, motion organique, émergence, réactivité), quote/note resserrées.
- `pages/contact/contact.html` : structure en `ea-view` + `ux-stack`, CTA mail explicite, disponibilité + tags, formats d’engagement clarifiés.

Principes respectés
- Hiérarchie Hn préservée (h1 dans les détails principaux), usage exclusif des classes UX existantes.
- Aucune modification de la structure EA Lite, pas d’ajout de styles ni de JS.
- Textes raccourcis, preuves/portée/résultats ajoutés, CTA explicites.
