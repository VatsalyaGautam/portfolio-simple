(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./RollUpdater.js"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.loadRollUpdater = loadRollUpdater;
    const RollUpdater_js_1 = require("./RollUpdater.js");
    async function loadRollUpdater(engine, refresh = true) {
        await engine.addParticleUpdater("roll", () => {
            return Promise.resolve(new RollUpdater_js_1.RollUpdater());
        }, refresh);
    }
});
