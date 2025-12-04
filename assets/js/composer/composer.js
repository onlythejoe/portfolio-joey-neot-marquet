import { getPartialUrl } from "../core/resolver.js";
import { loadPagesConfig } from "../core/config-cache.js";
import { SELECTORS, CLASSES } from "../core/constants.js";

const sectionCache = new Map();

function normalizeText(value) {
    const trimmed = value?.trim();
    return trimmed || undefined;
}

function sanitizeSeoPayload(payload) {
    if (!payload || typeof payload !== "object") return null;

    const title = normalizeText(payload.title);
    const description = normalizeText(payload.description);
    const image = normalizeText(payload.image);

    if (!title && !description && !image) return null;
    return { title, description, image };
}

function parseSeoJson(textContent) {
    if (!textContent) return null;
    try {
        return sanitizeSeoPayload(JSON.parse(textContent));
    } catch (err) {
        console.warn("EA SEO: invalid JSON payload", err);
        return null;
    }
}

function extractSeoMetadata(container) {
    const seoNode = container.querySelector("[data-ea-seo]");
    if (seoNode) {
        const rawContent = seoNode.tagName === "META"
            ? seoNode.getAttribute("content")
            : seoNode.textContent;
        const fromJson = parseSeoJson(rawContent);
        if (fromJson) return fromJson;
    }

    const datasetNode = container.querySelector("[data-ea-title],[data-ea-description],[data-ea-image]");
    if (datasetNode) {
        return sanitizeSeoPayload({
            title: datasetNode.dataset.eaTitle,
            description: datasetNode.dataset.eaDescription,
            image: datasetNode.dataset.eaImage
        });
    }

    return null;
}

function updateUrl(page, sectionId) {
    const url = new URL(window.location.href);
    url.searchParams.set("page", page);

    if (sectionId) {
        url.searchParams.set("section", sectionId);
    } else {
        url.searchParams.delete("section");
    }

    history.pushState({}, "", url);
}

// TODO Phase 4: add transition manager for section open/close.
function createSectionController(container, page) {
    const scrollContainer = document.querySelector(SELECTORS.pageContent);
    const sections = [...container.querySelectorAll(SELECTORS.section)].map((section) => ({
        node: section,
        id: section.dataset.section,
        preview: section.querySelector(SELECTORS.preview),
        detail: section.querySelector(SELECTORS.detail)
    }));

    const applySectionState = (targetSectionId = null) => {
        const hasTarget = targetSectionId && sections.some((s) => s.id === targetSectionId);
        const inDetail = Boolean(targetSectionId && hasTarget);

        sections.forEach(({ node, id, preview, detail }) => {
            const isTarget = inDetail && id === targetSectionId;
            const shouldOpen = !inDetail || isTarget;

            node.classList.toggle(CLASSES.sectionOpen, shouldOpen);
            node.classList.toggle(CLASSES.sectionHidden, inDetail && !isTarget);

            if (preview) preview.hidden = inDetail && isTarget;
            if (detail) detail.hidden = !(inDetail && isTarget);
        });

        document.body.classList.toggle(CLASSES.modeDetail, inDetail);
        scrollContainer?.classList.toggle(CLASSES.contentDetail, inDetail);

        if (inDetail) {
            const target = sections.find((s) => s.id === targetSectionId);
            target?.node.scrollIntoView({ behavior: "smooth", block: "start" });
        } else if (scrollContainer) {
            scrollContainer.scrollTop = 0;
        }
    };

    const resolveTarget = (btn) => btn.dataset.sectionTarget || btn.closest(SELECTORS.section)?.dataset.section;

    const handleOpen = (target) => {
        if (!target) return;
        updateUrl(page, target);
        applySectionState(target);
    };

    const handleBack = () => {
        updateUrl(page, null);
        applySectionState(null);
    };

    container.querySelectorAll(SELECTORS.openTrigger).forEach((btn) => {
        btn.addEventListener("click", () => handleOpen(resolveTarget(btn)));
    });

    container.querySelectorAll(SELECTORS.backTrigger).forEach((btn) => {
        btn.addEventListener("click", handleBack);
    });

    return { applySectionState };
}

async function loadSection(page, section, signal) {
    const url = getPartialUrl(page, section);
    const cacheKey = `${page}/${section}`;
    if (sectionCache.has(cacheKey)) return sectionCache.get(cacheKey);

    const promise = fetch(url, { signal })
        .then((res) => (res.ok ? res.text() : null))
        .catch(() => null)
        .then((html) => {
            if (signal?.aborted) throw new DOMException("aborted", "AbortError");
            if (!html) {
                return `<section class='ea-section ea-missing'><div class='ea-container'><p>Section indisponible : ${section}</p></div></section>`;
            }
            return html;
        });

    sectionCache.set(cacheKey, promise);
    promise.catch(() => sectionCache.delete(cacheKey));
    return promise;
}

export async function composePage(page, detailSection = null, options = {}) {
    const { signal } = options;
    const container = document.querySelector(SELECTORS.pageContent);
    if (!container) return;

    container.setAttribute("aria-busy", "true");
    container.innerHTML = "<div class='ea-loading' role='status' aria-live='polite'>Chargement…</div>";

    const config = await loadPagesConfig();
    const meta = config[page];

    if (!meta) {
        container.innerHTML = "<section class='ea-section'><h2>Page inconnue</h2></section>";
        container.removeAttribute("aria-busy");
        return null;
    }

    try {
        const sectionsHtml = await Promise.all(
            meta.sections.map((s) => loadSection(page, s, signal))
        );
        if (signal?.aborted) return;
        container.innerHTML = sectionsHtml.join("");
    } catch (err) {
        if (signal?.aborted) return;
        container.innerHTML = `<section class='ea-section'><div class='ea-container'><p>Erreur de chargement. Merci de réessayer.</p></div></section>`;
        throw err;
    } finally {
        container.removeAttribute("aria-busy");
    }

    const controller = createSectionController(container, page);
    controller.applySectionState(detailSection);

    const seo = extractSeoMetadata(container);

    // Page composition complete; caller is responsible for dispatching lifecycle events.
    return { controller, seo };
}
