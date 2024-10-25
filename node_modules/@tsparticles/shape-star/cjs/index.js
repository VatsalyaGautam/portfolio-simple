"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadStarShape = loadStarShape;
const StarDrawer_js_1 = require("./StarDrawer.js");
async function loadStarShape(engine, refresh = true) {
    await engine.addShape(new StarDrawer_js_1.StarDrawer(), refresh);
}
