import { ParticlesInteractorBase, type RecursivePartial } from "@tsparticles/engine";
import type { IParticlesLinkOptions, LinkContainer, LinkParticle, ParticlesLinkOptions } from "./Types.js";
export declare class Linker extends ParticlesInteractorBase {
    linkContainer: LinkContainer;
    constructor(container: LinkContainer);
    clear(): void;
    init(): void;
    interact(p1: LinkParticle): void;
    isEnabled(particle: LinkParticle): boolean;
    loadParticlesOptions(options: ParticlesLinkOptions, ...sources: (RecursivePartial<IParticlesLinkOptions> | undefined)[]): void;
    reset(): void;
    private readonly _setColor;
}
