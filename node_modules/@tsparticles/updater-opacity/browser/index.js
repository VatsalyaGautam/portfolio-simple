import { OpacityUpdater } from "./OpacityUpdater.js";
export async function loadOpacityUpdater(engine, refresh = true) {
    await engine.addParticleUpdater("opacity", container => {
        return Promise.resolve(new OpacityUpdater(container));
    }, refresh);
}
