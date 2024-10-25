import { SizeUpdater } from "./SizeUpdater.js";
export async function loadSizeUpdater(engine, refresh = true) {
    await engine.addParticleUpdater("size", () => {
        return Promise.resolve(new SizeUpdater());
    }, refresh);
}
