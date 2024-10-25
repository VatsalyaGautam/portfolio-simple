import { Attractor } from "./Attractor.js";
export async function loadParticlesAttractInteraction(engine, refresh = true) {
    await engine.addInteractor("particlesAttract", container => {
        return Promise.resolve(new Attractor(container));
    }, refresh);
}
