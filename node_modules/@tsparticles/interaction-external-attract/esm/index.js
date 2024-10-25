import { Attractor } from "./Attractor.js";
export async function loadExternalAttractInteraction(engine, refresh = true) {
    await engine.addInteractor("externalAttract", container => {
        return Promise.resolve(new Attractor(engine, container));
    }, refresh);
}
export * from "./Options/Classes/Attract.js";
export * from "./Options/Interfaces/IAttract.js";
