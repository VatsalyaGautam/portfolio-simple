import { Collider } from "./Collider.js";
export async function loadParticlesCollisionsInteraction(engine, refresh = true) {
    await engine.addInteractor("particlesCollisions", container => {
        return Promise.resolve(new Collider(container));
    }, refresh);
}
