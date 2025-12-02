# Audit responsive v2 (Sprint 10)

Portée : toutes pages (home/about/expertises/portfolio/vision/contact) et CSS (tokens, master, ui).

- Typographies : clamp déjà en place pour title/subtitle/lead/paragraph mais line-height mobile pas harmonisée; max-width ok (72–82ch) mais pas de CPL stricte sur lead/paragraphe en mobile.
- Alignement : stacks max-width 82ch mais pas centrage explicite des tags/cta; sections mobiles réduisent padding mais pas toujours centrées; ea-container width min calc (90% / 96%) peut laisser asymétries sur tablettes larges.
- Grilles : ux-grid-3 forcée 1 col < bp-lg mais pas de palier 2 colonnes sur tablette; gaps mobiles ok mais manque palier intermédiaire.
- Stacks : gaps mobile réduits mais certaines highlights/quotes/notes restent un peu généreuses; vertical rhythm à harmoniser.
- Tags & CTA : tags nowrap + clamp mais container align left; CTA inline-block avec align center mais pas wrap multi; padding CTA fixe (var tokens) sans clamp.
- Overflow/layout : body overflow-x hidden; sections mobile min-height auto; reste risque si grids à 2 cols sur mid break non forcé; cards/quotes padding ok mais pas explicit max-width for detail containers.
