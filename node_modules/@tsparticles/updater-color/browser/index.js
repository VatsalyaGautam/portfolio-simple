import { ColorUpdater } from "./ColorUpdater.js";
export async function loadColorUpdater(engine, refresh = true) {
    await engine.addParticleUpdater("color", container => {
        return Promise.resolve(new ColorUpdater(container));
    }, refresh);
}
