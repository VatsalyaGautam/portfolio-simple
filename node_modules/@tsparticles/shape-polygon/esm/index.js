import { PolygonDrawer } from "./PolygonDrawer.js";
import { TriangleDrawer } from "./TriangleDrawer.js";
export async function loadGenericPolygonShape(engine, refresh = true) {
    await engine.addShape(new PolygonDrawer(), refresh);
}
export async function loadTriangleShape(engine, refresh = true) {
    await engine.addShape(new TriangleDrawer(), refresh);
}
export async function loadPolygonShape(engine, refresh = true) {
    await loadGenericPolygonShape(engine, refresh);
    await loadTriangleShape(engine, refresh);
}
