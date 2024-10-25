import { ParallaxMover } from "./ParallaxMover.js";
export async function loadParallaxMover(engine, refresh = true) {
    await engine.addMover("parallax", () => {
        return Promise.resolve(new ParallaxMover());
    }, refresh);
}
