import { SquareDrawer } from "./SquareDrawer.js";
export async function loadSquareShape(engine, refresh = true) {
    await engine.addShape(new SquareDrawer(), refresh);
}
