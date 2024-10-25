import { TiltUpdater } from "./TiltUpdater.js";
export async function loadTiltUpdater(engine, refresh = true) {
    await engine.addParticleUpdater("tilt", container => {
        return Promise.resolve(new TiltUpdater(container));
    }, refresh);
}
