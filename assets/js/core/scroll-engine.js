/**
 * EA SCROLL ENGINE — magnétisme + menu dynamique
 */
import { SELECTORS, CLASSES, EVENTS } from "./constants.js";

let teardown = null;
const MENU_THRESHOLD_DESKTOP = 50;
const MENU_THRESHOLD_MOBILE = 20;

export function initScrollEngine() {
    if (typeof teardown === "function") teardown();
    teardown = null;

    const container = document.querySelector(SELECTORS.pageContent);
    const menu = document.querySelector(SELECTORS.menu);

    if (!container || !menu) return;

    function currentThreshold() {
        return window.innerWidth < 720 ? MENU_THRESHOLD_MOBILE : MENU_THRESHOLD_DESKTOP;
    }

    function updateMenuVisibility() {
        const y = container.scrollTop;
        if (y < currentThreshold()) {
            menu.classList.remove(CLASSES.menuVisible);
        } else {
            menu.classList.add(CLASSES.menuVisible);
        }
    }

    updateMenuVisibility();
    container.addEventListener("scroll", updateMenuVisibility, { passive: true });
    teardown = () => container.removeEventListener("scroll", updateMenuVisibility);
}

window.addEventListener(EVENTS.pageLoaded, initScrollEngine);
