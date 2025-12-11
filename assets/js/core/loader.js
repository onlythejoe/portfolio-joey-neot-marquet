import { injectGlobalComponents } from "./composer-global.js";
import { composePage } from "../composer/composer.js";
import { EVENTS, SELECTORS } from "./constants.js";
import "./progress-nav.js";
import "./scroll-engine.js";
import "./menu.js";
import "./seo.js";
import "./detail-ux.js";

function resolvePage() {
    return new URLSearchParams(window.location.search).get("page") || "home";
}

function resolveSection() {
    return new URLSearchParams(window.location.search).get("section");
}

let currentController = null;

async function load() {
    if (currentController) currentController.abort();
    currentController = new AbortController();
    const { signal } = currentController;

    const page = resolvePage();
    const detailSection = resolveSection();
    try {
        await injectGlobalComponents();
        const composition = await composePage(page, detailSection, { signal });
        if (signal.aborted) return;
        window.dispatchEvent(new CustomEvent(EVENTS.pageLoaded, { detail: { page, section: detailSection, seo: composition?.seo } }));
        window.dispatchEvent(new CustomEvent("ea-analytics", { detail: { page, section: detailSection } }));
    } catch (err) {
        if (signal.aborted) return;
        console.error("EA Loader error", err);
        const container = document.querySelector(SELECTORS.pageContent);
        if (container) container.innerHTML = "<section class='ea-section'><div class='ea-container'><p>Chargement interrompu. Réessayez.</p></div></section>";
    }
}

window.addEventListener("DOMContentLoaded", load);
window.addEventListener("popstate", load);
