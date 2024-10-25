import type { IPlugin } from "@tsparticles/engine";
import type { LinkContainer } from "./Types.js";
import { LinkInstance } from "./LinkInstance.js";
export declare class LinksPlugin implements IPlugin {
    readonly id: string;
    constructor();
    getPlugin(container: LinkContainer): Promise<LinkInstance>;
    loadOptions(): void;
    needsPlugin(): boolean;
}
