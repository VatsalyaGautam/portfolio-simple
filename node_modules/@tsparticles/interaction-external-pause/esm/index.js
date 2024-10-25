import { Pauser } from "./Pauser.js";
export async function loadExternalPauseInteraction(engine, refresh = true) {
    await engine.addInteractor("externalPause", container => {
        return Promise.resolve(new Pauser(container));
    }, refresh);
}
