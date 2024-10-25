import { LineDrawer } from "./LineDrawer.js";
export async function loadLineShape(engine, refresh = true) {
    await engine.addShape(new LineDrawer(), refresh);
}
