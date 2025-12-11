/**
 * EA SEO MINIMAL
 * Met à jour le titre en privilégiant les métadonnées fournies par les partials HTML.
 */

import { loadPagesConfig } from "./config-cache.js";
import { EVENTS } from "./constants.js";

const FALLBACK_DESCRIPTION = "Portfolio Joey-Néot Marquet — creative technologist, design × code × systèmes.";
const FALLBACK_TITLE = "Electronic Artefacts — Portfolio";
const FALLBACK_IMAGE = null;
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
    const meta = config?.[page] || {};
    const titleBase = normalize(overrides?.title) || normalize(meta?.title);
    const description = normalize(overrides?.description) || normalize(meta?.description) || FALLBACK_DESCRIPTION;
    const image = normalize(overrides?.image) || normalize(meta?.image) || FALLBACK_IMAGE;

    return {
        title: titleBase ? `${SITE_NAME} — ${titleBase}` : FALLBACK_TITLE,
        description,
        image
    };
}

function applyTags(seo) {
    if (!seo) return;
    try {
        document.title = seo.title || FALLBACK_TITLE;
        setMeta("description", seo.description || FALLBACK_DESCRIPTION);
        setProperty("og:title", seo.title || FALLBACK_TITLE);
        setProperty("og:site_name", SITE_NAME);
        setProperty("og:description", seo.description || FALLBACK_DESCRIPTION);
        setProperty("og:image", seo.image);
        setProperty("twitter:title", seo.title || FALLBACK_TITLE);
        setMeta("twitter:card", seo.image ? "summary_large_image" : "summary");
        setMeta("twitter:description", seo.description || FALLBACK_DESCRIPTION);
        setMeta("twitter:image", seo.image);
    } catch (err) {
        console.warn("EA SEO: failed to apply tags", err);
    }
}

export async function applySeo(page, overrides = null) {
    try {
        const config = await loadPagesConfig();
        const seo = resolveSeo(config, page, overrides);
        applyTags(seo);
    } catch (err) {
        console.warn("EA SEO: unable to resolve SEO", err);
        applyTags({ title: FALLBACK_TITLE, description: FALLBACK_DESCRIPTION, image: FALLBACK_IMAGE });
    }
}

window.addEventListener(EVENTS.pageLoaded, (evt) => {
    const params = new URLSearchParams(window.location.search);
    const page = params.get("page") || evt?.detail?.page || "home";
    applySeo(page, evt?.detail?.seo);
});
