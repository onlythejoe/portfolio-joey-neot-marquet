**Quick wins**
- Créer `assets/css/pages/contact.css` (même vide) ou retirer l’import pour éviter 404 réseau récurrente.
- Supprimer l’import redondant de `ea.master.css` dans `layout/head.html` (déjà chargé dans `index.html`).
- Ajouter `aria-label="Navigation principale"` sur le nav menu + `rel="noopener"` sur liens externes LinkedIn/GitHub.
- Définir un style focus visible partagé (`.ux-cta`, `.ea-section-open`, `.ea-menu-link`) et respecter `prefers-reduced-motion` pour scroll-snap/animations.
- Donner un h1 par page (ex : première section de chaque page), convertir certains h2 en h3/h4 pour hiérarchie claire.
- Réduire quelques blocs texte (Home intro, Vision, Expertises) en listes/points clés pour lisibilité immédiate.
- Injecter un état d’erreur simple pour les sections manquantes (message + CTA reload) au lieu d’un `<section>Missing</section>` brut.
