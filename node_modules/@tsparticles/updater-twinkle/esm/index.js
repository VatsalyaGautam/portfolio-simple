import { TwinkleUpdater } from "./TwinkleUpdater.js";
export async function loadTwinkleUpdater(engine, refresh = true) {
    await engine.addParticleUpdater("twinkle", () => {
        return Promise.resolve(new TwinkleUpdater());
    }, refresh);
}
