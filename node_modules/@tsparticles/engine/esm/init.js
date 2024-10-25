import { Engine } from "./Core/Engine.js";
import { HslColorManager } from "./Utils/HslColorManager.js";
import { RgbColorManager } from "./Utils/RgbColorManager.js";
import { addColorManager } from "./Utils/ColorUtils.js";
export function init() {
    const rgbColorManager = new RgbColorManager(), hslColorManager = new HslColorManager();
    addColorManager(rgbColorManager);
    addColorManager(hslColorManager);
    const engine = new Engine();
    engine.init();
    return engine;
}
