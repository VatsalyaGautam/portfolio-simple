import { Grabber } from "./Grabber.js";
export async function loadExternalGrabInteraction(engine, refresh = true) {
    await engine.addInteractor("externalGrab", container => {
        return Promise.resolve(new Grabber(container));
    }, refresh);
}
export * from "./Options/Classes/Grab.js";
export * from "./Options/Classes/GrabLinks.js";
export * from "./Options/Interfaces/IGrab.js";
export * from "./Options/Interfaces/IGrabLinks.js";
