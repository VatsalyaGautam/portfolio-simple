import { WobbleUpdater } from "./WobbleUpdater.js";
export async function loadWobbleUpdater(engine, refresh = true) {
    await engine.addParticleUpdater("wobble", container => {
        return Promise.resolve(new WobbleUpdater(container));
    }, refresh);
}
