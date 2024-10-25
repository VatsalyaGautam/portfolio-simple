import { AbsorbersPlugin } from "./AbsorbersPlugin.js";
export async function loadAbsorbersPlugin(engine, refresh = true) {
    await engine.addPlugin(new AbsorbersPlugin(), refresh);
}
export * from "./AbsorberContainer.js";
export * from "./Enums/AbsorberClickMode.js";
