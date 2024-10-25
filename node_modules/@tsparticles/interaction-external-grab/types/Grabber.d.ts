import { ExternalInteractorBase, type IModes, type Modes, type Particle, type RecursivePartial } from "@tsparticles/engine";
import type { GrabContainer, GrabMode, IGrabMode } from "./Types.js";
export declare class Grabber extends ExternalInteractorBase<GrabContainer> {
    constructor(container: GrabContainer);
    clear(): void;
    init(): void;
    interact(): void;
    isEnabled(particle?: Particle): boolean;
    loadModeOptions(options: Modes & GrabMode, ...sources: RecursivePartial<(IModes & IGrabMode) | undefined>[]): void;
    reset(): void;
}
