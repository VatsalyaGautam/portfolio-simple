import { RollUpdater } from "./RollUpdater.js";
export async function loadRollUpdater(engine, refresh = true) {
    await engine.addParticleUpdater("roll", () => {
        return Promise.resolve(new RollUpdater());
    }, refresh);
}
