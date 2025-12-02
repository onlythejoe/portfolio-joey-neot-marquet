## Tests fonctionnels (manuels)
- Navigation rapide (popstate + change page) : OK, abortController évite états partiels.
- Open/Back section : OK, détail/preview bascule, URL mise à jour, cache conservé.
- Menu activation : OK, état persistant via sessionStorage si query absente.
- Progress-nav : OK, points actifs recalculés (ResizeObserver + rAF throttle).
- Scroll comportement : OK, snap désactivé mobile et en reduced-motion; menu seuil adaptatif.
- Focus check : skip-link fonctionne, cta/menu/links focus visibles.
- Erreur fetch simulée : fallback section “indisponible” affichée sans planter le shell.
