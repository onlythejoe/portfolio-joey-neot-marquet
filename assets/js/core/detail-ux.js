import { EVENTS, SELECTORS } from "./constants.js";

const STATE_FLAG = "eaEnhanced";

function slugify(text) {
    return text
        .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
        .trim()
        .replace(/['"`]/g, "")
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "");
}

function buildAnchorNav(root) {
    const headings = [...root.querySelectorAll("h2, h3")].filter((node) => node.textContent?.trim());
    if (headings.length < 2) return null;

    const nav = document.createElement("nav");
    nav.className = "ea-detail-anchor-nav";
    nav.setAttribute("aria-label", "Navigation dans le détail");

    const list = document.createElement("div");
    list.className = "ea-detail-anchor-list";

    headings.forEach((heading) => {
        const label = heading.textContent.trim();
        const id = heading.id || slugify(label);
        heading.id = id;

        const anchor = document.createElement("a");
        anchor.className = "ea-detail-anchor";
        anchor.textContent = label;
        anchor.href = `#${id}`;
        list.append(anchor);
    });

    nav.append(list);
    return nav;
}

function enhanceDetail(detail, page) {
    if (detail.dataset[STATE_FLAG]) return;

    const section = detail.closest(SELECTORS.section);
    const backButton = detail.querySelector(SELECTORS.backTrigger);
    const preservedNodes = [...detail.children].filter((child) => child !== backButton);
    const shell = document.createElement("div");
    shell.className = "ea-detail-shell";

    const header = document.createElement("div");
    header.className = "ea-detail-header";

    const meta = document.createElement("div");
    meta.className = "ea-detail-meta";

    const kicker = document.createElement("p");
    kicker.className = "ea-detail-kicker";
    kicker.textContent = "Vue détail";

    const headingText = detail.querySelector(".ux-title, .ux-subtitle, h1, h2, h3")?.textContent?.trim()
        || section?.querySelector(".ux-title")?.textContent?.trim()
        || section?.dataset.section
        || "Détail";
    const heading = document.createElement("p");
    heading.className = "ea-detail-heading";
    heading.textContent = headingText;

    meta.append(kicker, heading);

    const tagsFromPreview = section?.querySelector(".ea-preview .ux-tags");
    if (tagsFromPreview) {
        const tags = tagsFromPreview.cloneNode(true);
        tags.classList.add("ea-detail-tags");
        meta.append(tags);
    }

    const actions = document.createElement("div");
    actions.className = "ea-detail-header-actions";

    if (backButton) {
        backButton.classList.add("ea-detail-action", "ea-detail-action--primary");
        actions.append(backButton);
    }

    header.append(meta, actions);

    const body = document.createElement("div");
    body.className = "ea-detail-body";

    const grid = document.createElement("div");
    grid.className = "ea-detail-grid";

    preservedNodes.forEach((node) => {
        const card = document.createElement("div");
        card.className = "ea-detail-card";
        if (node.dataset?.layout) {
            card.dataset.layout = node.dataset.layout;
        }
        card.append(node);
        grid.append(card);
    });

    const anchorNav = buildAnchorNav(grid);
    if (anchorNav) header.append(anchorNav);

    body.append(grid);
    shell.append(header, body);
    detail.innerHTML = "";
    detail.append(shell);
    detail.dataset[STATE_FLAG] = "true";
}

function enhanceAllDetails(page) {
    const details = document.querySelectorAll(SELECTORS.detail);
    details.forEach((detail) => enhanceDetail(detail, page));
}

window.addEventListener(EVENTS.pageLoaded, (event) => {
    enhanceAllDetails(event.detail?.page || "");
});
