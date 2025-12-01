# UX Layer Reference

## Primitives
- `.ux-title`, `.ux-subtitle`, `.ux-lead`, `.ux-paragraph`, `.ux-label`, `.ux-meta`, `.ux-keyword`, `.ux-link`, `.ux-divider`, `.ux-tag`.
- Typo scale pilotée par les tokens (`--ea-font-size-*`, `--ea-leading-*`, `--ea-weight-*`).
- Focus visibles sur `.ux-link` et `.ux-cta`.

## Blocks
- `.ux-block` (pile verticale), `.ux-highlight` (surface + bordure), `.ux-quote` (bordure gauche accent), `.ux-note` (surface douce), `.ux-cta` (pill), `.ux-metric`, `.ux-badge`, `.ux-card`, `.ux-list` (puces stylisées), `.ux-gallery-slot` (placeholder media).
- Alias EA : `.ea-badge`, `.ea-card`, `.ea-metric`, `.ea-accordion`, `.ea-timeline-vertical` partagent les mêmes règles que leurs équivalents UX.

## Layouts
- `.ux-stack` / `.ea-stack` : pile verticale avec `gap` tokenisé.
- `.ux-grid-2`, `.ux-grid-3` : grilles auto-fit min 16rem ; repli en 1 colonne sous `--ea-bp-md`.
- `.ux-side-note` : 2 colonnes (note + contenu), repli en 1 colonne sous `--ea-bp-md`.
- `.ux-section-group` : groupes verticaux espacés (gap augmente ≥ `--ea-bp-md`).

## Patterns
- `.ux-hero-detail`, `.ux-section-value-proof`, `.ux-manifesto`, `.ux-case-study` (+ `.ux-case-grid`), `.ux-faq` (avec `.ux-accordion`).
- Recommandation : envelopper le contenu dans `.ux-stack` / `.ux-block` pour assurer le rythme vertical.

## Motion & A11y
- Durées/eases : `--ea-dur-*`, `--ea-ease-*`; `prefers-reduced-motion` neutralise transitions critiques (cta, fade-in, scroll-snap).
- Focus styles sur liens/menu/cta; nav possède `aria-label`.

## Responsive
- Breakpoints tokens : `--ea-bp-sm/md/lg/xl` (rem).
- Grilles et side-note se replient sous `--ea-bp-md`.
- Sections utilisent `--ea-pad`, `--ea-section-vspace`, `--ea-layout-max` pour aligner la largeur/respiration.

## Usage guide
- Shell EA : `.ea-section` + `.ea-container` + `.ea-view` (fourni par master).
- Contenu : uniquement via classes `.ux-*` (ou alias `.ea-*` pour compat).
- Pas de styles inline ou utilitaires ad hoc ; s’appuyer sur les tokens et primitives pour garantir la cohérence.
