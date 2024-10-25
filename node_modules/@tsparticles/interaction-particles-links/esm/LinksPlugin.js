import { LinkInstance } from "./LinkInstance.js";
export class LinksPlugin {
    constructor() {
        this.id = "links";
    }
    getPlugin(container) {
        return Promise.resolve(new LinkInstance(container));
    }
    loadOptions() {
    }
    needsPlugin() {
        return true;
    }
}
