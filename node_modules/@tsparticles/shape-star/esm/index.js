import { StarDrawer } from "./StarDrawer.js";
export async function loadStarShape(engine, refresh = true) {
    await engine.addShape(new StarDrawer(), refresh);
}
