"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadBasic = loadBasic;
const move_base_1 = require("@tsparticles/move-base");
const shape_circle_1 = require("@tsparticles/shape-circle");
const updater_color_1 = require("@tsparticles/updater-color");
const updater_opacity_1 = require("@tsparticles/updater-opacity");
const updater_out_modes_1 = require("@tsparticles/updater-out-modes");
const updater_size_1 = require("@tsparticles/updater-size");
async function loadBasic(engine, refresh = true) {
    await (0, move_base_1.loadBaseMover)(engine, false);
    await (0, shape_circle_1.loadCircleShape)(engine, false);
    await (0, updater_color_1.loadColorUpdater)(engine, false);
    await (0, updater_opacity_1.loadOpacityUpdater)(engine, false);
    await (0, updater_out_modes_1.loadOutModesUpdater)(engine, false);
    await (0, updater_size_1.loadSizeUpdater)(engine, false);
    await engine.refresh(refresh);
}
