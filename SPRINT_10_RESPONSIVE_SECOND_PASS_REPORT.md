# Sprint 10 — Responsive Ultra-Polish

- Ajustements typographiques : max-width resserré (74ch) pour leads/paragrahes, max 68ch en mobile ; line-height mobile 1.55 ; clamps conservés pour titres/lead/paragraphs.
- Grilles : `ux-grid-3` passe à 2 colonnes sur tablette (`--ea-bp-lg`), 1 colonne en mobile (`--ea-bp-md`), gaps mobiles maintenus.
- Stacks/blocks : padding des highlights/quotes/notes clampé pour éviter la lourdeur en petits écrans; stacks max-width 82ch + centrage maintenu.
- Tags/CTA : tags centrés (justify-content center), CTA inline-flex wrap avec padding clamp, align center.
- Layout : `ea-layout` overflow-x hidden; containers centrés via margin auto; sections mobiles min-height auto conservée.
- Livrables : audit/issue/grid map (second pass) + diff patch.
- Tests : non (CSS-only).
