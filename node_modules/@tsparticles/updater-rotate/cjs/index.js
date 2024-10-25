"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadRotateUpdater = loadRotateUpdater;
const RotateUpdater_js_1 = require("./RotateUpdater.js");
async function loadRotateUpdater(engine, refresh = true) {
    await engine.addParticleUpdater("rotate", container => {
        return Promise.resolve(new RotateUpdater_js_1.RotateUpdater(container));
    }, refresh);
}
