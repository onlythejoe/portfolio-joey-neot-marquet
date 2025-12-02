import { resolveFromRoot } from "./resolver.js";
import { EVENTS } from "./constants.js";

const DATA_URL = resolveFromRoot("assets/data/halos.datamap.json");
const HALO_COUNT = 3;
const DEFAULT_PALETTE = {
    colors: ["#0b1f33", "#1a1a2e", "#102039"],
    intensity: 1
};

let dataPromise = null;

function resolvePage() {
    return new URLSearchParams(window.location.search).get("page") || "home";
}

async function loadData() {
    if (dataPromise) return dataPromise;
    dataPromise = fetch(DATA_URL)
        .then((res) => (res.ok ? res.json() : null))
        .catch(() => null)
        .then((json) => json || { default: DEFAULT_PALETTE, pages: [] });
    return dataPromise;
}

function ensureContainer() {
    let layer = document.querySelector("#ea-halos");
    if (!layer) {
        layer = document.createElement("div");
        layer.id = "ea-halos";
        const root = document.querySelector("#ea-root");
        const layout = document.querySelector("#ea-layout");
        if (root && layout) {
            root.insertBefore(layer, layout);
        } else {
            document.body.appendChild(layer);
        }
    }
    return layer;
}

function ensureHalos(container) {
    const halos = container.querySelectorAll(".ea-halo");
    if (halos.length === HALO_COUNT) return halos;
    container.innerHTML = "";
    return Array.from({ length: HALO_COUNT }).map(() => {
        const h = document.createElement("div");
        h.className = "ea-halo";
        container.appendChild(h);
        return h;
    });
}

function pickPalette(page, data) {
    const entry = data.pages?.find((p) => p.page === page);
    const colors = entry?.colors && entry.colors.length >= HALO_COUNT
        ? entry.colors
        : entry?.detailColors && entry.detailColors.length >= HALO_COUNT
            ? entry.detailColors
            : data.default?.colors && data.default.colors.length >= HALO_COUNT
                ? data.default.colors
                : DEFAULT_PALETTE.colors;
    const intensity = entry?.intensity ?? data.default?.intensity ?? DEFAULT_PALETTE.intensity;
    return { colors: colors.slice(0, HALO_COUNT), intensity };
}

function clamp(val, min, max) {
    return Math.min(Math.max(val, min), max);
}

function randIn(min, max) {
    return min + Math.random() * (max - min);
}

function applyPalette(container, halos, palette) {
    const { colors, intensity } = palette;
    const opacity = clamp(0.22 * intensity, 0.16, 0.4);
    const size = clamp(46 * intensity, 38, 64);
    const sizeMobile = clamp(60 * intensity, 48, 72);
    const blur = clamp(120 * intensity, 90, 160);
    const blurMobile = clamp(90 * intensity, 70, 130);

    container.style.setProperty("--halo-1", colors[0]);
    container.style.setProperty("--halo-2", colors[1]);
    container.style.setProperty("--halo-3", colors[2]);
    container.style.setProperty("--halo-opacity", opacity.toFixed(3));
    container.style.setProperty("--halo-size", `${size}vmin`);
    container.style.setProperty("--halo-size-mobile", `${sizeMobile}vmin`);
    container.style.setProperty("--halo-blur", `${blur}px`);
    container.style.setProperty("--halo-blur-mobile", `${blurMobile}px`);

    const ranges = [
        { x: [-8, 26], y: [8, 42], scale: [0.9, 1.1], dur: [34, 42] },
        { x: [40, 76], y: [18, 68], scale: [0.85, 1.05], dur: [36, 44] },
        { x: [14, 62], y: [52, 92], scale: [0.8, 1.05], dur: [32, 46] }
    ];

    halos.forEach((halo, i) => {
        const r = ranges[i] || ranges[ranges.length - 1];
        const x = randIn(r.x[0], r.x[1]).toFixed(2);
        const y = randIn(r.y[0], r.y[1]).toFixed(2);
        const scale = randIn(r.scale[0], r.scale[1]).toFixed(2);
        const dur = randIn(r.dur[0], r.dur[1]).toFixed(2);

        halo.style.setProperty("--halo-x", `${x}vw`);
        halo.style.setProperty("--halo-y", `${y}vh`);
        halo.style.setProperty("--halo-scale", scale);
        halo.style.setProperty("--halo-dur", `${dur}s`);
    });

    container.classList.add("is-ready");
}

async function updateHalos(page) {
    const container = ensureContainer();
    const halos = ensureHalos(container);
    const data = await loadData();
    const palette = pickPalette(page, data);
    applyPalette(container, halos, palette);
}

function handlePageLoaded(evt) {
    const page = evt?.detail?.page || resolvePage();
    updateHalos(page);
}

function init() {
    handlePageLoaded();
    window.addEventListener(EVENTS.pageLoaded, handlePageLoaded);
}

document.addEventListener("DOMContentLoaded", init);
