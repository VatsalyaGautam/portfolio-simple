import { Remover } from "./Remover.js";
export async function loadExternalRemoveInteraction(engine, refresh = true) {
    await engine.addInteractor("externalRemove", container => {
        return Promise.resolve(new Remover(container));
    }, refresh);
}
export * from "./Options/Classes/Remove.js";
export * from "./Options/Interfaces/IRemove.js";
