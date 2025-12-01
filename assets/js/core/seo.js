/**
 * EA SEO MINIMAL
 * Met à jour le titre selon pages.json
 */

import { loadPagesConfig } from "./config-cache.js";
import { EVENTS } from "./constants.js";

const FALLBACK_DESCRIPTION = "Portfolio Joey-Néot Marquet — creative technologist, design × code × systèmes.";
const SITE_NAME = "Electronic Artefacts";

function ensureMeta(name) {
    let tag = document.querySelector(`meta[name="${name}"]`);
    if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute("name", name);
        document.head.appendChild(tag);
    }
    return tag;
}

function ensureProperty(property) {
    let tag = document.querySelector(`meta[property="${property}"]`);
    if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute("property", property);
        document.head.appendChild(tag);
    }
    return tag;
}

export async function applySeo(page) {
    const config = await loadPagesConfig();
    const meta = config[page];

    const title = meta ? `${SITE_NAME} — ${meta.title}` : SITE_NAME;
    const description = (meta && meta.description) || FALLBACK_DESCRIPTION;

    document.title = title;
    ensureMeta("description").setAttribute("content", description);
    ensureProperty("og:title").setAttribute("content", title);
    ensureProperty("og:site_name").setAttribute("content", SITE_NAME);
    ensureProperty("og:description").setAttribute("content", description);
    ensureProperty("twitter:title").setAttribute("content", title);
    ensureMeta("twitter:card").setAttribute("content", "summary");
    ensureMeta("twitter:description").setAttribute("content", description);
}

window.addEventListener(EVENTS.pageLoaded, (evt) => {
    const params = new URLSearchParams(window.location.search);
    const page = params.get("page") || evt?.detail?.page || "home";
    applySeo(page);
});
