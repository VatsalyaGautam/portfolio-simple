"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadParticlesAttractInteraction = loadParticlesAttractInteraction;
const Attractor_js_1 = require("./Attractor.js");
async function loadParticlesAttractInteraction(engine, refresh = true) {
    await engine.addInteractor("particlesAttract", container => {
        return Promise.resolve(new Attractor_js_1.Attractor(container));
    }, refresh);
}
