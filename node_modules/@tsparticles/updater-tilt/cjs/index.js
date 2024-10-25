"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadTiltUpdater = loadTiltUpdater;
const TiltUpdater_js_1 = require("./TiltUpdater.js");
async function loadTiltUpdater(engine, refresh = true) {
    await engine.addParticleUpdater("tilt", container => {
        return Promise.resolve(new TiltUpdater_js_1.TiltUpdater(container));
    }, refresh);
}
