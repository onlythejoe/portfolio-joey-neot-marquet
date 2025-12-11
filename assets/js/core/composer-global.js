import { getComponentUrl, getLayoutUrl } from "./resolver.js";

const fragmentCache = new Map();

export async function injectGlobalComponents() {
    const slots = {
        "#ea-head-slot": { path: "head.html", resolver: getLayoutUrl },
        "#ea-body-start-slot": { path: "body-start.html", resolver: getLayoutUrl },
        "#ea-menu-slot": { path: "menu.html", resolver: getComponentUrl },
        "#ea-footer-slot": { path: "footer.html", resolver: getComponentUrl },
        "#ea-body-end-slot": { path: "body-end.html", resolver: getLayoutUrl }
    };

    for (const [slot, meta] of Object.entries(slots)) {
        const el = document.querySelector(slot);
        if (!el) continue;
        const url = (meta.resolver || getComponentUrl)(meta.path || meta);
        try {
            if (fragmentCache.has(url)) {
                el.innerHTML = fragmentCache.get(url);
                continue;
            }
            const res = await fetch(url);
            const html = res.ok ? await res.text() : "";
            fragmentCache.set(url, html);
            el.innerHTML = html;
        } catch (err) {
            console.warn("EA Composer Global: fragment fallback for", url, err);
            const fallback = "";
            fragmentCache.set(url, fallback);
            el.innerHTML = fallback;
        }
    }
}
