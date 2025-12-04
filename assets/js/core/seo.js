/**
 * EA SEO MINIMAL
 * Met à jour le titre en privilégiant les métadonnées fournies par les partials HTML.
 */

import { loadPagesConfig } from "./config-cache.js";
import { EVENTS } from "./constants.js";

const FALLBACK_DESCRIPTION = "Portfolio Joey-Néot Marquet — creative technologist, design × code × systèmes.";
const SITE_NAME = "Electronic Artefacts";

function normalize(value) {
    const trimmed = value?.trim();
    return trimmed || undefined;
}

function setMeta(name, content) {
    const selector = `meta[name="${name}"]`;
    const existing = document.querySelector(selector);
    if (!content) {
        if (existing) existing.remove();
        return;
    }

    const tag = existing || document.createElement("meta");
    tag.setAttribute("name", name);
    tag.setAttribute("content", content);
    if (!existing) document.head.appendChild(tag);
}

function setProperty(property, content) {
    const selector = `meta[property="${property}"]`;
    const existing = document.querySelector(selector);
    if (!content) {
        if (existing) existing.remove();
        return;
    }

    const tag = existing || document.createElement("meta");
    tag.setAttribute("property", property);
    tag.setAttribute("content", content);
    if (!existing) document.head.appendChild(tag);
}

function resolveSeo(config, page, overrides = null) {
    const meta = config[page];
    const titleBase = normalize(overrides?.title) || normalize(meta?.title);
    const description = normalize(overrides?.description) || normalize(meta?.description) || FALLBACK_DESCRIPTION;
    const image = normalize(overrides?.image) || normalize(meta?.image);

    return {
        title: titleBase ? `${SITE_NAME} — ${titleBase}` : SITE_NAME,
        description,
        image
    };
}

function applyTags(seo) {
    document.title = seo.title;
    setMeta("description", seo.description);
    setProperty("og:title", seo.title);
    setProperty("og:site_name", SITE_NAME);
    setProperty("og:description", seo.description);
    setProperty("og:image", seo.image);
    setProperty("twitter:title", seo.title);
    setMeta("twitter:card", seo.image ? "summary_large_image" : "summary");
    setMeta("twitter:description", seo.description);
    setMeta("twitter:image", seo.image);
}

export async function applySeo(page, overrides = null) {
    const config = await loadPagesConfig();
    const seo = resolveSeo(config, page, overrides);
    applyTags(seo);
}

window.addEventListener(EVENTS.pageLoaded, (evt) => {
    const params = new URLSearchParams(window.location.search);
    const page = params.get("page") || evt?.detail?.page || "home";
    applySeo(page, evt?.detail?.seo);
});
