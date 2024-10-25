import { StrokeColorUpdater } from "./StrokeColorUpdater.js";
export async function loadStrokeColorUpdater(engine, refresh = true) {
    await engine.addParticleUpdater("strokeColor", container => {
        return Promise.resolve(new StrokeColorUpdater(container));
    }, refresh);
}
