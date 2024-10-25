import { type IContainerPlugin } from "@tsparticles/engine";
import type { LinkContainer, LinkParticle } from "./Types.js";
export declare class LinkInstance implements IContainerPlugin {
    private readonly container;
    private readonly _freqs;
    constructor(container: LinkContainer);
    drawParticle(context: CanvasRenderingContext2D, particle: LinkParticle): void;
    init(): Promise<void>;
    particleCreated(particle: LinkParticle): void;
    particleDestroyed(particle: LinkParticle): void;
    private readonly _drawLinkLine;
    private readonly _drawLinkTriangle;
    private readonly _drawTriangles;
    private readonly _getLinkFrequency;
    private readonly _getTriangleFrequency;
}
