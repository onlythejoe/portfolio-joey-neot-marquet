# CASCADE MAP — EA Vanilla Web Framework

## Global Foundations
- Tokens (`assets/css/tokens/ea.tokens.css`:1-90): defines colors, typography, layout scales (`--ea-content-max` clamp(60ch, 80vw, 90ch), `--ea-content-wide` clamp(68ch, 86vw, 72rem), sidebar metrics `--ea-progress-nav-width`, `--ea-content-offset-left`, breakpoints sm/md/lg/xl).
- Reset & theme (`assets/css/core/reset.css`:1-20, `assets/css/core/theme.css`:1-9): box-sizing border-box, body `overflow-x:hidden`, base fonts/background.

## Layout + Sidebar System
- Root grid (`assets/css/master/ea.master.css`:21-36): `#ea-layout` is grid `minmax(var(--ea-progress-nav-width),5%) 1fr`; overflow-x hidden. `#ea-progress-nav` column exists even when empty.
- Section shell (`assets/css/master/sections.master.css`:13-27): `.ea-section` min-height 100dvh, padding-left `--ea-content-offset-left` (sidebar width + gap), padding-right `--ea-pad-inline`; scroll-snap enabled.
- Internal frames (`sections.master.css`:30-76): `.ea-view` applies negative margin + half offset padding, `max-width: calc(--ea-content-max + offset/2)`; `.ea-container` capped by `--ea-content-wide` plus offset; `.ea-preview/.ea-detail` capped by `--ea-content-max`.
- Detail mode (`sections.master.css`:131-205): body gains `ea-mode-detail`, `#ea-layout` switches to single column, progress-nav hidden. Sections flattened to `max-width: clamp(80vw, 86vw, 90vw)` with 3–5vw side padding; descendants `.ea-container/.ea-view/.ea-detail` forced to 100% width/padding 0.
- Mobile shells (`sections.master.css`:215-283): snap removed; sections/containers limited to `max-width: clamp(92vw,96vw,100vw)` with 2–4vw padding; detail mode mobile `max-width: clamp(94vw,98vw,100vw)`.

## UX Layer (Blocks & Patterns)
- Typographic primitives (`assets/css/ui/ux-layer.css`:4-74): `ux-title/subtitle` capped by `--ea-content-max`; leads/paragraphs capped at `clamp(85%,92vw,100%)`.
- Blocks & highlights (`ux-layer.css`:100-181): `.ux-block`/`ux-quote`/`ux-note`/`ux-highlight` max-width `--ea-content-max`, padding `clamp(2vw,3vw,4vw)`.
- CTA & tags (`ux-layer.css`:183-210, 510-541, 551-569): inline-flex, hover translateY, outlines; tags use nowrap and vw-based padding.
- Stacks & grids (`ux-layer.css`:292-337): `.ux-stack` max-width `--ea-content-max`; `.ux-grid-2/3` use `grid-template-columns: repeat(auto-fit, minmax(min(52vw,94%), 1fr))`, padding-right `--ea-pad-inline`.
- Detail overrides (`ux-layer.css`:118-124, 329-337, 339-359): many blocks/grids/tags forced to 100% width but padding remains.
- Section groups/timeline/accordion (`ux-layer.css`:366-448): all capped by `--ea-content-max` and padded on the right with `--ea-pad-inline`.

## UI Components
- Cards (`assets/css/ui/components/ea.cards.css`:1-12): padding clamp(1.25rem,3vw,2.25rem) radius lg, max-width `--ea-content-max`.
- Badges/pills (`assets/css/ui/components/ea.badges.css`:1-13): inline padding clamp-based, radius md/round, opacity .8.
- Accordion component (`assets/css/ui/components/ea.accordion.css`:1-16): max-width `--ea-content-max` plus inline padding; content height transitions.
- Animations (`assets/css/ui/components/ea.anim.css`:1-15): fade-in + prefers-reduced-motion safeguard.

## Page Partials
- HTML sections (`pages/**`): each `section.ea-section` nests `.ea-container.ea-view` then `.ea-preview` + `.ea-detail` stacks using UX primitives. Some single-state sections (contact) skip preview.
- No page-specific CSS beyond placeholders in `assets/css/pages/*.css` (currently empty).

## Overflow & Scroll Systems
- Global overflow locks (`reset.css`:11-19, `ea.master.css`:37-40, `sections.master.css`:26, `ea.master.css`:21-35) enforce `overflow-x:hidden` on body/root/layout/sections; detail mode relaxes on `#ea-root` and sections (`sections.master.css`:146-159).
- Scroll-snap container `#ea-page-content` (`sections.master.css`:2-10, 215-239) controls snapping; disabled on mobile and in detail mode.

## Router/Loader (non-touch per constraints)
- Loader and composer (`assets/js/core/loader.js`, `assets/js/composer/composer.js`): assemble sections from `config/pages.json`, toggle `ea-mode-detail` + `ea-content--detail`, manage URL `page/section` params.
- Progress nav/menu/scroll engine (`assets/js/core/progress-nav.js`, `scroll-engine.js`, `menu.js`): attach to selectors only; no layout mutations besides class toggles.

