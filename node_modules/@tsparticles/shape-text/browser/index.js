import { TextDrawer } from "./TextDrawer.js";
export async function loadTextShape(engine, refresh = true) {
    await engine.addShape(new TextDrawer(), refresh);
}
