import { OutOfCanvasUpdater } from "./OutOfCanvasUpdater.js";
export async function loadOutModesUpdater(engine, refresh = true) {
    await engine.addParticleUpdater("outModes", container => {
        return Promise.resolve(new OutOfCanvasUpdater(container));
    }, refresh);
}
