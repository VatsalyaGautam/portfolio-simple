(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@tsparticles/engine"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.loadEasingQuadPlugin = loadEasingQuadPlugin;
    const engine_1 = require("@tsparticles/engine");
    async function loadEasingQuadPlugin() {
        (0, engine_1.addEasing)(engine_1.EasingType.easeInQuad, value => value ** 2);
        (0, engine_1.addEasing)(engine_1.EasingType.easeOutQuad, value => 1 - (1 - value) ** 2);
        (0, engine_1.addEasing)(engine_1.EasingType.easeInOutQuad, value => (value < 0.5 ? 2 * value ** 2 : 1 - (-2 * value + 2) ** 2 / 2));
        await Promise.resolve();
    }
});
