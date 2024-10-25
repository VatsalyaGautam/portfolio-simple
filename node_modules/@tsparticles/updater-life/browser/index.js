import { LifeUpdater } from "./LifeUpdater.js";
export async function loadLifeUpdater(engine, refresh = true) {
    await engine.addParticleUpdater("life", async (container) => {
        return Promise.resolve(new LifeUpdater(container));
    }, refresh);
}
