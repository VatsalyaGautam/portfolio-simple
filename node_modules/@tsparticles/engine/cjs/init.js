"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.init = init;
const Engine_js_1 = require("./Core/Engine.js");
const HslColorManager_js_1 = require("./Utils/HslColorManager.js");
const RgbColorManager_js_1 = require("./Utils/RgbColorManager.js");
const ColorUtils_js_1 = require("./Utils/ColorUtils.js");
function init() {
    const rgbColorManager = new RgbColorManager_js_1.RgbColorManager(), hslColorManager = new HslColorManager_js_1.HslColorManager();
    (0, ColorUtils_js_1.addColorManager)(rgbColorManager);
    (0, ColorUtils_js_1.addColorManager)(hslColorManager);
    const engine = new Engine_js_1.Engine();
    engine.init();
    return engine;
}
