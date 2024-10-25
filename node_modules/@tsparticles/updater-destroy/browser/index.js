import { DestroyUpdater } from "./DestroyUpdater.js";
export async function loadDestroyUpdater(engine, refresh = true) {
    await engine.addParticleUpdater("destroy", container => {
        return Promise.resolve(new DestroyUpdater(engine, container));
    }, refresh);
}
