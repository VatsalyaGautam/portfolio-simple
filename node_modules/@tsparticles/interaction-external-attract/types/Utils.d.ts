import { type Particle } from "@tsparticles/engine";
import type { AttractContainer } from "./Types.js";
export declare function clickAttract(container: AttractContainer, enabledCb: (particle: Particle) => boolean): void;
export declare function hoverAttract(container: AttractContainer, enabledCb: (particle: Particle) => boolean): void;
