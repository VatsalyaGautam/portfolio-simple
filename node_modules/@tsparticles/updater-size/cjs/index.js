"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadSizeUpdater = loadSizeUpdater;
const SizeUpdater_js_1 = require("./SizeUpdater.js");
async function loadSizeUpdater(engine, refresh = true) {
    await engine.addParticleUpdater("size", () => {
        return Promise.resolve(new SizeUpdater_js_1.SizeUpdater());
    }, refresh);
}
