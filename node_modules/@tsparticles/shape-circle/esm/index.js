import { CircleDrawer } from "./CircleDrawer.js";
export async function loadCircleShape(engine, refresh = true) {
    await engine.addShape(new CircleDrawer(), refresh);
}
