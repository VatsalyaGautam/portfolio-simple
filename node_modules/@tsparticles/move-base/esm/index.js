import { BaseMover } from "./BaseMover.js";
export async function loadBaseMover(engine, refresh = true) {
    await engine.addMover("base", () => {
        return Promise.resolve(new BaseMover());
    }, refresh);
}
