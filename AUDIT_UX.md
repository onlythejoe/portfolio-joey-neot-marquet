**Mise à jour Halos (Sprint Halos)**
- Arrière-plan atmosphérique (3 halos floutés) ajouté sous l’UX, couleurs pilotées par page via datamap, animations lentes et PRM respecté ; aucune interaction avec les patterns UX ni le scroll-snap.

**Langage UX & Patterns**
- Primitives riches (titles, lead, paragraph, label, meta, tags, cta) + layouts (stack, grid, side-note) et patterns (hero-detail, value-proof, manifesto, case-study). Cohérence globale mais doublons avec EA components; aucune typographie fluide ni responsive dédiée.
- Pattern preview/detail systématique : intéressant pour la narration mais manque de variations (timeline, cards, metrics) et de transitions (aucune micro-interaction visuelle sur open/back).
- Rythme : beaucoup de blocs longs sans listes ni respirations; `ux-gallery-slot` jamais alimenté; `ux-accordion` utilisé une seule fois (conseils).
- Accessibilité UX : boutons open/back sans texte complémentaire ni aria; pas de focus visible; scroll-snap peut gêner la lecture continue.

**Page Home**
- `hero` : h1 présent, copie forte mais dense; CTA unique (“↘ Voir le détail”) peu explicite. Manque d’éléments de preuve (metrics, badges, clients, tech stack).
- `intro` : très longue narration; labels utilisés en h3 alors que c’est un sous-titre → hiérarchie confuse. Peu de break visuels (images, tags, chiffres).
- `index` : redite partielle de la vision portfolio; répétitions EA Lite vs portfolio; pas de visuels dans `ux-gallery-slot`.

**Page About**
- `bio` : texte très dense, timeline textuelle sans points forts visuels (dates, lieux). h2 “À propos Un parcours non-linéaire” collé sans ponctuation.
- `skills` : structure en 3 blocs + liste; répétitions d’influences déjà citées ailleurs; labels en h3 tout en majuscules → lisibilité moyenne.
- `vision` : nombreuses citations (ux-quote) monotones; manque d’appel à l’action ou de synthèse; longueur élevée sans ancrage visuel.
- `index` : placeholder à remplir.

**Page Expertises**
- `direction-artistique` / `systems-engineering` / `conseils` : copies premium cohérentes mais très longues, répétitives (mantra “code devient matière”, “hybride design/système”) et sans preuve. Accordeons de `conseils` sans icône/state, longs titres difficiles à scanner.
- Pas de section “index” utile (placeholder). Pas de différenciation visuelle entre expertises (mêmes gabarits).

**Page Portfolio**
- `index` : bon storytelling EA Lite mais redondant avec home; aucune illustration ou démonstration concrète; `ux-gallery-slot` vide.
- `project-001/002/003` : preview minimal (titre + CTA), détail pauvre (001) ou très narratif (002/003) sans structure projet (rôle, scope, stack, résultats). Pas de liens ou médias.

**Page Vision**
- `manifeste` : solide concept mais >1500 mots sans respiration; quotes doublées; manque de résumé haut de page et de CTA vers contact/portfolio.

**Page Contact**
- Ne suit pas le pattern preview/detail : expérience coupée par rapport au reste; pas de `ea-view` → hauteur/alignement divergents. Liens CTA sans `rel` et sans texte contextuel (“Travaillons ensemble” pointe sur `#`). Manque de moyens alternatifs (calendrier, formulaire, fuseaux horaires).

**Éditorial & Cohérence**
- Ton premium constant mais répétitions massives (EA Lite, hybridation design/code) dans plusieurs sections. Peu de données factuelles (chiffres, résultats, clients, stacks).
- Manque de microcopy d’orientation (état courant, “Mode détail”, “Retour aux sections”). CTA generiques (“Voir le détail”) non contextualisés.
- Hiérarchie Hn : h2 partout, h3 parfois utilisés pour labels; absence de structure page-level (titre principal par page).
