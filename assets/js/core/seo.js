/**
 * EA SEO MINIMAL
 * Met à jour le titre selon pages.json
 */

import { loadPagesConfig } from "./config-cache.js";
import { EVENTS } from "./constants.js";

const FALLBACK_DESCRIPTION = "Portfolio Joey-Néot Marquet — creative technologist, design × code × systèmes.";

function ensureMeta(name) {
    let tag = document.querySelector(`meta[name="${name}"]`);
    if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute("name", name);
        document.head.appendChild(tag);
    }
    return tag;
}

export async function applySeo(page) {
    const config = await loadPagesConfig();
    const meta = config[page];

    if (!meta) {
        document.title = "Electronic Artefacts";
        ensureMeta("description").setAttribute("content", FALLBACK_DESCRIPTION);
        return;
    }

    document.title = `Electronic Artefacts — ${meta.title}`;
    const description = meta.description || FALLBACK_DESCRIPTION;
    ensureMeta("description").setAttribute("content", description);
}

window.addEventListener(EVENTS.pageLoaded, () => {
    const params = new URLSearchParams(window.location.search);
    const page = params.get("page") || "home";
    applySeo(page);
});
