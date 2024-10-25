import { EmittersCircleShapeGenerator } from "./EmittersCircleShapeGenerator.js";
export async function loadEmittersShapeCircle(engine, refresh = true) {
    const emittersEngine = engine;
    emittersEngine.addEmitterShapeGenerator?.("circle", new EmittersCircleShapeGenerator());
    await emittersEngine.refresh(refresh);
}
