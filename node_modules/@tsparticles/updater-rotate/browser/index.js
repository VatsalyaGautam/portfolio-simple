import { RotateUpdater } from "./RotateUpdater.js";
export async function loadRotateUpdater(engine, refresh = true) {
    await engine.addParticleUpdater("rotate", container => {
        return Promise.resolve(new RotateUpdater(container));
    }, refresh);
}
