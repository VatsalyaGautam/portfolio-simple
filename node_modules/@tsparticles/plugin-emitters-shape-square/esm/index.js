import { EmittersSquareShapeGenerator } from "./EmittersSquareShapeGenerator.js";
export async function loadEmittersShapeSquare(engine, refresh = true) {
    const emittersEngine = engine;
    emittersEngine.addEmitterShapeGenerator?.("square", new EmittersSquareShapeGenerator());
    await emittersEngine.refresh(refresh);
}
